import PageWrapper from './components/layout/PageWrapper';
import { Hero, About, Projects, Contact } from './components/sections';

function App() {
  return (
    <PageWrapper>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </PageWrapper>
  );
}

export default App;
