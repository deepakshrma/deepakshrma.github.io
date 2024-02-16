"use client";

import { useKeyPress, useRest } from "@/services/hooks";
import { getCurrentState, saveCurrentState } from "@/services/organize";
import { cls, onDoubleClick, onKeyPress, reOrderByIndex } from "@/services/util";
import { useEffect, useReducer, useRef, useState } from "react";

function organizeReducer(state, action) {
  const updatedAt = Date.now();
  switch (action.type) {
    case "add_note":
      return {
        ...state,
        updatedAt,
        notes: [action.note, ...state.notes],
      };
    case "qoth":
      return {
        ...state,
        updatedAt,
        qoth: action.qoth,
      };
    case "update_note":
      return {
        ...state,
        updatedAt,
        notes: [
          ...state.notes.map((a) => {
            return a.id === action.note.id ? action.note : a;
          }),
        ],
      };
    case "delete_note":
      return {
        ...state,
        updatedAt,
        notes: state.notes.filter((a) => a.id !== action.note.id),
      };
    case "swap_notes":
      return {
        ...state,
        updatedAt,
        notes: reOrderByIndex(action.srcId, action.trgId, state.notes),
      };
    case "sync":
      return {
        ...action.state,
        updatedAt,
      };
    default:
      throw Error("Invalid Action", action);
  }
}

// const log = (tag) => (e) => console.log(`tag: ${tag}`, e.target?.attributes.datanoteid.value, e);

export default function Home() {
  const inputNoteRef = useRef();
  const draggedItemRef = useRef();

  const [highlightNodeId, setHNoteId] = useState();

  useEffect(() => {
    fetch("https://api.quotable.io/quotes/random?tags=love|inspirational|motivational|passion|self-care")
      .then((x) => x.json())
      .then((res) => {
        dispatch({ type: "qoth", qoth: res[0] || {} });
      });
  }, []);

  const [state, dispatch] = useReducer(organizeReducer, { notes: [] });

  useEffect(() => {
    getCurrentState().then((state) => {
      if (state.updatedAt) dispatch({ type: "sync", state });
    });
  }, []);

  useEffect(() => {
    if (state.updatedAt) saveCurrentState(state);
  }, [state.updatedAt]);

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
  let coverStyles = {};
  if (state.qoth?.tags?.length) {
    coverStyles.backgroundImage = `url(https://source.unsplash.com/1200x800/?${state.qoth?.tags},animated)`;
  }
  return (
    <div className="container organize">
      <div className="full-cover" style={coverStyles}>
        <div className="content">
          <div className="quote header">
            <blockquote>{state.qoth?.content}</blockquote>
            <i className="author">{`- ${state.qoth?.author ?? ""}`}</i>
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
