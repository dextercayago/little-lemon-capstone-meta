import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import Aboutlittlelemon from './components/Aboutlittlelemon';
import Footer from './components/Footer';
import Booking from './components/Booking';


function App() {
   return (
    <>
      <Navbar />
      <Booking />
      <Footer />
    </>
  );
}

export default App;

/* Orig HomePage
    <>
    <Navbar />
    <Hero />
    <Specials />
    <Testimonials />
    <Aboutlittlelemon />
    <Footer />
    </>
*/
/*
<>
<Navbar />
<Booking />
<Footer />
</>
*/