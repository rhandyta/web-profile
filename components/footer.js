import React from "react";
import Social from "./social";
import { socials } from "@/constant/constant";

export default function Footer() {
    return (
        <footer className="footer flex items-center gap-10 p-10 bg-neutral text-neutral-content flex-col-reverse">
            <div>
                <p>
                    copyright @ {new Date().getFullYear()}. Made Rhandyta
                    Briantama
                    <br />
                </p>
            </div>
            <div id="aboutme">
                <span className="footer-title">Social</span>
                <div className="grid grid-flow-col gap-4">
                    {socials.map((social, index) => (
                        <Social
                            key={index}
                            link={social.link}
                            socialSvg={social.svg}
                        />
                    ))}
                </div>
            </div>
        </footer>
    );
}
