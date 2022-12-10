import Webcam from 'react-webcam';

export const ImageCard = ({
  handleInput,
  imgPreview,
  handleClick,
  progressState,
  useWebcam,
  handleWebcam,
  webcamRef,
  canvasRef,
  loadWebcam,
}) => {
  const videoConstraints = {
    width: 640,
    height: 480,
  };

  return (
    <div>
      <div className="card-compact card w-full gap-5 bg-base-100 shadow-2xl md:mx-auto md:max-w-[640px]">
        {useWebcam ? (
          <>
            <div className="relative">
              <Webcam
                ref={webcamRef}
                muted={true}
                className="md:h-[480px] md:w-[640px]"
                videoConstraints={videoConstraints}
              />
              <canvas
                ref={canvasRef}
                className="absolute inset-x-0 top-0 text-center md:h-[480px] md:w-[640px]"
              />
            </div>
          </>
        ) : (
          <>
            <figure className="h-fit max-h-[20rem]">
              {!imgPreview ? (
                <svg
                  viewBox="0 0 576 512"
                  className="mt-10 w-[10rem] fill-[#ef4444]"
                >
                  <path d="M512 32H160c-35.35 0-64 28.65-64 64v224c0 35.35 28.65 64 64 64H512c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 320c0 8.822-7.178 16-16 16h-16l-109.3-160.9C383.7 170.7 378.7 168 373.3 168c-5.352 0-10.35 2.672-13.31 7.125l-62.74 94.11L274.9 238.6C271.9 234.4 267.1 232 262 232c-5.109 0-9.914 2.441-12.93 6.574L176 336H160c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16H512c8.822 0 16 7.178 16 16V320zM224 112c-17.67 0-32 14.33-32 32s14.33 32 32 32c17.68 0 32-14.33 32-32S241.7 112 224 112zM456 480H120C53.83 480 0 426.2 0 360v-240C0 106.8 10.75 96 24 96S48 106.8 48 120v240c0 39.7 32.3 72 72 72h336c13.25 0 24 10.75 24 24S469.3 480 456 480z" />
                </svg>
              ) : (
                <img id="img" src={imgPreview} alt="YourImagehere" />
              )}
            </figure>
          </>
        )}
        <div className="card-body gap-5">
          {!useWebcam && (
            <>
              {!imgPreview && (
                <h2 className="card-title justify-center">Upload Your Image</h2>
              )}
              <input
                type="file"
                className="file-input-bordered file-input mx-auto w-full max-w-xs shadow-xl drop-shadow-xl"
                onChange={handleInput}
              />
              <div className="mx-auto w-11/12">
                <div className="divider m-0 p-0">OR</div>
              </div>
            </>
          )}
          <div className="grid justify-center gap-3">
            {useWebcam && loadWebcam && (
              <>
                <button className="loading btn-ghost disabled btn mx-auto">
                  Load the Model
                </button>
              </>
            )}
            <h2 className="card-title justify-center">
              Use Camera{' '}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="my-auto w-5"
                  viewBox="0 0 512 512"
                >
                  <path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 384c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z" />
                </svg>
              </span>
            </h2>
            <input
              type="checkbox"
              className="toggle mx-auto"
              onChange={handleWebcam}
              checked={useWebcam}
            />
          </div>
          {!useWebcam && (
            <>
              <div className="card-actions justify-center">
                <button
                  className={
                    'btn-success btn shadow-md drop-shadow-xl' +
                    (progressState === 'process' ? ' loading' : '')
                  }
                  onClick={handleClick}
                  disabled={progressState === 'process' ? true : false}
                >
                  {progressState === 'process' ? 'Classifying' : 'Classify'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
