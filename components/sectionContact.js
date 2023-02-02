import React from "react";
import { socials } from "@/constant/constant";
import Social from "./social";
export default function SectionContact() {
    return (
        <section className="hero min-h-screen bg-base-200" id="contactus">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h3 className="text-5xl font-bold">Contact Us</h3>
                    <p className="py-6">
                        Connect with us for support, feedback, or just to say
                        hello. We're here to help and make your experience a
                        positive one.
                    </p>
                    <div className="flex justify-center flex-wrap gap-4">
                        {socials.map((social, index) => (
                            <Social
                                key={index}
                                link={social.link}
                                socialSvg={social.svg}
                                widthSvg="24"
                                heightSvg="24"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
