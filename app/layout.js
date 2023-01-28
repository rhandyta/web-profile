import "./globals.css";
import { Poppins } from "@next/font/google";
import Header from "@/components/header";

const poppins = Poppins({
    subsets: ["latin"],
    display: "optional",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light" className={`${poppins.className}`}>
            {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body className="bg-slate-50 min-h-screen ">
                <Header />
                {children}
            </body>
        </html>
    );
}
