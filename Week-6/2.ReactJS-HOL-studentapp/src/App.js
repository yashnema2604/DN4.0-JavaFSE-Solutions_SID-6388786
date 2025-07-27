import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="Container" style = {{textalign :"center" }}>
      <Home />
      <About />
      <Contact />
    </div>
  )
}

export default App;