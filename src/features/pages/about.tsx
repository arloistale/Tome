const About = () => {
    return (
      <>
        <div className='columns'>
            <div className='column'></div>
            <div className='column is-three-quarters'>
              <section className='section'>
                <div className="content">
                  <p>Each day, this website showcases a reflection from various sources, including:</p>
                  <ol>
                    <li>The Enchiridion by Epitectus</li>
                    <li>Tao Te Ching by Laozi</li>
                    <li>The Art of War by Sun Tzu</li>
                    <li>The Comfort Book by Matt Haig</li>
                  </ol>
                  <p>An algorithm chooses the daily writing using a weighted random algorithm. The writings are curated by Jon Lu, a software engineer and writer living in Brooklyn. </p>
                  <h1>How it was made</h1>
                  <p>This website is a pet web development project. It was made using the following tech stack:</p>
                  <ul>
                    <li>Frontend: React, Redux, Apollo GraphQL, Typescript, HTML, CSS</li>
                    <li>Backend: FastAPI, Strawberry GraphQL, Python</li>
                    <li>Database: Supabase Postgresql</li>
                    <li>Other: Docker, Git, Render</li>
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