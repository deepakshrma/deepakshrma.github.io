"use client";

import { useKeyPress, useLocalStorage, useRest } from "@/services/hooks";
import { cls, onDoubleClick, onKeyPress, reOrderByIndex } from "@/services/util";
import { useCallback, useEffect, useReducer, useRef, useState } from "react";

function organizeReducer(state, action) {
  if (action.type === "add_note") {
    return {
      updatedAt: Date.now(),
      notes: [action.note, ...state.notes],
    };
  }
  if (action.type === "update_note") {
    return {
      updatedAt: Date.now(),
      notes: [
        ...state.notes.map((a) => {
          return a.id === action.note.id ? action.note : a;
        }),
      ],
    };
  }
  if (action.type === "delete_note") {
    return {
      updatedAt: Date.now(),
      notes: state.notes.filter((a) => a.id !== action.note.id),
    };
  }
  if (action.type === "swap_notes") {
    return {
      updatedAt: Date.now(),
      notes: reOrderByIndex(action.srcId, action.trgId, state.notes),
    };
  }
  if (action.type === "sync") {
    return {
      updatedAt: Date.now(),
      notes: action.notes,
    };
  }
  throw Error("Invalid Action", action);
}

// const log = (tag) => (e) => console.log(`tag: ${tag}`, e.target?.attributes.datanoteid.value, e);

export default function Home() {
  const {
    data: { isFetching, error, data },
    request,
  } = useRest();

  // const inputNoteRef = useCallback((i) => {
  //   i?.focus();
  // }, []);
  const inputNoteRef = useRef();
  const draggedItemRef = useRef();

  const [highlightNodeId, setHNoteId] = useState();

  useEffect(() => {
    request("https://api.quotable.io/quotes/random?tags=love|inspirational|motivational|passion|self-care");
  }, []);

  const [info, setInfo] = useLocalStorage("tasks", { notes: [] });
  const [state, dispatch] = useReducer(organizeReducer, info);

  useEffect(() => {
    if (info.updatedAt) dispatch({ type: "sync", notes: info.notes });
  }, [info?.updatedAt]);

  useEffect(() => {
    if (state.updatedAt) setInfo(state);
  }, [state?.updatedAt]);

  useKeyPress(() => alert("control+B"), "KeyB", true);

  const handleUpdateNote = (note, isDoubleClick = false) => {
    dispatch({ type: isDoubleClick ? "delete_note" : "update_note", note: { ...note, done: !note.done } });
  };

  const handleSwap = (ev) => {
    const srcId = draggedItemRef.current;
    const trgId = ev.target?.attributes.datanoteid.value;
    setHNoteId("");
    dispatch({ type: "swap_notes", srcId, trgId });
  };

  const createNewNote = () => {
    const note = { id: Date.now(), note: inputNoteRef.current.value };
    dispatch({ type: "add_note", note });
    inputNoteRef.current.value = "";
  };

  const quote = data?.[0];

  return (
    <div className="container organize">
      <div className="full-cover">
        <div className="content">
          <div className="quote header">
            <blockquote>{quote?.content}</blockquote>
            <i className="author">{`- ${quote?.author}`}</i>
          </div>
          <div className="pane">
            <div className="notes">
              <h3>Notes</h3>
              <br />
              <div className="note-ctr">
                <input autoFocus ref={inputNoteRef} type="text" onKeyDown={onKeyPress(createNewNote)} />
                <i className="bi bi-send" onClick={createNewNote}></i>
              </div>
              <ul>
                {state?.notes.map((x, index) => (
                  <li
                    className={cls({ note: true, done: x.done, highlight: highlightNodeId === x.id })}
                    onClick={onDoubleClick((_, d) => handleUpdateNote(x, d))}
                    key={`note__${x.id}`}
                    datanoteid={x.id}
                    onDrop={handleSwap}
                    onDragEnter={() => setHNoteId(x.id)}
                    onDrag={(ev) => (draggedItemRef.current = ev.target.attributes?.datanoteid.value)}
                    onDragOver={(e) => e.preventDefault()}
                    draggable
                  >
                    {`${index + 1}- ${x.note}`}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
