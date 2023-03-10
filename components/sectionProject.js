import React from "react";
import CardProject from "./cardProject";
import { projects } from "@/constant/constant";
export default function SectionProject() {
    return (
        <section className="hero min-h-screen bg-base-200 px-10" id="project">
            <div className="hero-content text-center">
                <div>
                    <h3 className="text-5xl font-bold text-center mb-10">
                        My Projects
                    </h3>
                    <div className="flex flex-wrap gap-5 justify-center">
                        {projects
                            .sort((a, b) => a.new - b.new)
                            .map((project, index) => {
                                return (
                                    <CardProject
                                        key={index}
                                        name={project.name}
                                        tags={project.tags}
                                        newProject={project.new}
                                        img={project.img}
                                        description={project.description}
                                    />
                                );
                            })
                            .reverse()}
                    </div>
                </div>
            </div>
        </section>
    );
}
