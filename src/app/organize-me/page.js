"use client";

import Anchor from "@/components/Anchor";
import Modal from "@/components/Modal";
import { useKeyPress, useMobile } from "@/services/hooks";
import {
  getCurrentState,
  getTopNews,
  saveCurrentState,
} from "@/services/organize";
import {
  cls,
  onDoubleClick,
  onKeyPress,
  reOrderByIndex,
} from "@/services/util";
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
    case "news":
      return {
        ...state,
        updatedAt,
        news: action.news,
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
        todos: [action.todo, ...(state.todos || [])],
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
    case "delete_all_todos":
      return {
        ...state,
        updatedAt,
        todos: [],
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

// const log = (tag) => (e) =>
//   console.log(`tag: ${tag}`, e.target?.attributes.datatodoid.value, e);

export default function Home() {
  const [showNews, setShowNews] = useState(false);
  useEffect(() => {
    fetch(
      "https://api.quotable.io/quotes/random?tags=love|inspirational|motivational|passion|self-care",
    )
      .then((x) => x.json())
      .then((res) => {
        dispatch({ type: "qoth", qoth: res[0] || {} });
      });
    getTopNews().then(({ data: { articles: news } }) => {
      dispatch({ type: "news", news });
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
  const isMobile = useMobile();
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
          {isMobile && showNews && (
            <Modal className="news-modal" onClose={() => setShowNews(false)}>
              <Newses news={state.news} />
            </Modal>
          )}
          {isMobile ? (
            <div className="center">
              <button className="button" onClick={() => setShowNews(true)}>
                News
              </button>
            </div>
          ) : (
            <Newses news={state.news} />
          )}
          <div className="pane">
            <Notes notes={state.notes} dispatch={dispatch} />
            <Todos todos={state.todos} dispatch={dispatch} />
          </div>
        </div>
      </div>
    </div>
  );
}
const Newses = ({ news = [] }) => {
  const ref = useRef();
  const [carouselProps, setCarouselProps] = useState({
    scrollTo: 0,
    left: true,
    right: false,
  });
  const isMobile = useMobile();
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollLeft = carouselProps.scrollTo;
    }
  }, [carouselProps.scrollTo]);

  const onLeft = () => {
    const scrollToLeft = carouselProps.scrollTo + 320;
    let scrollTo = carouselProps.scrollTo;
    if (3300 - scrollToLeft > ref.current.offsetWidth) {
      scrollTo = scrollToLeft;
    }
    let left = 3000 - scrollToLeft > ref.current.offsetWidth;
    const right = scrollTo > 0;
    setCarouselProps({ scrollTo, left, right });
  };
  const onRight = () => {
    const scrollToLeft = carouselProps.scrollTo - 320;
    let scrollTo = carouselProps.scrollTo;
    if (scrollToLeft >= 0) {
      scrollTo = scrollToLeft;
    }
    let left = 3300 - scrollToLeft > ref.current.offsetWidth;
    const right = scrollTo > 0;
    setCarouselProps({ scrollTo, left, right });
  };

  useEffect(() => {
    const id = setInterval(() => {
      if (!carouselProps.left) {
        return setCarouselProps({
          scrollTo: 0,
          left: true,
          right: false,
        });
      }
      if (carouselProps.left) {
        onLeft();
      }
    }, 5000);
    return () => clearInterval(id);
  }, [carouselProps, onLeft]);

  return (
    <div className="carousel">
      {carouselProps.left && !isMobile && (
        <i className="left bi bi-arrow-left-circle-fill" onClick={onLeft}></i>
      )}
      {carouselProps.right && !isMobile && (
        <i
          className="right bi bi-arrow-right-circle-fill"
          onClick={onRight}
        ></i>
      )}
      <div className="newses" ref={ref}>
        {news?.map(({ title, image, url, description }) => (
          <div key={`news__${title}`} className={cls({ news: true })}>
            <Anchor
              target="_blank"
              href={url}
              linkId={`news__clicked_${title}`}
            >
              <img src={image} alt="" />
            </Anchor>
            <h4>{title}</h4>
            <p title={description}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Card = ({ todo, onEditChange, delTodo, onDragItem, onSwitch }) => {
  // const [state, setState] = useState({ isDown: false, offsetTop: 0, offsetLeft: 0, styles: { position: "absolute", top: 0, left: 0 } });
  // const onTouchStart = (e) => {
  //   const ev = e.touches[0] || e.changedTouches[0];
  //   const offsetTop = e.target.offsetTop;
  //   const offsetLeft = e.target.offsetLeft;
  //   const styles = { position: "absolute", top: ev.pageY - offsetTop, left: ev.pageX - offsetLeft };
  //   setState({ ...state, isDown: true, offsetTop, offsetLeft, styles });
  // };
  // const onTouchEnd = (e) => {
  //   setState({ ...state, isDown: false });
  // };
  // const onTouchMove = (e) => {
  //   if (state.isDown) {
  //     const ev = e.touches[0] || e.changedTouches[0];
  //     const styles = { position: "absolute", top: ev.pageY - state.offsetTop, left: ev.pageX - state.offsetLeft };
  //     setState({ ...state, styles });
  //   }
  // };
  return (
    <div className="card" draggable datatodoid={todo.id} onDrag={onDragItem}>
      <i
        className={`bi bi-${todo.priority == 1 ? "arrow-down" : "arrow-up"} move`}
        onClick={() => onSwitch(todo, (todo.priority + 1) % 2)}
      ></i>
      <i className="bi bi-x-lg delete" onClick={() => delTodo(todo)}></i>
      <div
        className="text"
        suppressContentEditableWarning={true}
        contentEditable={true}
        onBlur={(e) => onEditChange({ todo, text: e.target?.innerText ?? "" })}
      >
        {todo.text}
      </div>
    </div>
  );
};
function Todos({ todos = [], dispatch }) {
  const draggedItemRef = useRef();
  const [id, setIds] = useState(1);
  const [highs, lows] = bifurcateBy(
    sortByKey(todos, "id", -1),
    (todo) => todo.priority === 1,
  );
  const onEditChange = ({ todo, text }) => {
    if (todo.text !== text) {
      todo.text = text;
      dispatch({ type: "update_todo", todo });
    }
  };
  const onSwitch = (todo, priority) => {
    if (todo && todo.priority !== priority)
      dispatch({ type: "update_todo", todo: { ...todo, priority } });
  };
  const addNew = () => {
    dispatch({
      type: "add_todo",
      todo: { id: Date.now(), text: `TODO--${id}`, priority: 1 },
    });
    setIds(id + 1);
  };
  const delTodo = (todo) => {
    dispatch({ type: "delete_todo", todo });
  };
  const delAll = () => {
    dispatch({ type: "delete_all_todos" });
  };

  return (
    <div className="todos">
      <h3>
        Things to do
        <i className="bi bi-pencil-square" onClick={addNew}></i>
        <small onClick={delAll}>Clear all</small>
      </h3>
      {[
        { category: "high", todos: highs, priority: 1 },
        { category: "low", todos: lows, priority: 0 },
      ].map(({ category, todos, priority }) => {
        return (
          <div
            key={`todos_cards__${category}`}
            className={`category ${category}`}
            onDrop={() => onSwitch(draggedItemRef.current, priority)}
            onDragOver={(e) => e.preventDefault()}
          >
            <h4>{category}</h4>
            <div className="cards">
              {!todos.length && <div className="empty-records">No Records</div>}
              {todos.map((todo) => (
                <Card
                  key={`todo_${category}_${todo.id}`}
                  onDragItem={() => {
                    draggedItemRef.current = todo;
                  }}
                  todo={todo}
                  onEditChange={onEditChange}
                  delTodo={delTodo}
                  onSwitch={onSwitch}
                />
              ))}
            </div>
          </div>
        );
      })}
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
    dispatch({
      type: isDoubleClick ? "delete_note" : "update_note",
      note: { ...note, done: !note.done },
    });
  };

  return (
    <div className="notes">
      <h3>Notes</h3>
      <br />
      <div className="note-ctr">
        <input
          autoFocus
          placeholder="Create new"
          ref={inputNoteRef}
          type="text"
          onKeyDown={onKeyPress(createNewNote)}
        />
        <i className="bi bi-send" onClick={createNewNote}></i>
      </div>
      <ul>
        {notes.map((x, index) => (
          <li
            className={cls({
              note: true,
              done: x.done,
              highlight: highlightNodeId === x.id,
            })}
            onClick={onDoubleClick((_, d) => handleUpdateNote(x, d))}
            key={`note__${x.id}`}
            datanoteid={x.id}
            onDrop={handleSwap}
            onDragEnter={() => setHNoteId(x.id)}
            onDrag={(ev) =>
              (draggedItemRef.current = ev.target.attributes?.datanoteid.value)
            }
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
