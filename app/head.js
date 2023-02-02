import heroImage from "../public/assets/images/hero.jpg";
export default function Head() {
    return (
        <>
            <title>Rhandyta Briantama Portfolio | WEB Developer</title>
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="keywords"
                content="rhandyta, briantama, rhandyta briantama, portfolio, web developer, React, HTML, CSS, JavaScript, freelancer, project samples, skills, php, laravel, tailwindcss"
            ></meta>
            <meta
                name="description"
                content="Welcome to my online portfolio. I am a Highly skilled web dev, React, HTML, CSS, JS, PHP, Laravel. Portfolio avail, see best projects. Prove expertise."
            />
            <meta property="og:title" content="Rhandyta Briantama Portfolio" />
            <meta
                property="og:description"
                content="Explore the skills and project samples of a talented web developer specializing in React, HTML, CSS, and JavaScript, PHP, Laravel, Tailwindcss, Codeigniter."
            />
            <meta
                property="og:image"
                content={`https://rhandyta.my.id/${heroImage}`}
            />
            <meta property="og:url" content="https://rhandyta.my.id" />
            <meta property="og:type" content="website" />
            <meta name="robots" content="all" />
            <link rel="icon" href="/favicon.ico" />
        </>
    );
}
