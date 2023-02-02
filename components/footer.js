import React from "react";
import Social from "./social";
import { socials } from "@/constant/constant";

export default function Footer() {
    return (
        <footer
            className="footer flex justify-center items-center gap-10 p-10 bg-neutral text-neutral-content flex-col-reverse"
            id="footer"
        >
            <div>
                <p>
                    copyright @ {new Date().getFullYear()}. Made Rhandyta
                    Briantama
                    <br />
                </p>
            </div>
            <div className="flex flex-col items-center">
                <span className="footer-title">Social</span>
                <div className="grid grid-flow-col gap-4">
                    {socials.map((social, index) => {
                        return (
                            <Social
                                key={index}
                                link={social.link}
                                socialSvg={social.svg}
                                widthSvg="6"
                                heightSvg="6"
                            />
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}
