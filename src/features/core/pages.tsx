import { Link } from "react-router-dom";
import AphorismList from "../aphorisms/aphorism-list";
import AphorismSingle from "../aphorisms/aphorism-single";
import ReflectionsHero from "./reflections-hero";
import Nav from "./nav";
import TodayIsHero from "./today-is-hero";
import AboutHero from "./about-hero";
import Footer from "./footer";

export const Home = () => {
    return (
      <div className="page-container">
        <Nav />
        <TodayIsHero />
        <div className='columns'>
          <div className='column'></div>
          <div className='column is-three-quarters'>
            <section className='section'>
              <AphorismSingle />
            </section>
          </div>
          <div className='column'> </div>
        </div>
        <Footer />
      </div>
    );
  };

export const Reflections = () => {
    return (
      <div className="page-container">
        <Nav />
        <ReflectionsHero />
        <div className='columns'>
          <div className='column'></div>
          <div className='column is-three-quarters'>
            <section className='section'>
              <AphorismList />
            </section>
          </div>
          <div className='column'></div>
        </div>
        <Footer />
      </div>
    );
  };

export const About = () => {
  return (
    <div className="page-container">
      <Nav />
      <AboutHero />
      <div className='columns'>
          <div className='column'></div>
          <div className='column is-three-quarters'>
            <section className='section'>
              <div className="content">
                <p>Every day, this website displays a random curated writing from various sources, including:</p>
                <ol>
                  <li>The Enchiridion by Epitectus</li>
                  <li>Tao Te Ching by Laozi</li>
                  <li>The Art of War by Sun Tzu</li>
                  <li>The Comfort Book by Matt Haig</li>
                </ol>
                <p>Every day an algorithm chooses a writing using a weighted random algorithm. The writings are curated by Jon Lu, a software engineer and writer living in Brooklyn. </p>
                <h1>How it was made</h1>
                <p>This website is a pet web-dev project. It was made using the following tech stack:</p>
                <ul>
                  <li>Frontend: React, Redux, Apollo GraphQL, Typescript, HTML, CSS</li>
                  <li>Backend: FastAPI, Strawberry GraphQL, Python</li>
                  <li>Database: Supabase Postgresql</li>
                  <li>Other: Docker, Git, Render</li>
                </ul>
                <h1>Links</h1>
                <p>Please see the following links for more information about Jon Lu</p>
                <ul>
                  <li><a href='https://github.com/arloistale' target='_blank'>Github</a></li>
                  <li><a href='https://github.com/arloistale/Tome' target='_blank'>Website Frontend</a></li>
                  <li><a href='https://github.com/arloistale/TomeBackend' target='_blank'>Website Backend</a></li>
                  <li><a href='https://www.linkedin.com/in/mrcornman/' target='_blank'>LinkedIn</a></li>
                </ul>
              </div>
            </section>
          </div>
          <div className='column'></div>
      </div>
      <Footer />
    </div>
  );
}