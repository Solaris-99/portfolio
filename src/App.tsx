import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
      </main>
      <footer style={{ textAlign: 'center', padding: '3rem 2rem', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)', marginTop: '4rem' }}>
        <p>© {new Date().getFullYear()} Emanuel. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
