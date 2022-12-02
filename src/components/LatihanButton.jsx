export default function LatihanButton({ name, click, count }) {
  return (
    <>
      <button className="btn btn-warning" onClick={click}>
        {name}
        {count}
      </button>
    </>
  );
}
