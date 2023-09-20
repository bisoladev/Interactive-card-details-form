function App() {
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
          0000 0000 0000 0000
        </p>
        <p className="absolute bottom-[40%] left-[5%] text-sm text-white lg:bottom-[10%]">
          JANE APPLESEED
        </p>
        <p className="absolute bottom-[40%] right-[8%] text-sm text-white lg:bottom-[10%] ">
          00/00
        </p>
      </div>
      <div className="absolute  left-[15%] top-[4%] h-[245px] w-[300px] bg-[url('/back-card.png')] bg-contain bg-no-repeat max-[352px]:left-[3%] md:left-[6%] md:top-[50%] lg:left-[12%] lg:w-[442px]">
        <p className="absolute right-[15%] top-[28%] text-white lg:top-[44%]">
          000
        </p>
      </div>
      <div className="flex w-full justify-center align-middle">
        {/* <form
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
                />
              </label>
            </div>
            <div>
              <label htmlFor="number" className="label">
                Card Number
                <input
                  type="number"
                  id="number"
                  placeholder="e.g. 1234 5678 9123 0000"
                  className="form-control block w-full"
                />
              </label>
            </div>
            <div className="grid grid-cols-2 justify-between gap-6 pb-4">
              <div>
                <label htmlFor="month" className="label whitespace-nowrap">
                  Exp. Date (MM/YY)
                  <div className="flex gap-3">
                    <input
                      type="number"
                      id="month"
                      placeholder="MM"
                      className="form-control w-1/2"
                    />
                    <input
                      type="number"
                      id="name"
                      placeholder="YY"
                      className="form-control w-1/2"
                    />
                  </div>
                </label>
              </div>
              <div className="w-full">
                <label htmlFor="cvc" className="label">
                  cvc
                  <input
                    type="number"
                    id="cvc"
                    placeholder="e.g. 123"
                    className="form-control block w-full"
                  />
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-lg bg-violet py-3 text-lg text-white"
              >
                Confirm
              </button>
            </div>
          </div>
        </form> */}
        <div></div>
      </div>
    </div>
    // </div>
  );
}

export default App;
