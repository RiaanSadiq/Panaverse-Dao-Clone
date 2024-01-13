import { FC } from "react"
const Button:FC<{text:string}> = ({text}) => {
    return (
    <div>
      <button className="bg-primary text-white font-medium rounded-full py-3 px-7  
    hover:shadow-lg text-lg  hover:scale-105 duration-300 ">{text}</button>
    </div>
  )
}

export default Button
