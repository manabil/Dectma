import { createContext, useContext } from 'react';

const LevelContext = createContext(1);

const Section = ({ level, children }) => {
  return (
    <section className="section m-2 border border-black p-3">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
};

const Heading = ({ children }) => {
  const level = useContext(LevelContext);
  switch (level) {
    case 1:
      return <h1 className="text-red-800">{children}</h1>;
    case 2:
      return <h2 className="text-yellow-600">{children}</h2>;
    case 3:
      return <h3 className="text-green-600">{children}</h3>;
    case 4:
      return <h4 className="text-blue-700">{children}</h4>;
    case 5:
      return <h5 className="text-purple-600">{children}</h5>;
    case 6:
      return <h6 className="text-6xl">{children}</h6>;
    default:
      throw Error('Unknown level: ' + level);
  }
};

export const Context = () => {
  return (
    <div className="grid justify-center">
      <h1 className="mt-7 text-center text-[2em]">Passing Data Deeply</h1>
      <Section level={1}>
        <Heading>Title</Heading>
        <Section level={2}>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section level={3}>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Section level={4}>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </div>
  );
};
