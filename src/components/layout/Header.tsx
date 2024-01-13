import Link from "next/link";
import logo from "/public/logo.webp";
import Image from "next/image";
import Wrapper from "@/components/shared/Wrapper";
const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white ">
      <Wrapper>
    <div className="flex justify-between  mx-auto py-4   items-center">
        {/* logo */}
        <div className="flex">
          <Image className="w-24 h-14" src={logo} alt="panaverse dao logo" />
        </div>
        {/* nav bar */}
        <ul className="flex space-x-8 font-semibold ">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            {" "}
            <Link href={"/about"}>About us</Link>
          </li>
        </ul>
    </div>
      </Wrapper>
    </header>
  );
};

export default Header;

//rafce
