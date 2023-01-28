import Image from "next/image";
import React from "react";

export default function Hero() {
    return (
        <div className="hero min-h-screen bg-base-200 px-10">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <Image
                    src="/assets/images/hero.jpg"
                    className="max-w-full rounded-lg shadow-2xl"
                    alt="hero"
                />
                <div className="antialiased">
                    <h1 className="text-5xl font-bold">Hi , I'm rhandyta</h1>
                    <p className="py-6">
                        I am a developer who is passionate about learning and
                        consistency is key
                    </p>
                    <button className="btn btn-primary">Explorer me</button>
                </div>
            </div>
        </div>
    );
}
