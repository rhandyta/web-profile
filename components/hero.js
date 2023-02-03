import Image from "next/image";
import React from "react";

export default function Hero() {
    return (
        <section className="hero min-h-screen bg-base-200 px-10" id="home">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <Image
                    src="/assets/images/hero.jpg"
                    className="max-w-full rounded-lg shadow-2xl"
                    alt="rhandyta"
                    width="400"
                    height="400"
                    loading="lazy"
                />
                <div className="antialiased">
                    <h2 className="text-5xl font-bold">
                        Hi 👋, I&apos;m rhandyta briantama😁
                    </h2>
                    <p
                        className="py-6 antialiased"
                        itemProp="description rhandyta briantama"
                    >
                        I am a developer who is passionate about learning🕮 and
                        consistency is key🗝️. Rhandyta Briantama is a web
                        developer who has an interest and desire to develop
                        expertise in the field of website creation. rhandyta has
                        a foundation in programming languages such as HTML, CSS,
                        and JavaScript and is constantly trying to expand her
                        knowledge and skills. Rhandyta Briantama&apos;s
                        portfolio includes several projects worked on during the
                        course of study, including simple websites, certificates
                        and simple web applications. Thank you for visiting my
                        web profile to see the potential and results of work as
                        a web developer and assist in the development of
                        improvements.
                    </p>
                    <button className="btn btn-neutral">Explorer me</button>
                </div>
            </div>
        </section>
    );
}
