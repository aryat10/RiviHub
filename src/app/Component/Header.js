import React from "react";
import styles from "@/app/styles/navbar.module.css"
import Link from "next/link"
import Image from "next/image"
import Nav from "@/app/Component/Nav"
const Header = () =>{
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href="/">
                    <Image src="/logo.png"alt="RiviHUb Logo" 
                    width={150} 
                    height={45}/>
                </Link>
            </div>
            <Nav/>
        </header>
    )
}

export default Header;