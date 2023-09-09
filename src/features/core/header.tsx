import getDateString from "../../util/date";

const Header = () => {
    return (
      <>
        <section className='hero is-primary'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <h1 className="subtitle is-3">Today is {getDateString(new Date())}</h1>
            </div>
          </div>
        </section>
      </>
    )
}

export default Header;