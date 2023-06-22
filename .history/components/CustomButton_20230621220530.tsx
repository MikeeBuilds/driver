'use client'

import { CustomButtonProps } from "@/types"
import Image from "next/image"

const CustomButton = ({ title, containerStyles, handleClick }: CustomButtonProps) => {
  return (
        <button 
            disabled={true}
            type={"button"}
            className={`custom-btn ${containerStyles}`}
            onClick={() => {}}
        >
            <span className={`flex-1`}>
                Book Now
            </span>
        </button>
  )
}

export default CustomButton