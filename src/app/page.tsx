import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import MainPage from "./MainPage";

export default function Home() {
  return (
    <main className="">
      <div>
        <Navbar/>
        <div className="flex bg-customLightGray">
          <div className="hidden md:block"><SideNav /></div>
          <MainPage />
        </div>
      </div>
    </main>
  );
}
