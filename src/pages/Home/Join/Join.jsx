const Join = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-20 lg:flex  lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <hr />
          <h1 className="text-3xl font-extrabold sm:text-5xl drop-shadow-xl">
            WANT TO BE A PART OF
            <strong className="font-extrabold text-violet-700 sm:block">
              THIS COMMUNITY
            </strong>
          </h1>
          <hr />

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block drop-shadow-2xl w-full rounded bg-purple-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-500 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="/join-us"
            >
              JOIN US
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
