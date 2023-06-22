'use client'

import Image from "next/image"

const CustomButton = () => {
  return (
        <button 
            disabled={true}
            type={"button"}
            className={`custom-btn`}
            onClick={() => {}}
        >
            <span className=""></span>
        </button>
  )
}

export default CustomButton