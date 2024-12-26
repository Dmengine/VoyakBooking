import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import ItineraryPage from "./page";


export default function Home() {
  return (
    <main className="">
      <div>
        <Navbar/>
        <div className="flex bg-customLightGray">
          <div className="hidden md:block"><SideNav /></div>
          <ItineraryPage />
        </div>
      </div>
    </main>
  );
}
