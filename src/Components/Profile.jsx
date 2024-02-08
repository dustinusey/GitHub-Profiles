import { useContext } from "react";
import { AppState } from "../App";
import ProfileCard from "./ProfileCard";
import Search from "./Search";
import UserRepos from "./UserRepos";

const Profile = () => {
  const { isUserLoaded } = useContext(AppState);
  return (
    <div className="w-full p-10 relative">
      <ProfileCard />
      <Search />
      {isUserLoaded && <UserRepos />}
    </div>
  );
};

export default Profile;
