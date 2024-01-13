import Image from "next/image";
import HeroPoster from "@/assets/images/hero-poster.webp";
import Wrapper from "@/components/shared/Wrapper";
//components
import Button from "@/components/shared/Button";
const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col items-center   md:flex-row item-center">
          {/* left side */}
          <div className="flex-1">
            <h4 className=" font-semibold text-primary text-lg mt-4">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1 className="font-bold text-5xl  sm:text-6xl ">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </p>
            <p className="mt-6 text-xl text-slate-600">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
            </p>

            <div className="mt-6">
              <Button text={"Learn more"}/>
              {/* <Button text={"Submit now"}/> */}
            </div>

            {/* <button className="bg-cyan-800 mt-7 text-white font-semibold rounded-full p-3 pr-6 pl-6 text-xl">Learn more</button> */}
          </div>
          {/* right side */}
          <div className=" flex-1 ">
            <Image src={HeroPoster} alt="Hero Poster" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;

