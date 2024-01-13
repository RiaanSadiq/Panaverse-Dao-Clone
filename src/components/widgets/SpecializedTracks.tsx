"use client"
import Wrapper from "@/components/shared/Wrapper";
import chevronRight from "/public/chevronRight.svg";
import Image from "next/image";
import Quater from "../shared/Quater";
import {programsData} from "@/components/data/data"
import { useState } from "react";
import { log } from "console";

const SpecializedTracks = () => {

const [selectedItem, setSelectedItem]= useState("wmd")
const selectedItemData = programsData.find((item)=>item.slug===selectedItem)




  return (
    <section>
      <Wrapper>
        {/* Header */}
        <div>
          <h2 className="sm:text-5xl font-bold text-4xl ">
            Specialized Tracks:
          </h2>
          <p className="mt-3 text-xl text-slate-600 max-w-screen-sm">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each.
          </p>
        </div>

        <div className="mt-10 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-8">
          {/* Left content */}
          <div className="basis-7/12 border rounded-xl shadow-xl border-slate-200 py-8 px-8 self-start sticky top-24" >
            <h4 className="text-lg text-primary font-medium">Specialized Program</h4>
            <h3 className="font-bold text-2xl">
              {/* Web 3.0 (Blockchain) and Metaverse Specialization */}
              {selectedItemData?.header}
            </h3>
            <p className="text-lg text-slate-600 mt-2">
              {/* This Web 3.0 and Metaverse specialization focuses on developing
              full-stack Web 3.0 and Metaverse experiences for the next
              generation of the internet by specializing in building worlds that
              merge the best of cutting-edge decentralized distributed
              blockchains with 3D metaverse client experiences. */}
              {selectedItemData?.description}
            </p>
            <div className="flex">
              <button className=" text-primary text-xl mt-4 underline">
                Learn More
              </button>
              <Image
                className="w-20 h-5 mt-[23px] -ml-8 cursor-pointer"
                src={chevronRight}
                alt="panaverse dao logo"
              />
            </div>
            <div className="flex gap-x-4 mt-8 flex-col sm:flex-row ">
             {
              selectedItemData?.quaters.map((item)=>(
                <Quater
                  key={item.number}
                  header={item.header}
                  description={item.description}
                  number={item.number}
                  haveBorder={false}
                />
              ))
             }
             
            </div>
          </div>
          {/* Right content */}
          <div className="px-4 space-y-4 py-6 basis-5/12 ">
            {
              programsData.map((item,i)=>(
            <div onClick={()=> setSelectedItem(item.slug)} key={item.slug} className="flex gap-x-4 items-center cursor-pointer">
              {/* image 1 */}
              <div className="flex-shrink-0 h-[90px] w-40">
                {/* <div className="w-24 h-16 rounded bg-blue-200"></div> */}
             <Image src={item.image}  alt={item.header} className="rounded-md h-[90px]  object-cover "></Image>
              </div>
              {/* right headings and descriptions */}
              <div>
                <h4 className="text-primary font-medium text-sm md:text-lg">
                  Specialized Program
                </h4>
                <h3 className="md:text-xl text-base font-semibold">
                  {/* Web 3.0 (Blockchain) and Metaverse Specialization */}
                {item.header}
                </h3>
              </div>
            </div>

              ))
            }
            {/* end */}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTracks;
