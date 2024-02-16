"use client";

import { useKeyPress, useRest } from "@/services/hooks";
import { getCurrentState, saveCurrentState } from "@/services/organize";
import { cls, onDoubleClick, onKeyPress, reOrderByIndex } from "@/services/util";
import { bifurcateBy, sortByKey } from "@deepakvishwakarma/ts-util";
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
    case "add_todo":
      return {
        ...state,
        updatedAt,
        todos: [action.todo, ...state.todos],
      };
    case "delete_todo":
      return {
        ...state,
        updatedAt,
        todos: state.todos.filter((a) => a.id !== action.todo.id),
      };
    case "update_todo":
      return {
        ...state,
        updatedAt,
        todos: [
          ...state.todos.map((a) => {
            return a.id === action.todo.id ? action.todo : a;
          }),
        ],
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
  useEffect(() => {
    fetch("https://api.quotable.io/quotes/random?tags=love|inspirational|motivational|passion|self-care")
      .then((x) => x.json())
      .then((res) => {
        dispatch({ type: "qoth", qoth: res[0] || {} });
      });
  }, []);

  const [state, dispatch] = useReducer(organizeReducer, {
    notes: [],
    todos: [],
  });

  useEffect(() => {
    getCurrentState().then((state) => {
      if (state.updatedAt) dispatch({ type: "sync", state });
    });
  }, []);

  useEffect(() => {
    if (state.updatedAt) saveCurrentState(state);
  }, [state.updatedAt]);

  useKeyPress(() => alert("control+B"), "KeyB", true);

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
            <Notes notes={state.notes} dispatch={dispatch} />
            <Todos todos={state.todos} dispatch={dispatch} />
          </div>
        </div>
      </div>
    </div>
  );
}
function Todos({ todos = [], dispatch }) {
  const draggedItemRef = useRef();
  const [highs, lows] = bifurcateBy(sortByKey(todos, "id", -1), (todo) => todo.priority === 1);
  const onEditChange = ({ todo, text }) => {
    if (todo.text !== text) {
      todo.text = text;
      dispatch({ type: "update_todo", todo });
    }
  };
  const onSwitch = (priority) => {
    if (draggedItemRef.current.priority !== priority) dispatch({ type: "update_todo", todo: { ...draggedItemRef.current, priority } });
  };
  const addNew = () => {
    dispatch({ type: "add_todo", todo: { id: Date.now(), text: "TODO" } });
  };
  const delTodo = (todo) => {
    dispatch({ type: "delete_todo", todo });
  };
  const Card = ({ todo }) => (
    <div
      className="card"
      draggable
      datatodoid={todo.id}
      onDrag={() => {
        draggedItemRef.current = todo;
      }}
    >
      <i className="bi bi-x" onClick={() => delTodo(todo)}></i>
      <div className="text" contentEditable={true} onBlur={(e) => onEditChange({ todo, text: e.target?.innerText ?? "" })}>
        {todo.text}
      </div>
    </div>
  );
  return (
    <div className="todos">
      <h3>
        Things to do<i className="bi bi-pencil-square" onClick={addNew}></i>
      </h3>

      <br />
      <div className="category high" onDrop={() => onSwitch(1)} onDragOver={(e) => e.preventDefault()}>
        <h4>High</h4>
        <div className="cards">
          {!highs.length && <div className="empty-records">No Records</div>}
          {highs.map((todo) => (
            <Card todo={todo} />
          ))}
        </div>
      </div>
      <br />
      <hr />
      <div className="category low" onDrop={() => onSwitch(0)} onDragOver={(e) => e.preventDefault()}>
        <h4>Low</h4>
        <div className="cards">
          {!lows.length && <div className="empty-records">No Records</div>}
          {lows.map((todo) => (
            <Card todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Notes({ notes = [], dispatch }) {
  const inputNoteRef = useRef();
  const draggedItemRef = useRef();

  const [highlightNodeId, setHNoteId] = useState();

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

  const handleUpdateNote = (note, isDoubleClick = false) => {
    dispatch({ type: isDoubleClick ? "delete_note" : "update_note", note: { ...note, done: !note.done } });
  };

  return (
    <div className="notes">
      <h3>Notes</h3>
      <br />
      <div className="note-ctr">
        <input autoFocus ref={inputNoteRef} type="text" onKeyDown={onKeyPress(createNewNote)} />
        <i className="bi bi-send" onClick={createNewNote}></i>
      </div>
      <ul>
        {notes.map((x, index) => (
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
  );
}
