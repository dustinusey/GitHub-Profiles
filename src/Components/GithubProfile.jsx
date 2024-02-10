import Profile from "./Profile";
import Sidebar from "./Sidebar";
export default function GithubProfile() {
  return (
    <div className="rounded-xl flex flex-start w-full max-w-[1440px] m-auto bg-zinc-100 p-5 h-[80%]">
      <Sidebar />
      <Profile />
    </div>
  );
}
