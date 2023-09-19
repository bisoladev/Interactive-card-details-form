function App() {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <img src="/hero-bg.png" alt="Gradient banner" />
        {/* <img
          src="/front-card.png"
          alt="Gradient banner"
          className="flex-initial"
        />
        <img
          src="/back-card.png"
          alt="Gradient banner"
          className="flex-initial"
        /> */}

        <div className="flex justify-center align-middle w-full">
          <form
            action="#"
            className="flex flex-col justify-center align-middle w-11/12 md:w-5/12 "
          >
            <div className="">
              <div>
                <label htmlFor="name" className="label">
                  Cardholder Name
                  <input
                    type="text"
                    id="name"
                    placeholder="e.g. Jane Appleseed"
                    className="block form-control w-full"
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
                    className="block form-control w-full"
                  />
                </label>
              </div>
              <div className="grid grid-cols-2 gap-6 pb-4 justify-between">
                <div>
                  <label htmlFor="month" className="label">
                    Exp. Date (MM/YY)
                    <div className="flex gap-3">
                      <input
                        type="text"
                        id="month"
                        placeholder="MM"
                        className="form-control w-1/2"
                      />
                      <input
                        type="text"
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
                      type="text"
                      id="cvc"
                      placeholder="e.g. 123"
                      className="block form-control w-full"
                    />
                  </label>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="text-white text-lg bg-violet w-full py-3 rounded-lg"
                >
                  Confirm
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
