import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/Component/Header"
import { Mulish } from "next/font/google";

const mulish = Mulish({
  weight: ['300','400','500','600','700','800','900'],
  subsets: ['latin'],
  display: 'swap'
})


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RiviHub",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body className={inter.className}>
         <Header/>
        {children}
        </body>
    </html>
   
  );
}
