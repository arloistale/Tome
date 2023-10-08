import './page.scss'

import AphorismSingle from "../aphorisms/aphorism-single";
import { getLongDateString } from "../../util/date";

const Home = () => {
    return (
      <>
        <section className='hero is-primary'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <h1 className="subtitle is-3">{getLongDateString(new Date())}</h1>
            </div>
          </div>
        </section>
        <div className='columns'>
          <div className='column'></div>
          <div className='column is-three-quarters'>
            <section className='section'>
              <AphorismSingle />
            </section>
          </div>
          <div className='column'> </div>
        </div>
      </>
    );
  };

export default Home;