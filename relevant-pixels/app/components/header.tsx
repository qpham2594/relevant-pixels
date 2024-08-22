

export default function Header() {
  return (
    <section className="py-8 z-10 font-serif overflow-hidden">
      <div className="flex flex-col md:flex-row items-center w-full px-4 py-8 mx-auto">
        <div className="w-full md:w-1/2 py-4 md:py-8">
          <h1 className="text-purple-900 text-6xl sm:text-5xl md:text-7xl font-semibold leading-tight md:leading-none tracking-tighter">
            Hi! I am <br />
            <span className="text-blue-500">
              Quynh, your friendly web developer. <br />
            </span>
            Thanks for stopping by!
          </h1>
        </div>
        <div className="w-full md:w-1/2 py-4 md:py-8">
          <img
            src="https://www.svgrepo.com/show/493509/person-who-invests.svg"
            alt="Person who invests"
            className="g-image w-full h-auto max-w-xs md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

