const Repos = (props) => {
  return (
    <div className="w-[48%] h-[220px] ">
      <div className="w-[100%] h-full p-6 bg-white border border-zinc-200 rounded-lg shadow dark:bg-zinc-800 dark:border-zinc-700 flex flex-col">
        <a href={`https://www.github.com/${props.url}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-600 dark:text-white">
            {props.name}
          </h5>
        </a>
        <p className="shorten3 mb-3 font-normal text-zinc-600 dark:text-zinc-400">
          {props.desc}
        </p>
        <a
          href={`https://www.github.com/${props.url}`}
          className="mt-auto inline-flex items-center px-3 py-5 text-sm font-medium text-center text-white bg-zinc-700 rounded-lg hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800"
        >
          Code
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Repos;
