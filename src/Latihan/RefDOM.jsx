import { useRef, forwardRef, useState } from 'react';
import { flushSync } from 'react-dom';

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

export const RefDOM = () => {
  const inputRef = useRef(null);
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);
  const itemsRef = useRef(null);
  const catList = [];
  for (let i = 0; i < 10; i++) {
    catList.push({
      id: i,
      imageUrl: 'https://placekitten.com/250/200?image=' + i,
    });
  }
  const inputCustomRef = useRef(null);
  let nextId = 0;
  let initialTodos = [];
  for (let i = 0; i < 20; i++) {
    initialTodos.push({
      id: nextId++,
      text: 'Todo #' + (i + 1),
    });
  }
  const listRef = useRef(null);
  const [text, setText] = useState('');
  const [todos, setTodos] = useState(initialTodos);

  function handleScrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  function scrollToId(itemId) {
    const map = getMap();
    const node = map.get(itemId);
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  function handleClick() {
    inputRef.current.focus();
  }

  function handleCustomClick() {
    inputCustomRef.current.focus();
  }

  function handleAdd() {
    const newTodo = { id: nextId++, text: text };
    flushSync(() => {
      setText('');
      setTodos([...todos, newTodo]);
    });
    listRef.current.lastChild.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  }

  return (
    <div className="grid justify-center gap-2">
      <h1 className="mt-7 text-center text-[2em]">Manipulate DOM with Ref</h1>
      <div>
        <p>Ref Implement</p>
        <input
          className="border border-green-700 p-2"
          placeholder="Fokus kesini"
          ref={inputRef}
        />
        <button className="btn-primary btn-sm" onClick={handleClick}>
          Focus the input
        </button>
      </div>

      <div>
        <p>Ref Scrolling</p>
        <nav className="grid grid-cols-4 gap-2">
          <button
            className="btn-primary btn-sm"
            onClick={handleScrollToFirstCat}
          >
            Tom
          </button>
          <button
            className="btn-primary btn-sm"
            onClick={handleScrollToSecondCat}
          >
            Maru
          </button>
          <button
            className="btn-primary btn-sm"
            onClick={handleScrollToThirdCat}
          >
            Jellylorum
          </button>
        </nav>
        <div>
          <ul className="grid justify-items-center gap-2">
            <li>
              <img
                src="https://placekitten.com/g/200/200"
                alt="Tom"
                ref={firstCatRef}
              />
            </li>
            <li>
              <img
                src="https://placekitten.com/g/300/200"
                alt="Maru"
                ref={secondCatRef}
              />
            </li>
            <li>
              <img
                src="https://placekitten.com/g/250/200"
                alt="Jellylorum"
                ref={thirdCatRef}
              />
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p>Ref with a list</p>
        <nav className="grid grid-cols-3 gap-2">
          <button className="btn-primary btn-sm" onClick={() => scrollToId(0)}>
            Tom
          </button>
          <button className="btn-primary btn-sm" onClick={() => scrollToId(5)}>
            Maru
          </button>
          <button className="btn-primary btn-sm" onClick={() => scrollToId(9)}>
            Jellylorum
          </button>
        </nav>
        <div>
          <ul className="grid justify-items-center gap-2 ">
            {catList.map((cat) => (
              <li
                key={cat.id}
                ref={(node) => {
                  const map = getMap();
                  if (node) {
                    map.set(cat.id, node);
                  } else {
                    map.delete(cat.id);
                  }
                }}
              >
                <img src={cat.imageUrl} alt={'Cat #' + cat.id} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <p>Focus in Custom Component (forwardRef)</p>
        <MyInput
          ref={inputCustomRef}
          className="border border-green-700 p-2"
          placeholder="Fokus kesini"
        />
        <button className="btn-primary btn-sm ml-2" onClick={handleCustomClick}>
          Focus the input
        </button>
      </div>

      <div>
        <p>Autoscrolling to new task</p>
        <input
          className="border border-green-700 p-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Isi task disini"
        />
        <button onClick={handleAdd} className="btn-primary btn-sm ml-2">
          Add
        </button>
        <ul ref={listRef}>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
