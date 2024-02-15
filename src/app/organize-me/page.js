"use client";

import { useKeyPress, useLocalStorage, useRest } from "@/services/hooks";
import { cls, onDoubleClick } from "@/services/util";
import { useCallback, useEffect, useReducer, useRef } from "react";

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
      notes: [action.note, ...state.notes.filter((a) => a.id !== action.note.id)],
    };
  }
  if (action.type === "delete_note") {
    return {
      updatedAt: Date.now(),
      notes: state.notes.filter((a) => a.id !== action.note.id),
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

export default function Home() {
  const {
    data: { isFetching, error, data },
    request,
  } = useRest();
  
  const inputNoteRef = useCallback((i) => {
    i?.focus();
  }, []);

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

  useEffect(() => {
    console.log(1, inputNoteRef);
  }, []);

  useKeyPress(() => alert("control+B"), "KeyB", true);

  const handleUpdateNote = (note, isDoubleClick = false) => {
    dispatch({ type: isDoubleClick ? "delete_note" : "update_note", note: { ...note, done: !note.done } });
  };

  const quote = data?.[0];
  if (isFetching || error || !quote) return null;

  return (
    <div className="container organize">
      <div className="full-cover">
        <div className="content">
          <div className="quote header">
            <blockquote>{quote.content}</blockquote>
            <i className="author">{`- ${quote.author}`}</i>
          </div>
          <div className="pane">
            <div className="notes">
              <h4>Notes</h4>
              <input
                autoFocus
                ref={inputNoteRef}
                type="text"
                onKeyDown={(e) => {
                  if (e.code == "Enter") {
                    const note = { id: Date.now(), note: e.target.value };
                    dispatch({ type: "add_note", note });
                    e.target.value = "";
                  }
                }}
              />
              <ul>
                {state.notes.map((x) => (
                  <li
                    className={cls({ note: true, done: x.done })}
                    onClick={onDoubleClick((_, d) => handleUpdateNote(x, d))}
                    key={`note__${x.id}`}
                  >
                    {x.note}
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
