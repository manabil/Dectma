import { diseases } from '../data/diseases';

export const DescCard = ({ progressState, result }) => {
  return (
    <div>
      <div className="card-compact w-full gap-5 rounded-lg bg-[#e6ddc4] px-2 shadow-2xl drop-shadow-md md:mx-auto md:w-4/5">
        <figure className="grid h-fit max-h-[20rem] justify-center">
          {progressState === 'idle' ? (
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-32 w-[5rem]"
            >
              <path d="M4.38 5h1V4h1V3h-1V2h-1v1h-1v1h1v1zm8 4h-1v1h-1v1h1v1h1v-1h1v-1h-1V9zM14 2V1h-1v1h-1v1h1v1h1V3h1V2h-1zm-2.947 2.442a1.49 1.49 0 0 0-2.12 0l-7.49 7.49a1.49 1.49 0 0 0 0 2.12c.59.59 1.54.59 2.12 0l7.49-7.49c.58-.58.58-1.53 0-2.12zm-8.2 8.9c-.2.2-.51.2-.71 0-.2-.2-.2-.51 0-.71l6.46-6.46.71.71-6.46 6.46zm7.49-7.49l-.32.32-.71-.71.32-.32c.2-.2.51-.2.71 0 .19.2.19.52 0 .71z" />
            </svg>
          ) : progressState === 'process' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="mt-32 w-[5rem] fill-orange-500"
            >
              <path d="M360 0C373.3 0 384 10.75 384 24C384 37.25 373.3 48 360 48H352V66.98C352 107.3 335.1 145.1 307.5 174.5L225.9 256L307.5 337.5C335.1 366 352 404.7 352 445V464H360C373.3 464 384 474.7 384 488C384 501.3 373.3 512 360 512H24C10.75 512 0 501.3 0 488C0 474.7 10.75 464 24 464H32V445C32 404.7 48.01 366 76.52 337.5L158.1 256L76.52 174.5C48.01 145.1 32 107.3 32 66.98V48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0L360 0zM192 289.9L110.5 371.5C90.96 390.1 80 417.4 80 445V464H304V445C304 417.4 293 390.1 273.5 371.5L192 289.9zM192 222.1L273.5 140.5C293 121 304 94.56 304 66.98V47.1H80V66.98C80 94.56 90.96 121 110.5 140.5L192 222.1z" />
            </svg>
          ) : progressState === 'error' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="mt-32 w-[5rem] fill-red-500"
            >
              <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z" />
            </svg>
          ) : (
            ''
          )}
        </figure>
        <div className="card-body gap-5">
          <h2 className="card-title justify-center text-center text-3xl">
            {progressState === 'idle'
              ? 'Your prediction goes here'
              : progressState === 'process'
              ? 'Predicting Image'
              : progressState === 'error'
              ? 'Error to Predict, please try again or check your file'
              : diseases[result[0]].name}
            <span
              className={
                (result[1] > 70 ? 'text-green-600' : 'text-orange-600') +
                ' text-xs'
              }
            >
              {progressState === 'finish' ? result[1] + ' %' : ''}
            </span>
          </h2>
          <div key="1">
            <h2 className="card-title">
              {progressState === 'finish' ? '🦠 Penyebab' : ''}
            </h2>
            <p>{progressState === 'finish' ? diseases[result[0]].cause : ''}</p>
          </div>
          <div key="2">
            <h2 className="card-title">
              {progressState === 'finish' ? '⁉ Gejala' : ''}
            </h2>
            <p>
              {progressState === 'finish' ? diseases[result[0]].symptoms : ''}
            </p>
          </div>
          <div key="3">
            <h2 className="card-title">
              {progressState === 'finish' ? '🛡 Pencegahan' : ''}
            </h2>
            {progressState === 'finish'
              ? diseases[result[0]].prevention.map((a, i) => {
                  return (
                    <>
                      <ul className="list-inside list-disc">
                        <li key={i}>{a}</li>
                      </ul>
                    </>
                  );
                })
              : ''}
          </div>
          <div key="4">
            <h2 className="card-title">
              {progressState === 'finish' ? '💊 Penanganan' : ''}
            </h2>
            {progressState === 'finish'
              ? diseases[result[0]].treatment.map((a, i) => {
                  return (
                    <>
                      <ul className="list-inside list-disc">
                        <li key={i}>{a}</li>
                      </ul>
                    </>
                  );
                })
              : ''}
          </div>
          <div key="5">
            <h2 className="card-title">
              {progressState === 'finish' ? '📄 Referensi' : ''}
            </h2>
            {progressState === 'finish'
              ? diseases[result[0]].ref.map((a, i) => {
                  return (
                    <>
                      <ul className="list-inside list-disc">
                        <li>
                          <a key={i} href={a.link}>
                            {a.name_ref}
                          </a>
                        </li>
                      </ul>
                    </>
                  );
                })
              : ''}
          </div>
        </div>
      </div>
    </div>
  );
};
