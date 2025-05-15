import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useIsMobile } from "./components/ui/useIsMobile";
import { Element } from "./screens/Element";
import { Element2 } from "./screens/Element/Element2";
import { Element3 } from "./screens/Element/Element3";
import { Element4 } from "./screens/Element/Element4";
import { Element5 } from "./screens/Element/Element5";
import { Element6 } from "./screens/Element/Element6";
import { Element7 } from "./screens/Element/Element7";
import { Element8 } from "./screens/Element/Element8";
import { Element9 } from "./screens/Element/Element9";
import { Reviews } from "./screens/Reviews/src/Reviews/Reviews";
import { Shatry } from "./screens/Shatry/src/Shatry/Shatry";
import { Arochnye } from "./screens/Arochnye/src/Arochnye/Arochnye";
import { Mobilnye } from "./screens/Mobilnye/src/Mobilnye/Mobilnye";
import { Proizvodstvoshatrov } from "./screens/Proizvodstvoshatrov/src/Proizvodstvoshatrov/Proizvodstvoshatrov";
import { QA } from "./screens/QA/src/QA/QA";
import { Services } from "./screens/Services/src/Services/Services";
import { OurProjects } from "./screens/OurProjects/src/OurProjects/OurProjects";
import { MainOurProjects } from "./screens/MainOurProjects/src/MainOurProjects/MainOurProjects";
import { Ulichnoy } from "./screens/Ulichnoy/src/Ulichnoy/Ulichnoy";
import { Turisticheskie } from "./screens/Turisticheskie/src/Turisticheskie/Turisticheskie";
import { SportPergoly } from "./screens/SportPergoly/src/SportPergoly/SportPergoly";
import { Angary } from "./screens/Angary/src/Angary/Angary";
import { SportAngary } from "./screens/SportAngary/src/SportAngary/SportAngary";
import { DlyaRestorana } from "./screens/DlyaRestorana/src/DlyaRestorana/DlyaRestorana";
import { HexagonalTent } from "./screens/HexagonalTent/src/HexagonalTent/HexagonalTent";
import { SferaTent } from "./screens/SferaTent/src/SferaTent/SferaTent";
import { DlyaVremennyh } from "./screens/DlyaVremennyh/src/DlyaVremennyh/DlyaVremennyh";
import { ClasicTent } from "./screens/ClasicTent/src/ClasicTent/ClasicTent";
import { DlyaZagorodnyh } from "./screens/DlyaZagorodnyh/src/DlyaZagorodnyh/DlyaZagorodnyh";
import { DlyaSport } from "./screens/DlyaSport/src/DlyaSport/DlyaSport";
import { Membrannye } from "./screens/Membrannye/src/Membrannye/Membrannye";
import { DlyaTorgestva } from "./screens/DlyaTorgestva/src/DlyaTorgestva/DlyaTorgestva";
import { Comanda } from "./screens/Comanda/src/Comanda/Comanda";
import { Contact } from "./screens/Contact/src/Contact/Contact";
import { About } from "./screens/About/src/About/About";
import MobileLayout from './MobileLayout/MobileLayout'; // ✅ Make sure default export or change to { MobileLayout }
import ScrollToTop from './components/ui/ScrollToTop';
import { HelmetProvider } from "react-helmet-async";

const MainLayout = () => (
  <>
    <Element />
    <Element2 />
    <Element3 />
    <Element4 />
    <Element5 />
    <Element6 />
    <Element7 />
    <Element8 />
    <Element9 />

  </>
);

const App = () => {
  const isMobile = useIsMobile();

  return (
    <>
    <HelmetProvider>
      <ScrollToTop />
    <Routes>
      <Route path="/" element={isMobile ? <MobileLayout /> : <MainLayout />} />
      <Route path="/reviews" element={isMobile ? <Reviews /> : <Reviews />} />
      <Route path="/shatry" element={isMobile ? <Shatry /> : <Shatry />} />
      <Route path="/shatry-i-navesy/arochnye" element={isMobile ? <Arochnye /> : <Arochnye />} />
      <Route path="/shatry-i-navesy/mobilnye" element={isMobile ? <Mobilnye /> : <Mobilnye />} />
      <Route path="/proizvodstvo-shatrov" element={isMobile ? <Proizvodstvoshatrov /> : <Proizvodstvoshatrov />} />
      <Route path="/service" element={isMobile ? <Services /> : <Services />} />
      <Route path="/our-projects/custom" element={isMobile ? <OurProjects /> : <OurProjects />} />
      <Route path="/our-projects" element={isMobile ? <MainOurProjects /> : <MainOurProjects />} />
      <Route path="/our-projects/shatyor-3h3-dlya-ulichnoy-torgovli" element={isMobile ? <Ulichnoy /> : <Ulichnoy />} />
      <Route path="/turisticheskie-shatry-i-tenty" element={isMobile ? <Turisticheskie /> : <Turisticheskie />} />
      <Route path="/dlya-sport-pergoly" element={isMobile ? <SportPergoly /> : <SportPergoly />} />
      <Route path="/shatry-i-navesy/tentovye-angary" element={isMobile ? <Angary /> : <Angary />} />
      <Route path="/dlya-sport-angary_arochnye" element={isMobile ? <SportAngary /> : <SportAngary />} />
      <Route path="/our-projects/shatyor-10h15-dlya-restorana" element={isMobile ? <DlyaRestorana /> : <DlyaRestorana />} />
      <Route path="/dlya-vremennyh-hexagonal-tent" element={isMobile ? <HexagonalTent /> : <HexagonalTent />} />
      <Route path="/dlya-vistavok-sfera-tent" element={isMobile ? <SferaTent /> : <SferaTent />} />
      <Route path="/dlya-vremennyh-angary_karkasnye" element={isMobile ? <DlyaVremennyh /> : <DlyaVremennyh />} />
      <Route path="/dlya-vistavok-clasic-tent" element={isMobile ? <ClasicTent /> : <ClasicTent />} />
      <Route path="/dlya-zagorodnyh-domov-klassicheskiye" element={isMobile ? <DlyaZagorodnyh /> : <DlyaZagorodnyh />} />
      <Route path="/dlya-sport-angary_karkasnye" element={isMobile ? <DlyaSport /> : <DlyaSport />} />
      <Route path="/shatry-i-navesy/membrannye" element={isMobile ? <Membrannye /> : <Membrannye />} />
      <Route path="/dlya-torgestva-meropriyatiya" element={isMobile ? <DlyaTorgestva /> : <DlyaTorgestva />} />

      <Route path="/qa" element={isMobile ? <QA /> : <QA />} />
      <Route path="/comanda" element={isMobile ? <Comanda /> : <Comanda />} />
      <Route path="/contact" element={isMobile ? <Contact /> : <Contact />} />
      <Route path="/about" element={isMobile ? <About /> : <About />} />
      <Route path="/honors" element={isMobile ? <About /> : <About />} />

    </Routes>
    </HelmetProvider>
    </>

  );
};

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
