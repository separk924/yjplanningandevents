import { TwotoneFullscreenExit } from "@/assets/Exit";
import Link from "next/link";

interface NavBarProps {
  setOpenNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  animationClass: string;
  setAnimationClass: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavBarProps> = ({ setOpenNavbar, animationClass, setAnimationClass }) => {

    const handleClose = () => {
        setAnimationClass('animate-slide-out-to-left');
        setTimeout(() => {
            setOpenNavbar(false);
        }, 400)
    }

    const navItems =[
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services"},
        { name: "Contact", href: "/contact"},
        { name: "FAQ", href: "/faq"},
        // { name: "Reviews", href: "/reviews"}
    ]

    return (
        <div className="inline-flex">
            <div className="bg-sky-100 w-screen">
                <div className={`
                    fixed inset-5 z-50 bg-orange-50
                    ${animationClass}
                `}>
                    <div className="flex justify-end p-4">
                        <button
                            onClick={handleClose}
                            className="hover:scale-110 transition-transform duration-300">
                            <TwotoneFullscreenExit onClick={handleClose}/>
                        </button>
                    </div>
                    <div className="block">
                        <ul className="flex flex-col gap-2 mt-2 mb-4 items-center">
                            {navItems.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center p-1 text-2xl gap-x-2 text-slate-500 hover:text-slate-600 mb-20">
                                <Link href={item.href} className="flex items-center">
                                {item.name}
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Navbar;