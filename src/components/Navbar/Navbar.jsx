import { Link } from "react-router-dom";


const Navbar = () => {
    const navbarItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About us</Link></li>
        <li>
            <Link to='/services'>Services</Link>
            {/* <ul className="p-2">
                <li><Link>Submenu 1</Link></li>
                <li><Link>Submenu 2</Link></li>
                <li><Link>Submenu 2</Link></li>
                <li><Link>Submenu 2</Link></li>
                <li><Link>Submenu 2</Link></li>
                <li><Link>Submenu 2</Link></li>
                <li><Link>Submenu 2</Link></li>
                <li><Link>Submenu 2</Link></li>
                <li><Link>Submenu 2</Link></li>
                <li><Link>Submenu 2</Link></li>
                <li><Link>Submenu 2</Link></li>
                <li><Link>Submenu 2</Link></li>
            </ul> */}
        </li>
        <li><Link to='/contact'>Contact</Link></li>

    </>

    return (
        <div className="navbar bg-base-100 text-[#800000]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navbarItem
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl">Prime Printing Press</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* <li><a>Item 1</a></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li> */}
                    {
                        navbarItem
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-ghost text-3xl">Prime Digital world</a>
            </div>
        </div>
    );
};

export default Navbar;