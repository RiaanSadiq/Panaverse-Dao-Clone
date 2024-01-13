import { FC } from "react"
interface IProps{
  header:string;
  description:string;
  number:number;
  haveBorder?:boolean;
}
const Quater:FC<IProps> = ({header,description,number,haveBorder=true}) => {
    return (
        <div className= {` rounded-md flex-1 px-6 py-16 relative flex flex-col justify-center ${haveBorder=== true ?"border":""}`}>
           <h4 className="font-bold text-lg ">{header}</h4>
           <p className="mt-2 text-slate-600 z-0">{description}</p>
           <span className="absolute top-0 right-10 text-[150px] text-gray-200 font-bold -z-10">{number}</span>
        </div>
  
  )
}

export default Quater
