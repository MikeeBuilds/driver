import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
            <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
                <div className='flex flex-col justify-start items-start gap-6'>
                    <Image 
                        src="
                        /logo.svg" 
                        alt='logo' 
                        width={118} 
                        height={18} 
                        className='object-contain' 
                    />

                    <p className='text-base text-gray-700'>
                        Driver 2023 <br />
                        All rights reserved &copy;
                    </p>
                </div>

                <div className='footer__links'>
                    <h4 className='text-base font-semibold text-gray-700'>Company</h4>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-base text-gray-700'>
                            <Link href='/'>About</Link>
                        </li>
                        <li className='text-base text-gray-700'>
                            <Link href='/'>Careers</Link>
                        </li>
                        <li className='text-base text-gray-700'>
                            <Link href='/'>Press</Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer