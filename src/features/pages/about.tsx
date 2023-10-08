import './page.scss'

const About = () => {
    return (
      <>
        <section className='hero is-primary'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <h1 className="subtitle is-3">About</h1>
            </div>
          </div>
        </section>
        <div className='columns'>
            <div className='column'></div>
            <div className='column is-three-quarters'>
              <section className='section'>
                <div className="content">
                  <p>This website showcases daily reflections from various sources, including:</p>
                  <ol>
                    <li>The Enchiridion by Epitectus</li>
                    <li>Tao Te Ching by Laozi</li>
                    <li>The Art of War by Sun Tzu</li>
                    <li>The Comfort Book by Matt Haig</li>
                  </ol>
                  <p>An algorithm chooses a new daily reflection every day at 12:05AM UTC/8:05PM EST. The writings are curated by Jon Lu, a software engineer and writer living in Brooklyn. </p>
                  <p>If you'd like to submit a piece, send it via <a href="mailto:jonathanlu321@gmail.com" rel="noopener noreferrer" target='_blank'>Email</a>!</p>
                  <h1>How it was made</h1>
                  <p>This website uses the following tech stack:</p>
                  <ul>
                    <li>Frontend: React, Redux, Apollo GraphQL, Typescript, HTML, CSS</li>
                    <li>Backend: FastAPI, Strawberry GraphQL, Python</li>
                    <li>Database: Supabase PostgreSQL</li>
                    <li>Other: Docker, AWS, Git, Netlify, Fly.io</li>
                  </ul>
                  <h1>Links</h1>
                  <p>Please see the following links for more information about Jon Lu.</p>
                  <ul>
                    <li><a href='https://github.com/arloistale' rel="noopener noreferrer" target='_blank'>Github</a></li>
                    <li><a href='https://github.com/arloistale/Tome' rel="noopener noreferrer" target='_blank'>Website Frontend</a></li>
                    <li><a href='https://github.com/arloistale/TomeBackend' rel="noopener noreferrer" target='_blank'>Website Backend</a></li>
                    <li><a href='https://www.linkedin.com/in/mrcornman/' rel="noopener noreferrer" target='_blank'>LinkedIn</a></li>
                  </ul>
                </div>
              </section>
            </div>
            <div className='column'></div>
        </div>
      </>
    );
  }

export default About;
