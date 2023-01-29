"use client";
import React, { useEffect } from "react";
import { useLocalStorage } from "react-use";

export default function ButtonTheme() {
    const [theme, setTheme] = useLocalStorage("theme", "luxury");

    const toggleTheme = () => {
        setTheme(theme === "luxury" ? "light" : "luxury");
    };
    useEffect(() => {
        if (typeof window !== "undefined") {
            const body = document.body;
            body.setAttribute("data-theme", theme);
        }
    }, [theme]);

    return (
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text mr-2">Mode</span>
                <input
                    type="checkbox"
                    className="toggle"
                    checked={theme === "luxury" ? true : false}
                    onChange={toggleTheme}
                />
            </label>
        </div>
    );
}
