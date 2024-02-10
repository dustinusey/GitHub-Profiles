import axios from "axios";
import { createContext, useEffect, useState } from "react";
import GithubProfile from "./Components/GithubProfile";
export const AppState = createContext();

// const commitsEndpoint = `https://api.github.com/repos/dustinusey/${githubProject}/commits`;
// const reposEndpoint = `https://api.github.com/users/${githubUser}/repos`;

export default function App() {
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [user, setUser] = useState("");
  const [userToSearch, setUserToSearch] = useState("");
  const userEndpoint = `https://api.github.com/users/`;
  const [userRepos, setUserRepos] = useState([]);

  async function fetchUserProfile(user) {
    try {
      const res = await axios.get(`${userEndpoint}${user}`);
      setIsUserLoaded(true);
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchUserRepos(user) {
    try {
      const res = await axios.get(`https://api.github.com/users/${user}/repos`);
      setUserRepos(res.data);
      console.log(userRepos);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-zinc-800 grid place-items-center p-5 h-screen">
      <AppState.Provider
        value={{
          user,
          setUser,
          data,
          isUserLoaded,
          userToSearch,
          setUserToSearch,
          fetchUserProfile,
          fetchUserRepos,
          userRepos,
        }}
      >
        <GithubProfile />
      </AppState.Provider>
    </div>
  );
}
