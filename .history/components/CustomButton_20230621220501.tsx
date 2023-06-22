'use client'

import { CustomButtonProps } from "@/types"
import Image from "next/image"

const CustomButton = ({ title, containerStyles, handleClick }: CustomButtonProps) => {
  return (
        <button 
            disabled={true}
            type={"button"}
            className={`custom-btn ${containerstyles}`}
            onClick={() => {}}
        >
            <span className={`custom-btn`}>
                Book Now
            </span>
        </button>
  )
}

export default CustomButton