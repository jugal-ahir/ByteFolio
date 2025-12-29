import dynamic from "next/dynamic";
const Navigation = dynamic(() => import("../components/Navigation"), { ssr: false });
const Greetings = dynamic(() => import("../containers/Greetings"), { ssr: false });
const Skills = dynamic(() => import("../containers/Skills"), { ssr: false });
const Proficiency = dynamic(() => import("../containers/Proficiency"), { ssr: false });
const Education = dynamic(() => import("../containers/Education"), { ssr: false });
const Experience = dynamic(() => import("../containers/Experience"), { ssr: false });
const Projects = dynamic(() => import("../containers/Projects"), { ssr: false });
const Feedbacks = dynamic(() => import("../containers/Feedbacks"), { ssr: false });
const GithubProfileCard = dynamic(() => import("../components/GithubProfileCard"), { ssr: false });
import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import { GithubUserType } from "../types";

export default function Home({ githubProfileData }: { githubProfileData: any }) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      {/* <Feedbacks /> */}
      <Projects />
      <GithubProfileCard {...githubProfileData} />
    </div>
  );
}

// Home.prototype = {
//   githubProfileData: PropTypes.object.isRequired,
// };

export async function getStaticProps() {
  try {
    const res = await fetch(`https://api.github.com/users/${openSource.githubUserName}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch GitHub profile: ${res.statusText}`);
    }
    const githubProfileData: GithubUserType = await res.json();

    return {
      props: { githubProfileData },
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      props: { githubProfileData: null },
    };
  }
}
