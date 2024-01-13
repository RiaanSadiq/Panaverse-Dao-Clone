import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import Outcome_poster from "@/assets/images/outcome-poster.webp" 
import tick from "@/assets/images/tick.png" 
const outComePoints=["Product Ownership","Freelacing","Global Marketing by Panaverse DAO","Boosting Economy."]
const Outcome = () => {
  return (
    <section className="mt-16 md:mt-28 ">
      <Wrapper>
        <div className=" flex md:flex-row gap-x-8 items-center flex-col-reverse">
          {/* left-Image */}
          <div className="flex-1 ">
            <Image src={Outcome_poster} alt="Outcome_poster" ></Image>
          </div>
          {/* right-Content */}
          <div className="flex-1">
           <h2 className="text-4xl font-bold  ">The Outcome for Participants of the Program</h2> 
           <p className="text-slate-600 mt-6 text-lg">As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistan's software exports.</p>
          <div className="mt-6 mb-2 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
           { 
           outComePoints.map((item,i)=>(
            <div className="">
            <div key={i} className="flex " >
                 {/* <Image src={tick} alt="tick" height={35} className="mx-3 -mt-1 "></Image> */}
                 <svg className="mr-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path fill="#17b2b5" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>  
                 <h4 className="font-medium text-lg">{item}</h4>
            </div>
            </div>

           ))
           
           
           }
          </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Outcome;
