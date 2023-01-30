import React from "react";
import Image from "next/image";

export default function CardProject({ name, img, tags, newProject }) {
    return (
        <div className="card w-72 bg-base-100 shadow-xl">
            <figure>
                <Image
                    src={img.src}
                    alt={name}
                    width="1080"
                    height="500"
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
                <p>If a dog chews shoes whose shoes does he choose?</p>
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
