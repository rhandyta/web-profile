import React from "react";
import { svgSkills } from "@/constant/constant";

export default function SectionSkill() {
    return (
        <section className="hero min-h-screen bg-base-200 px-10" id="skill">
            <div className="hero-content">
                <div>
                    <h3 className="text-5xl font-bold text-center mb-10">
                        My Skill
                    </h3>
                    <div className="flex flex-wrap justify-between gap-5">
                        {svgSkills.map((skill, index) => (
                            <div className="w-24 sm:w-32" key={index}>
                                {skill.svg}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
