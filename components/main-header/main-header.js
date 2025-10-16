import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";
import Navlink from "./nav-link";

export default function MainHeader(){
    return(
        <>
        <MainHeaderBackground />
        <header className={classes.header}>
        <Link href="/" className={classes.logo}>
            <Image src={Logo} alt="A plate with food on it" priority/>
            NextLevel Food
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <Navlink href="/meals" >Browse Meals</Navlink>
                </li>
                <li>
                    <Navlink href="/community">Foodies Community</Navlink>
                </li>
            </ul>
        </nav>
    </header>
    </>
        
    )
}