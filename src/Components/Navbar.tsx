import logoMine from '../assets/logoNew.png'
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export const Navbar = () => {

return (
    <nav className='mb-2 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-120' src={logoMine} alt='Mi Logo'/>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaGithub/>
            <FaYoutube/>
            <FaInstagram/>
            <FaFacebook/>
        </div>
    </nav>
)
}

export default Navbar;
