import { useRef, useState } from 'react';

export const Ref = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    console.log(intervalRef);
    clearInterval(intervalRef.current);
    console.log(intervalRef);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div className="grid justify-center gap-2">
      <h1 className="mt-7 text-center text-[2em]">Referencing Value</h1>

      <button className="btn-primary btn-sm mb-4" onClick={handleClick}>
        Click me!
      </button>

      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button className="btn-success btn-sm" onClick={handleStart}>
        Start
      </button>
      <button className="btn-error btn-sm" onClick={handleStop}>
        Stop
      </button>
    </div>
  );
};
