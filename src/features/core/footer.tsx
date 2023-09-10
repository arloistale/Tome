const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>If you'd like to submit a writing, send me an <a href="mailto:jonathanlu321@gmail.com" target='_blank'>Email</a></p>
          <p>Copyright © {new Date().getFullYear()} Jonathan Lu.</p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;