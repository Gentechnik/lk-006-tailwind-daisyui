import "./App.scss";

function App() {
  return (
    /*html*/ <>
      <main className=" flex flex-col h-screen w-screen items-center text-center ">
        <section className="container mt-48 mb-24">
          <h1 className="text-cyan-200 text-7xl">This is a daisy ui site</h1>
        </section>
        <section className="container w-[50%]">
          <h2>This is a second section.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            libero sapiente, repellendus quaerat error soluta blanditiis aut
            minus eaque esse!
          </p>
          <div className="grid gap-6 grid-cols-4 grid-rows-1 mt-6 mb-12">
            <button className="btn btn-outline grid-cols-1 row-span-1">
              Default
            </button>
            <button className="btn btn-outline btn-primary grid-cols-2 row-span-1">
              Primary
            </button>
            <button className="btn btn-outline btn-secondary cols-3 row-span-1">
              Secondary
            </button>
            <button className="btn btn-outline btn-accent cols-4 row-span-1">
              Accent
            </button>
          </div>

          <button className="btn text-3xl m-7">
            Money
            <div className="badge badge-secondary h-14 text-4xl">-150</div>
          </button>
          <input
            type="range"
            min={0}
            max="100"
            value="80"
            className="range range-success bg-red-600"
          />
        </section>
        <section>
          <label className="swap swap-flip text-9xl">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            <div className="swap-on">🥶</div>
            <div className="swap-off">🧊</div>
          </label>
        </section>
      </main>
    </>
  );
}

export default App;
