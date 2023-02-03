import React from "react";
import Image from "next/image";

export default function CardProject({
    name,
    img,
    tags,
    newProject,
    description,
}) {
    return (
        <div className="card w-full sm:w-96 bg-base-100 shadow-xl">
            <figure>
                <Image
                    itemProp="image"
                    src={img.src}
                    alt={name}
                    width="500"
                    height="450"
                    loading="lazy"
                />
            </figure>
            <div className="card-body">
                <h4
                    className="card-title uppercase inline-block"
                    itemProp="project name"
                >
                    {name}
                    {newProject && (
                        <div className="ml-1 badge badge-secondary">NEW</div>
                    )}
                </h4>
                <p className="antialiased" itemProp="description">
                    {description}
                </p>
                <div className="card-actions justify-start">
                    {tags.map((tag, index) => (
                        <div
                            className="badge badge-outline"
                            key={index}
                            itemProp="tech stack"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
