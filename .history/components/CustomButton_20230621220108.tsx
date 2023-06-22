'use client'

import Image from "next/image"

const CustomButton = ({ title, containerStyles, handleClick}) => {
  return (
        <button 
            disabled={true}
            type={"button"}
            className={`custom-btn`}
            onClick={() => {}}
        >
            <span className={`custom-btn`}>
                Book Now
            </span>
        </button>
  )
}

export default CustomButton