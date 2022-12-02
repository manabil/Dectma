export default function Input({ header }) {
  return (
    <div className="form-control ">
      <label className="label">
        <span className="label-text">{header}</span>
      </label>
      <label className="input-group">
        <input type="text" className="input input-bordered" />
      </label>
    </div>
  );
}
