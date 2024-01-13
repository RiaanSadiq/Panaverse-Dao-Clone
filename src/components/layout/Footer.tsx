import Wrapper from "@/components/shared/Wrapper"
import Image from "next/image"
import logo from "/public/logo.webp"

const Footer = () => {
  
  return (
    <footer className=" mt-5 border ">
       <Wrapper>
        <div className="text-black grid grid-cols-12  ">
          {/* left */}
        <div className=" justify-between   py-2 px-5 items-center col-span-12 md:col-span-6">
        {/* logo */}
          <Image className="w-32 h-20" src={logo} alt="panaverse dao logo" />
          <p className="mt-4 text-sm md:text-base text-slate-600">Certified Web 3.0 and Metaverse Developer A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
      <div>
  
       </div>
        </div>
        {/* middle */}
    <div className=" col-span-6 md:col-span-3 md:px-2 py-4 px-6">
<h3 className="font-bold text-lg">Programs</h3>
<ul className=" text-slate-600 cursor-pointer">
  <li className=" hover:text-primary delay-100  text-xs mt-2 md:text-sm">Web 3.0 and Metaverse Developer</li>
  <li className=" hover:text-primary delay-100 text-xs mt-2 md:text-sm">Artificial Intelligence</li>
  <li className=" hover:text-primary delay-100 text-xs mt-2 md:text-sm">Cloud-Native Computing</li>
  <li className=" hover:text-primary delay-100 text-xs mt-2 md:text-sm">Ambient Computing and IoT</li>
  <li className=" hover:text-primary delay-100 text-xs mt-2 md:text-sm">Genomics and Bioinformatics</li>
  <li className=" hover:text-primary delay-100 text-xs mt-2 md:text-sm">Network Programmability and Automation</li>
</ul>

    </div>

      {/* end */}
      <div className="col-span-6 md:col-span-3 md:px-2 py-4 px-6">
      <h3 className="font-bold text-lg">Pages</h3>
<ul className=" text-slate-600 cursor-pointer ">
  <li className=" hover:text-primary delay-100  text-xs mt-2 md:text-sm">Home</li>
  <li className=" hover:text-primary delay-100 text-xs mt-2 md:text-sm">Quater I</li>
  <li className=" hover:text-primary delay-100 text-xs mt-2 md:text-sm">Quater II</li>
  <li className=" hover:text-primary delay-100 text-xs mt-2 md:text-sm">Quater III</li>
</ul>
      </div>
        </div>
       </Wrapper>
    </footer>
  )
}

export default Footer
