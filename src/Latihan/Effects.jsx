import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);

  return <video ref={ref} src={src} loop playsInline />;
}

function Playground() {
  const [text, setText] = useState('a');

  useEffect(() => {
    function onTimeout() {
      console.log('⏰ ' + text);
    }

    console.log('🔵 Schedule "' + text + '" log');
    const timeoutId = setTimeout(onTimeout, 3000);

    return () => {
      console.log('🟡 Cancel "' + text + '" log');
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <>
      <label>
        What to log:{' '}
        <input
          className="mt-2 border border-green-600 p-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>{' '}
      <h1>Your Result = {text}</h1>
    </>
  );
}

export const Effects = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div className="grid justify-center gap-2">
      <h1 className="mt-7 text-center text-[2em]">Effects in React</h1>

      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="btn-success btn-sm mb-2"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <VideoPlayer
          isPlaying={isPlaying}
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
      </div>

      <div>
        <p>Use Effect Mechanism</p>
        <button
          onClick={() => setShow(!show)}
          className="btn-primary btn-sm mt-2"
        >
          {show ? 'Unmount' : 'Mount'} the component
        </button>
        {show && <hr />}
        {show && <Playground />}
      </div>
    </div>
  );
};
