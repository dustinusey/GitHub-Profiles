import React, { useContext, useState } from "react";
import { AppState } from "../App";

const Search = () => {
  const { userToSearch, setUserToSearch, fetchUserProfile, fetchUserRepos } =
    useContext(AppState);

  function handleFormSubmit(e) {
    e.preventDefault();
    fetchUserProfile(userToSearch);
    fetchUserRepos(userToSearch);
    setUserToSearch("");
  }

  function updateUserSeach(e) {
    setUserToSearch(e.target.value);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleFormSubmit(e);
        }}
        className="mb-6"
      >
        <input
          onChange={(e) => {
            updateUserSeach(e);
          }}
          value={userToSearch}
          type="text"
          id="large-input"
          className="mt-5 w-[65%] block p-4 text-gray-900 border border-gray-300 rounded-lg bg-zinc-50 sm:text-md focus:ring-zinc-300 focus:border-zinc-300 dark:bg-gray-700 dark:border-gray-600 placeholder-zinc-400 dark:text-white dark:focus:ring-zinc-200 dark:focus:border-zinc-500"
          placeholder="Search GitHub users..."
        />
      </form>
    </div>
  );
};

export default Search;
