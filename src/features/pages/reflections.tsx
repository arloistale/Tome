import './page.scss'

import AphorismList from "../aphorisms/aphorism-list";

const Reflections = () => {
    return (
      <>
        <section className='hero is-primary'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <h1 className="subtitle is-3">Reflections</h1>
            </div>
          </div>
        </section>
        <div className='columns'>
          <div className='column'></div>
          <div className='column is-three-quarters'>
            <section className='section'>
              <AphorismList />
            </section>
          </div>
          <div className='column'></div>
        </div>
      </>
    );
  };

export default Reflections;