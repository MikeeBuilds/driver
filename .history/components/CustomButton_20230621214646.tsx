import Image from "next/image"

const CustomButton = () => {
  return (
        <button 
            disabled={true}
            type={"button"}
            className={`custom-btn`}
            onClick={() => {}}
        >
            Get Started
        </button>
  )
}

export default CustomButton