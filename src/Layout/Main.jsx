import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaWhatsapp,FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Main = () => {
    const copy = String.fromCodePoint(0x00A9);
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <div className="flex justify-between text-sm rounded-sm font-semibold mt-1 px-4">
                <p >copyright{copy} 2024</p>
                <div className="flex gap-2">
                    <p> Develop by <span className='font-mono font-bold hover:font-extrabold hover:underline text-[#C32148]'>ASIB AHMED</span> </p>
                    <div className="flex gap-2 items-center text-[#C32148]">
                        <a href="https://wa.me/+8801753249719" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
                        <a href="https://www.facebook.com/asibahmed11" target="_blank" rel="noreferrer"><FaFacebook /></a>
                        <a href="https://www.linkedin.com/in/asib/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/asib_11/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                        <a href="https://github.com/asib11" target="_blank" rel="noreferrer"><FaGithub /></a>
                        <a href="mailto:ahmedasib1@gmail.com" target="_blank" rel="noreferrer"><SiGmail /></a>
                        <a href="https://t.me/asibahmed" target="_blank" rel="noreferrer"><FaTelegram /></a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Main;