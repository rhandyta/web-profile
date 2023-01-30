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
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <Image
                    src={img.src}
                    alt={name}
                    width="500"
                    height="450"
                    loading="lazy"
                />
            </figure>
            <div className="card-body">
                <h4 className="card-title uppercase inline-block">
                    {name}
                    {newProject && (
                        <div className="ml-1 badge badge-secondary">NEW</div>
                    )}
                </h4>
                <p className="antialiased">{description}</p>
                <div className="card-actions justify-start">
                    {tags.map((tag, index) => (
                        <div className="badge badge-outline" key={index}>
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
