"use client";
import ButtonTheme from "./buttonTheme";
import { menus } from "@/constant/constant";
import Link from "next/link";

export default function Header() {
    const handleClickScroll = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <header className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {menus.map((menu, index) => (
                            <li key={index}>
                                <Link
                                    href={`#${menu.elementId}`}
                                    onClick={() =>
                                        handleClickScroll(menu.elementId)
                                    }
                                >
                                    {menu.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <h1 className="btn btn-ghost normal-case text-sm sm:text-xl">
                    Rhandyta Briantama
                </h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menus.map((menu, index) => (
                        <li key={index}>
                            <Link
                                href={`#${menu.elementId}`}
                                onClick={() =>
                                    handleClickScroll(menu.elementId)
                                }
                            >
                                {menu.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end">
                <ButtonTheme />
            </div>
        </header>
    );
}
