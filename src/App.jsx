import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Approach from "./components/Approach";
import Practice from "./components/Practice";
import Engagement from "./components/Engagement";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Engagement />
        <Approach />
        <Practice />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
