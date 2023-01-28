import Footer from "../components/footer";
import Hero from "../components/hero";
import SectionAbout from "../components/sectionAbout";
import SectionProject from "../components/sectionProject";
import SectionSkill from "../components/sectionSkill";

export default function Home() {
    return (
        <>
            <Hero />
            <SectionSkill />
            <SectionAbout />
            <SectionProject />
            <Footer />
        </>
    );
}
