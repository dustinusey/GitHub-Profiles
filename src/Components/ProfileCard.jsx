import { useContext } from "react";
import { AppState } from "../App";

const ProfileCard = () => {
  const { data, isUserLoaded } = useContext(AppState);
  return (
    <div className="w-[100%] p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 flex justify-start">
      {/* image and follow */}

      {!isUserLoaded ? (
        <div role="status" className="animate-pulse">
          <svg
            className="rounded-full border-[5px] border-white mt-[-50px] shadow-lg w-[135px] h-[135px] text-gray-200 dark:text-gray-700 me-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <button
            role="status"
            className="bg-zinc-300 text-white rounded-[25px] px-10 py-2 mt-8 disable animation-none"
          >
            Follow
          </button>
        </div>
      ) : (
        <div className="">
          <>
            <img
              className="rounded-full w-[135px] h-[135px] border-[5px] border-white mt-[-50px] shadow-lg"
              src={data.avatar_url}
              alt={`image of ${data.name}`}
            />

            <button className="bg-zinc-700 text-white rounded-[25px] px-10 py-2 mt-8">
              Follow
            </button>
          </>
        </div>
      )}

      {/* name, location, handle */}
      <div className="flex flex-col justify-center place-items-center ml-10">
        {!isUserLoaded ? (
          <>
            <div role="status" className="max-w-sm animate-pulse">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-64 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
              <span className="sr-only">Loading...</span>
              <div className="mt-5">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
              </div>
            </div>
          </>
        ) : (
          <>
            <p className="block font-bold text-lg">{data.name}</p>
            <p className="block">@{data.login}</p>
            <div className="flex place-items-center gap-3 mt-5">
              <svg
                className="w-6 h-6 text-zinc-700 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9a7 7 0 1 1 8 7v5a1 1 0 1 1-2 0v-5a7 7 0 0 1-6-7Zm6-1c.2-.3.6-.5 1-.5a1 1 0 1 0 0-2A3.5 3.5 0 0 0 8.5 9a1 1 0 0 0 2 0c0-.4.2-.8.4-1Z"
                  clipRule="evenodd"
                />
              </svg>

              <p>{data.location}</p>
            </div>
            <div className="flex place-items-center gap-3">
              <svg
                className="w-6 h-6 text-zinc-700 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M22 5.9c-.7.3-1.5.5-2.4.6a4 4 0 0 0 1.8-2.2c-.8.5-1.6.8-2.6 1a4.1 4.1 0 0 0-6.7 1.2 4 4 0 0 0-.2 2.5 11.7 11.7 0 0 1-8.5-4.3 4 4 0 0 0 1.3 5.4c-.7 0-1.3-.2-1.9-.5a4 4 0 0 0 3.3 4 4.2 4.2 0 0 1-1.9.1 4.1 4.1 0 0 0 3.9 2.8c-1.8 1.3-4 2-6.1 1.7a11.7 11.7 0 0 0 10.7 1A11.5 11.5 0 0 0 20 8.5V8a10 10 0 0 0 2-2.1Z"
                  clipRule="evenodd"
                />
              </svg>

              <p>{data.twitter_username}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
