import Image from "next/image";
import React from "react";

export default function SectionAbout() {
    return (
        <div className="hero min-h-screen bg-base-200 px-10">
            <div className="hero-content flex-col lg:flex-row">
                <Image
                    src="/assets/images/skills.png"
                    className="max-w-full rounded-lg shadow-2xl bg-transparent"
                />
                <div>
                    <h1 className="text-5xl font-bold text-center">About me</h1>
                    <p className="py-6 text-justify">
                        I am an energetic and ambitious person. I always strive
                        to learn something new and pursue my dreams. I am highly
                        interested in technology and always look for ways to
                        improve my skills and knowledge in the field. As a
                        friendly and team-oriented person, I have a strong
                        desire to become a successful professional in the field
                        I am passionate about, and work hard to achieve my
                        goals.
                    </p>
                </div>
            </div>
        </div>
    );
}
