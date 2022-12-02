import { useState } from 'react';
import LatihanButton from './LatihanButton';

export default function Latihan() {
  const [count, setCount] = useState(0);
  const [coba, setCoba] = useState({
    nama: 'Nabil',
    hobi: 'coding',
    skill: {
      programming: 'ai',
    },
  });
  const [people, setPeople] = useState([]);
  const [name, setName] = useState('');
  const [idPeople, setIdPeople] = useState(0);
  const message = 'Clicked';

  function tambah() {
    setCount(count + 5);
    setCount((n) => n + 1);
  }

  function kurang() {
    setCount(count - 1);
  }

  function handleNama(e) {
    setCoba({
      ...coba,
      nama: e.target.value,
    });
  }

  function handleHobi(e) {
    setCoba({
      ...coba,
      hobi: e.target.value,
    });
  }

  function handleSkill(e) {
    setCoba({
      ...coba,
      skill: {
        ...coba.skill,
        programming: e.target.value,
      },
    });
  }

  return (
    <>
      <LatihanButton name={'Tambah'} click={tambah} count={count} />
      <LatihanButton name={'Kurang'} click={kurang} count={count} />
      <button
        className="btn btn-primary"
        onClick={() => {
          alert(message);
        }}
      >
        Tambah
      </button>
      <input type="text" onChange={handleNama} value={coba.nama} />
      <input type="text" onChange={handleHobi} value={coba.hobi} />
      <input
        type="text"
        onChange={handleSkill}
        value={coba.skill.programming}
      />

      <input
        type="text"
        placeholder="Isi nama artis"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        type="submit"
        onClick={() => {
          setPeople([...people, { id: idPeople, name: name }]);
          setIdPeople(people + 1);
        }}
      >
        Tambah Artis
      </button>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {person.name}{' '}
            <button
              onClick={() => {
                setPeople(people.filter((a) => a.id !== person.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h1 className="text-xl font-bold text-center mt-10 ">
        Terklik sebanyak {count}
      </h1>

      <h1 className="text-xl font-bold text-center mt-10 ">
        Nama saya {coba.nama}
      </h1>
      <h1 className="text-xl font-bold text-center mt-10 ">
        Hobi saya {coba.hobi}
      </h1>
      <h1 className="text-xl font-bold text-center mt-10 ">
        Skill saya {coba.skill.programming}
      </h1>
    </>
  );
}
