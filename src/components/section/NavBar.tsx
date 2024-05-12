import HamburgerMenu from "@/components/HamburgerMenu";
import { ModeToggle } from "../ModeToggle";

const NavBar = () => {
  return (
    <div
      className="flex justify-between align-center px-5 md:px-12 items-center py-2 left-0 right-0 
          shadow-md bg-white dark:bg-gray-900
        bg-opacity-100 backdrop-blur-lg"
    >
      <div className="text-2xl font-bold">CoinTX</div>
      <div className="">
        <div className="hidden md:flex gap-4 list-none justify-around items-center">
          <li className="m-2 py-1 px-4 font-semibold hover:underline decoration-2 decoration-sky-500 ">
            <a href="#crypto-taxes">Crypto Taxes</a>
          </li>
          <li className="m-2 py-1 px-4 font-semibold hover:underline decoration-2 decoration-sky-500">
            <a href="#free-tools">Free Tools</a>
          </li>
          <li className="m-2 py-1 px-4 font-semibold hover:underline decoration-2 decoration-sky-500 ">
            <a href="#resource-center">Resource Center</a>
          </li>
          <button className="py-1 px-4 font-semibold bg-[#2870EA] rounded-lg text-white">
            <a href="#get-started">Get Started</a>
          </button>
          <ModeToggle />
        </div>

        <div className="md:hidden flex gap-8 items-center text-3xl ml-6">
          <ModeToggle />
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
