import { useState } from 'react';

function App() {
  const [confirmed, setConfirmed] = useState(false);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvc, setCvc] = useState('');

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove spaces and store only the numbers
    const value = e.target.value.replace(/\s/g, '');

    // Add spaces after every 4 characters
    const formattedValue = value
      .replace(/(\d{4})/g, '$1 ')
      .trim()
      .substring(0, 19); // Limit to a maximum of 19 characters (4 groups of 4 + 3 spaces)

    setNumber(formattedValue);
  };

  return (
    // <div className="">
    <div className="relative flex h-screen flex-col md:flex-row">
      <img
        src="/hero-bg.png"
        alt="Gradient banner"
        className="h-1/3 w-full md:h-full md:w-2/5"
      />
      <div className="absolute left-[5%] top-[19%] z-10 h-[245px] w-[300px] bg-[url('/front-card.png')] bg-contain bg-no-repeat md:left-[6%] md:top-[20%] lg:left-[8%] lg:w-[442px]">
        <p className="absolute bottom-[55%] left-[5%] text-xl tracking-widest text-white lg:bottom-[26%] lg:text-3xl">
          {number.length > 0 ? number : '0000 0000 0000 0000'}
        </p>
        <p className="absolute bottom-[40%] left-[5%] text-sm text-white lg:bottom-[10%]">
          {name.length > 0 ? name : 'JANE APPLESEED'}
        </p>
        <p className="absolute bottom-[40%] right-[8%] text-sm text-white lg:bottom-[10%] ">
          {month.length > 0 ? month : '00'}/{year.length > 0 ? year : '00'}
        </p>
      </div>
      <div className="absolute  left-[15%] top-[4%] h-[245px] w-[300px] bg-[url('/back-card.png')] bg-contain bg-no-repeat max-[352px]:left-[3%] md:left-[6%] md:top-[50%] lg:left-[12%] lg:w-[442px]">
        <p className="absolute right-[15%] top-[28%] text-white lg:top-[44%]">
          {cvc.length > 0 ? cvc : '000'}
        </p>
      </div>
      <div className="flex w-full justify-center align-middle">
        {confirmed ? (
          <div className="flex flex-col justify-center pt-24 text-center align-middle md:pt-0">
            <div className="mx-auto">
              <img src="/tick.svg" alt="circular tick" />
            </div>

            <h2 className="py-6 text-2xl tracking-widest ">THANK YOU!</h2>
            <p className="pb-8 text-lg text-deepGrey">
              We’ve added your card details
            </p>
            <div>
              <button
                type="button"
                className="w-72 rounded-lg bg-violet py-2 text-lg text-white lg:w-96"
                onClick={() => setConfirmed(false)}
              >
                Confirm
              </button>
            </div>
          </div>
        ) : (
          <form
            action="#"
            className="mb-14 mt-24 flex w-11/12 flex-col justify-center align-middle md:w-9/12 lg:mb-0 lg:mt-0 lg:w-[47%]"
          >
            <div className="">
              <div>
                <label htmlFor="name" className="label">
                  Cardholder Name
                  <input
                    type="text"
                    id="name"
                    placeholder="e.g. Jane Appleseed"
                    className="form-control block w-full"
                    name="card_name"
                    onChange={(e) => setName(e.target.value)}
                    maxLength={25}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="number" className="label">
                  Card Number
                  <input
                    type="text"
                    id="number"
                    placeholder="e.g. 1234 5678 9123 0000"
                    className="form-control block w-full"
                    name="card_number"
                    onChange={handleCardNumberChange}
                    value={number}
                    maxLength={19}
                  />
                </label>
              </div>
              <div className="grid grid-cols-2 justify-between gap-6 pb-4">
                <div>
                  <label htmlFor="month" className="label whitespace-nowrap">
                    Exp. Date (MM/YY)
                    <div className="flex gap-3">
                      <input
                        type="text"
                        id="month"
                        placeholder="MM"
                        className="form-control w-1/2"
                        name="expiry_month"
                        onChange={(e) => setMonth(e.target.value)}
                        maxLength={2}
                      />
                      <input
                        type="text"
                        id="name"
                        placeholder="YY"
                        className="form-control w-1/2"
                        name="expiry_year"
                        onChange={(e) => setYear(e.target.value)}
                        maxLength={2}
                      />
                    </div>
                  </label>
                </div>
                <div className="w-full">
                  <label htmlFor="cvc" className="label">
                    cvc
                    <input
                      type="text"
                      id="cvc"
                      placeholder="e.g. 123"
                      className="form-control block w-full"
                      name="cvc"
                      onChange={(e) => setCvc(e.target.value)}
                      maxLength={3}
                    />
                  </label>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-violet py-3 text-lg text-white"
                  onClick={() => setConfirmed(true)}
                >
                  Confirm
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
    // </div>
  );
}

export default App;
