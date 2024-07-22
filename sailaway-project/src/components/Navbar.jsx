import { navLinks, sideNavLinks, icons } from "../data.jsx"
import NavLogo from "./common/NavLogo.jsx"


const Navbar = () => {


    return (
        <nav className="min-w-full border-b-2 bg-white text-black fixed top-0 space-x-5 h-16 py-5 px-10 flex text-center items-center z-40">
            <NavLogo />
            <div className="flex w-full justify-between pl-10 pr-6">
                <ul className="navlinks flex space-x-14 justify-center text-xl items-end">
                    {console.log(icons[0])}
                    {navLinks.map((list, i) => {
                        return (
                            <li key={list.id}>
                                <a href={list.href}>
                                    <h3 className="font-extrabold">{list.title}</h3>
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <ul className="side-navlinks flex space-x-8 justify-center items-center">
                    {console.log(icons[0])}
                    {sideNavLinks.map((list, i) => {
                        return (
                            <li key={list.id}>
                                <a className="flex items-center text-sm" href={list.href}>
                                    <i className={`fa fa-${list.img} pr-2`} ></i>
                                    <h3>{list.title}</h3>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar