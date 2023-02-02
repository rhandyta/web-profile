import React from "react";
import Link from "next/link";
export default function Social({
    link,
    socialSvg,
    widthSvg = 6,
    heightSvg = 6,
}) {
    return (
        <Link href={link} className={`w-${widthSvg} h-${heightSvg}`}>
            {socialSvg}
        </Link>
    );
}
