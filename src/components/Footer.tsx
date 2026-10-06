export default function Footer() {
  return (
    <footer>
      <ul className="contact-list">
        <li>
          <a href="mailto:hello@levis.com">hello@levis.com</a>
        </li>
        <li>
          <a href="https://github.com/levis" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/levis" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
      <p>© {new Date().getFullYear()} Levis. All rights reserved.</p>
    </footer>
  )
}
