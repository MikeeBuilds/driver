import Image from "next/image"

const CustomButton = () => {
  return (
        <button 
            disabled={true}
            type={"buttton"}
            className={`custom-btn`}
        >
            Get Started
        </button>
  )
}

export default CustomButton