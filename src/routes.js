import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export const routes = [
  {
    path: "/",
    Component: HomePage,
    title: "Solicht Energie – Photovoltaik in Mosbach, Heilbronn & Umgebung",
    description:
      "Jetzt Solaranlage in Mosbach, Heilbronn & Umgebung installieren lassen. Solicht Energie – Ihr Partner für Photovoltaik, Stromspeicher & nachhaltige Energielösungen. Kostenlose Beratung!",
  },
  {
    path: "/unternehmen/",
    Component: AboutUs,
    title: "Unternehmen | Solicht Energie",
    description:
      "Bauingenieur, Energieeffizienz-Experte und Elektroingenieur: Lernen Sie das Team von Solicht Energie aus Bad Rappenau kennen.",
  },
  {
    path: "/leistungen/",
    Component: Services,
    title: "Leistungen | Solicht Energie",
    description:
      "Planung, Installation und Wartung von PV-Anlagen, Energieberatung, Baubegleitung sowie Aufzugsmontage – alles aus einer Hand.",
  },
  {
    path: "/projekte/",
    Component: Projects,
    title: "Projekte | Solicht Energie",
    description:
      "Referenzprojekte: Photovoltaik-Anlagen mit Stromspeicher in Mosbach, Haßmersheim, Bad Rappenau und Oggersheim.",
  },
  {
    path: "/kontakt/",
    Component: Contact,
    title: "Kontakt | Solicht Energie",
    description:
      "Kontaktieren Sie Solicht Energie in Bad Rappenau: Telefon +49 178 823 31 08, E-Mail info@solicht.com.",
  },
];
