import "./App.scss";

function App() {
  return (
    /*html*/ <>
      <main className=" flex flex-col h-screen w-screen items-center text-center ">
        <section className="container mt-24 mb-24">
          <h1 className="text-cyan-200 text-7xl">This is a daisy ui site</h1>
        </section>
        <section className="container w-[70%]">
          <h2>This is a second section.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            libero sapiente, repellendus quaerat error soluta blanditiis aut
            minus eaque esse!
          </p>
          <div className="grid gap-6 grid-cols-4 grid-rows-1 mt-6 mb-12">
            <button className="btn btn-outline grid-cols-1 row-span-1">
              Default28
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
        <section>
          <div className="chat chat-start mt-9">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src="https://placehold.co/600x400/000000/FFFFFF/png" />
              </div>
            </div>
            <div className="chat-bubble">
              It was said that you would, destroy the Sith, not join them.
            </div>
          </div>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src="https://placehold.co/600x400/000000/FFFFFF/png" />
              </div>
            </div>
            <div className="chat-bubble">
              It was you who would bring balance to the Force
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src="https://placehold.co/600x400/000000/FFFFFF/png" />
              </div>
            </div>
            <div className="chat-bubble">Not leave it in Darkness</div>
          </div>
        </section>
        <section>
          <div className="flex w-full mt-8">
            <a
              className="grid h-20 w-36 flex-grow card bg-base-300 rounded-box place-items-center opacity-80 hover:opacity-100 hover:text-red-600 hover:scale-105"
              href="https://www.einfachbacken.de/sites/einfachbacken.de/files/styles/full_width_tablet_4_3/public/2019-03/waffelteig_grundrezept-1_bearb.jpg?h=a1e1a043&itok=tHz61G-C"
              target="_blank"
              rel="noopener noreferrer"
            >
              Waffeln
            </a>
            <div className="divider divider-horizontal">OR</div>
            <div>
              <a
                href="https://img.chefkoch-cdn.de/rezepte/2529831396465550/bilder/1509532/crop-960x720/pfannkuchen-crepe-und-pancake.jpg"
                className="grid h-20 w-36 flex-grow card bg-base-300 rounded-box place-items-center opacity-80 hover:opacity-100 hover:text-orange-400 hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pfannkuchen
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </section>
        <section>
          <div className="carousel carousel-end rounded-box">
            <div className="carousel-item">
              <img
                src="https://placehold.co/600x400/000000/FFFFFF/png"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://placehold.co/600x400/000000/FFFFFF/png"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://placehold.co/600x400/000000/FFFFFF/png"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://placehold.co/600x400/000000/FFFFFF/png"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://placehold.co/600x400/000000/FFFFFF/png"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://placehold.co/600x400/000000/FFFFFF/png"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://placehold.co/600x400/000000/FFFFFF/png"
                alt="Drink"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
