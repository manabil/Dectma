import { useState } from 'react';

const LatihanInput = ({ header, values, changeEvent, isDisabled }) => {
  return (
    <div className="form-control ">
      <label className="label">
        <span className="label-text">{header}</span>
      </label>
      <label className="input-group">
        <input
          type="text"
          className="input-bordered input"
          value={values}
          onChange={changeEvent}
          disabled={isDisabled}
        />
      </label>
    </div>
  );
};

export const StateReact = () => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('empty');

  if (status === 'success') {
    return <h1>That's right!</h1>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  };

  const handleInputChange = (e) => {
    const length = e.target.value.length;
    setAnswer(e.target.value);
    length === 0 ? setStatus('empty') : setStatus('typing');
  };

  const submitForm = (answer) => {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== 'lima';
        if (shouldError) {
          reject(new Error('Good guess but a wrong answer. Try again!'));
        } else {
          resolve();
        }
      }, 1500);
    });
  };

  return (
    <div className="grid place-content-center">
      <h1 className="text-[2em]">Reacting to Input with State</h1>
      <form onSubmit={handleSubmit} className="mb-16">
        <LatihanInput
          header="Masukkan text"
          values={answer}
          changeEvent={handleInputChange}
          isDisabled={status === 'submitting'}
        />
        <p>{status}</p>
        <button
          type="submit"
          className="btn-primary btn mt-4"
          disabled={answer.length === 0 || status === 'submitting'}
        >
          Submit
        </button>
        {error !== null && <p className="Error">{error.message}</p>}
      </form>
    </div>
  );
};
