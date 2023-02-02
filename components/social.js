import React from "react";
import Link from "next/link";
export default function Social({ link, socialSvg, w = 6, h = 6 }) {
    return (
        <Link href={link} className={`w-${w} h-${h}`}>
            {socialSvg}
        </Link>
    );
}
