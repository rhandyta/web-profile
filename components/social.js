import React from "react";
import Link from "next/link";
export default function Social({ link, socialSvg }) {
    return (
        <Link href={link} className="w-6 h-6">
            {socialSvg}
        </Link>
    );
}
