import Analytics from "./components/Analytics";
import Cards from "./components/Card";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
       <Analytics/>
       <Newsletter/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
