import React from "react";
import herostyles from "@/app/styles/herosection.module.css"
import styles from "@/app/styles/common.module.css"
import Image from "next/image";
import Link from "next/link";

const Herosection = ({title , imageUrl}) =>{
   return (
    <main className={herostyles.main_section}>
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={herostyles.hero_content}>
                    <h1>{title}</h1>
                    <p>
                    From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse
                            our
                            selection of the latest and greatest movies, and find your new favorite today.
                    </p>
                    <Link href="/movie">
                    <button>
                        Explore Movies  
                    </button>
                    </Link>
                </div>

                <div className="{heroStyles.hero_image">
                    <Image src= {imageUrl} alt="watching photo" width={500} height={500}/>
                </div>

            </div>

        </div>

    </main>
   )
}

export default Herosection;
