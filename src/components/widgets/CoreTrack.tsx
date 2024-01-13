import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";
import Quater from "../shared/Quater";
const coreTrackData=
[
  {
    header:"Quater I",
    description:"CS-101: Object-Oriented Programming using TypeScript",
    number: 1
  },
  {
    header:"Quater II",
  description:"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
  number: 2
},
  {
    header:"Quater III",
    description:"$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number: 3
  }
]
const CoreTrack = () => {
  const header= "Core Courses \n(Common in All Specialization):"
  return (
    <section className="mt-16 lg:mt-28">
      <Wrapper>
        {/* content */}
        <div className="max-w-screen-md">

          <h4 className=" font-semibold text-primary text-lg mt-4">PROGRAM OF STUDIES</h4>
          <h2 className="sm:text-5xl font-bold text-4xl whitespace-pre-line ">{header}</h2>
          <p className="mt-3 text-xl text-slate-600">Every participant of the program will start by completing the following three core courses.</p>
          <div className="mt-6">
            <Button text="Learn More" />
          </div>
        </div>



        {/* Boxes */}

        <div className="flex my-20 gap-x-8 gap-y-6 flex-col md:flex-row">
          
         { coreTrackData.map((item,i)=>{ 
            return(
              <Quater 
              key={item.number} header={item.header} description={item.description} number={i+1} />
              )
             })
          }

        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTrack;
