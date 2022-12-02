import Input from './Input';

export default function LatihanForm() {
  return (
    <div className="grid place-content-center">
      <Input header="Masukkan text" />
      <button type="submit" className="btn btn-primary mt-4">
        Submit
      </button>
    </div>
  );
}
