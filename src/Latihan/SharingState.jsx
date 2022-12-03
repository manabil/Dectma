import { useState } from 'react';

export const SharingState = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  function Panel({ title, children, isActive, onShow }) {
    return (
      <section className="panel mt-2 rounded-md border border-green-300 p-2 ">
        <h3>{title}</h3>
        {isActive ? (
          <p>{children}</p>
        ) : (
          <button onClick={onShow} className="btn-primary btn-sm">
            Show
          </button>
        )}
      </section>
    );
  }

  return (
    <div className="grid place-content-center">
      <h1 className="mt-7 text-center text-[2em]">Sharing State</h1>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </div>
  );
};
