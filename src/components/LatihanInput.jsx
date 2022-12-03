export const LatihanInput = ({ header, values, changeEvent, isDisabled }) => {
  return (
    <div className="form-control ">
      <label className="label">
        <span className="label-text">{header}</span>
      </label>
      <label className="input-group">
        <input
          type="text"
          className="input input-bordered"
          value={values}
          onChange={changeEvent}
          disabled={isDisabled}
        />
      </label>
    </div>
  );
};
