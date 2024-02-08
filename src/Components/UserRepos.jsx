import { useContext } from "react";
import { AppState } from "../App";
import Repos from "./Repos";

const UserRepos = () => {
  const { userRepos } = useContext(AppState);

  return (
    <div className="flex flex-col">
      <div className="h-fit flex justify-start flex-wrap gap-2">
        {userRepos.slice(0, 4).map((repo, index) => {
          return (
            <Repos
              name={repo.name}
              url={repo.full_name}
              desc={repo.description}
              key={index}
            />
          );
        })}
      </div>
      <div className="ml-auto mt-5 mr-10 text-mg font-bold cursor-pointer">
        Click to see more
      </div>
    </div>
  );
};

export default UserRepos;
