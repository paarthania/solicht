import React, { useState, useEffect } from "react";
import "../styles/GradientInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLeaf,
  faBolt,
  faLightbulb,
  faTools,
  faBoxOpen,
  faMoneyBillAlt,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

const options = [
  {
    icon: faLeaf,
    title: "Nachhaltigkeit",
    text: "Nachhaltigkeit in der Bauindustrie Deutschlands spielt eine entscheidende Rolle in der nationalen Strategie zur Erreichung einer nachhaltigen Entwicklung und der Treibhausgasneutralität bis 2050. Das Konzept des nachhaltigen Bauens umfasst eine ganzheitliche Betrachtung des Lebenszyklus von Gebäuden, wobei ökologische, ökonomische und soziokulturelle Aspekte gleichermaßen berücksichtigt werden. Die Bedeutung dieser Praxis wird durch die Tatsache unterstrichen, dass der Bau- und Immobiliensektor erheblich zu den CO₂-Emissionen und dem Ressourcenverbrauch in Deutschland beiträgt. Durch die Integration von Prinzipien wie Energieeffizienz, Klimaneutralität, Erhalt der Biodiversität, Ressourcenschonung und Nutzung nachwachsender Rohstoffe, zielt nachhaltiges Bauen darauf ab, die Umweltauswirkungen zu minimieren und gleichzeitig die Lebensqualität zu verbessern. Deutschland hat sich das ambitionierte Ziel gesetzt, bis 2045 einen klimaneutralen Gebäudebestand zu erreichen, was die Notwendigkeit unterstreicht, alle Akteure im Bauwesen zu mobilisieren und innovative Lösungen zu fördern. <br />Um diese Ziele zu erreichen, wurden in Deutschland relevante Gesetze und Regelwerke implementiert. Das Gebäudeenergiegesetz (GEG) ist ein zentrales Instrument, das die energetischen Anforderungen an beheizte oder klimatisierte Gebäude festlegt, um den Energieverbrauch zu senken und den Einsatz erneuerbarer Energien zu fördern. Es vereint die Inhalte der Energieeinsparverordnung (EnEV), des Energieeinsparungsgesetzes (EnEG) und des Erneuerbare-Energien-Wärmegesetzes (EEWärmeG) in einem Gesetz und trägt somit zur Transparenz und Vereinfachung der rechtlichen Rahmenbedingungen bei. Darüber hinaus unterstützt die EU-Gebäuderichtlinie, die vorschreibt, dass alle neuen Gebäude in der EU ab 2021 nahezu auf dem Niveau von Null-Energie-Häusern errichtet werden sollen, Deutschlands Bestreben nach mehr Nachhaltigkeit im Bauwesen. Diese gesetzlichen Vorgaben, kombiniert mit dem nationalen Ziel der Treibhausgasneutralität bis 2050, zeigen Deutschlands Engagement für eine nachhaltige Zukunft und die Verringerung der Umweltauswirkungen des Bauwesens.",
  },
  {
    icon: faBolt,
    title: "Energieerzeugung",
    text: "Solarenergie spielt eine entscheidende Rolle in der Energiepolitik Deutschlands und ist ein zentraler Baustein der Energiewende. Die Nutzung von Solardachanlagen auf Gebäuden ermöglicht es, Strom dezentral zu erzeugen und trägt somit zur Reduktion von Treibhausgasemissionen bei. In Deutschland wurde die Bedeutung der Solarenergie durch das Erneuerbare-Energien-Gesetz (EEG) unterstrichen, welches die Einspeisevergütung für Solarstrom regelt und somit Anreize für die Installation von Photovoltaikanlagen schafft. Das EEG zielt darauf ab, den Anteil erneuerbarer Energien an der Stromversorgung zu erhöhen und die CO2-Emissionen zu senken. Darüber hinaus haben einige Bundesländer, wie Baden-Württemberg und Niedersachsen, eine Solarpflicht für Neubauten und bei grundlegenden Dachsanierungen eingeführt, um die Nutzung von Solarenergie weiter voranzutreiben. <br />Diese gesetzlichen Regelungen zeigen das starke Engagement Deutschlands für eine nachhaltige und umweltfreundliche Energieversorgung. Passivhäuser ergänzen das Konzept der Solarenergie ideal, da sie aufgrund ihrer hohen Energieeffizienz den Energiebedarf minimieren und somit die durch Solardachanlagen erzeugte Energie optimal nutzen können. Durch eine Kombination aus guter Isolierung, passiver Sonnenenergienutzung und kontrollierter Lüftung reduzieren Passivhäuser den Heiz- und Kühlbedarf auf ein Minimum. Dies führt zu einer weiteren Reduktion des Energieverbrauchs und unterstützt die Ziele der Energiewende in Deutschland.",
  },
  {
    icon: faLightbulb,
    title: "Energieeffizienz",
    text: "Die Bedeutung der Energieeffizienz in Gebäuden in Deutschland ist sowohl aus ökologischer als auch aus gesetzlicher Perspektive von zentraler Bedeutung. Das Gebäude-Energie-Gesetz (GEG), das seit dem 1. November 2020 in Kraft ist und 2023 novelliert wurde, bildet das rechtliche Fundament für die energetischen Anforderungen an beheizte und klimatisierte Gebäude. Es zielt darauf ab, den Energieverbrauch und die CO2-Emissionen im Gebäudesektor zu reduzieren, indem es Vorgaben zur Heizungs- und Klimatechnik sowie zum Wärmedämmstandard und Hitzeschutz von Gebäuden macht. Diese gesetzlichen Regelungen sind ein entscheidender Schritt, um Deutschlands Klimaschutzziele zu erreichen und die Abhängigkeit von Energieimporten zu verringern. Darüber hinaus trägt das GEG dazu bei, ein behagliches Wohn- und Arbeitsumfeld zu schaffen und den Bedarf an Heizenergie zu begrenzen, was insbesondere beim Neubau durch die Vorgabe bestimmter Anteile an regenerativen Energien zum Heizen oder Kühlen umgesetzt wird. <br /> Neben den gesetzlichen Vorgaben spielen die Umweltauswirkungen eine wesentliche Rolle bei der Betrachtung der Energieeffizienz in Gebäuden. Gebäude haben einen wesentlichen Anteil am Gesamtenergiebedarf und an den Treibhausgasemissionen in Deutschland. Durch Maßnahmen wie den Austausch von Fenstern, eine bessere Gebäudedämmung und den Einsatz effizienterer Heizungsanlagen kann der Energiebedarf von Gebäuden erheblich verringert werden. Diese Maßnahmen tragen nicht nur zum Klimaschutz bei, indem sie den CO2-Ausstoß reduzieren, sondern sie steigern auch den Wohnkomfort und machen unabhängig von schwankenden Energiepreisen. Die energetische Sanierung von Gebäuden ist somit eine Investition, die sich langfristig sowohl ökonomisch als auch ökologisch auszahlt und einen wichtigen Beitrag zur Energiewende und zum Klimaschutz leistet.",
  },
  {
    icon: faTools,
    title: "Wartungskosten",
    text: "Alte Heizanlagen in Gebäuden in Deutschland sind oft ineffizient und können zu steigenden Wartungskosten führen. Die durchschnittliche Lebensdauer einer Heizung liegt je nach System und Auslastung bei etwa 15 bis 30 Jahren. Viele Heizungen in Deutschland sind jedoch älter als 20 Jahre und arbeiten nicht effizient. Dies führt zu höherem Energieverbrauch und damit verbundenen Kosten. Zudem sind ältere Anlagen oft nicht auf dem neuesten Stand der Technik, was die Einhaltung von Umweltstandards und gesetzlichen Vorgaben betrifft. Ab 2024 müssen neue Heizungen in Deutschland zu 65 % aus erneuerbaren Energien gespeist werden, was den Austausch veralteter Systeme erforderlich macht. Die steigenden Preise für fossile Brennstoffe, verstärkt durch die Abhängigkeit von ausländischer Energie, erhöhen zusätzlich den Druck auf Eigentümer, in moderne Heizsysteme zu investieren.  <br />Um den Herausforderungen alter Heizanlagen zu begegnen, gibt es verschiedene Lösungsansätze. Die Modernisierung der Heizsysteme ist eine zentrale Maßnahme. Dabei können Eigentümer von Förderungen durch das Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA) und die Kreditanstalt für Wiederaufbau (KfW) profitieren. Der Austausch alter Heizungen gegen effizientere Systeme wie Wärmepumpen, Biomasseheizungen oder Hybridheizungen kann langfristig zu Kosteneinsparungen und einer Reduzierung des CO2-Ausstoßes führen. Zudem ist es wichtig, regelmäßige Wartungen durchzuführen, um die Effizienz und Sicherheit der Heizanlagen zu gewährleisten und das Risiko von Kohlenmonoxid-Vergiftungen zu minimieren. Ein Energieberater kann individuell beraten, welche Heizung am besten geeignet ist, um die gesetzlichen Anforderungen zu erfüllen und gleichzeitig die Betriebskosten zu senken.",
  },
  {
    icon: faBoxOpen,
    title: "Materialkosten",
    text: "Die ständig steigenden Baumaterialkosten in Deutschland haben erhebliche Auswirkungen auf die Bauindustrie und Gebäudeeigentümer. Sowohl die Rohstoff- als auch die Arbeitskosten sind betroffen, was zu einer komplexen Herausforderung führt. Die Preise für Baumaterialien wie Stahl, Holz und Beton sind aufgrund globaler Nachfrage, Handelskonflikte und geopolitischer Spannungen gestiegen. Deutschland, mit einem Rohstoffverbrauch von etwa 16 Tonnen pro Kopf, ist besonders anfällig für Preisschwankungen auf den Weltmärkten. Auf der anderen Seite tragen Fachkräftemangel, höhere Löhne und verschärfte gesetzliche Anforderungen zu den steigenden Arbeitskosten im Bauwesen bei. Diese Kostensteigerungen haben direkte und indirekte Auswirkungen auf Gebäudeeigentümer. Direkt führen sie zu höheren Ausgaben für Bau- oder Renovierungsprojekte, was die Rentabilität beeinträchtigen kann. Indirekt können die gestiegenen Baukosten zu höheren Immobilienpreisen und Mieten führen, wodurch der Zugang zu Wohnraum erschwert wird. Darüber hinaus könnten sie energetische Sanierungen und Klimaschutzmaßnahmen in Gebäuden verzögern. Insgesamt erfordert die Bewältigung dieser Herausforderungen strategische Maßnahmen auf politischer und wirtschaftlicher Ebene, um die Bauindustrie in Deutschland zukunftsfähig zu machen.",
  },
  {
    icon: faMoneyBillAlt,
    title: "Energiekosten",
    text: "Die Energiekosten in Deutschland sind in den letzten Jahren deutlich gestiegen, was sowohl Haushalte als auch die Wirtschaft vor große Herausforderungen stellt. Zu den Hauptursachen für den Anstieg der Energiepreise zählen die wachsende Nachfrage nach Energie durch die Industrie, die sich von der Corona-Krise erholte, sowie die zurückgehende Erdgasproduktion in Europa. Hinzu kommt die kühle Witterung im Jahr 2021. Besonders gravierend wirkte sich jedoch der russische Angriffskrieg gegen die Ukraine aus, der zu unterbliebenen Gaslieferungen aus Russland führte und die Preise für Erdgas zeitweise enorm in die Höhe trieb. Diese Entwicklungen haben direkte Auswirkungen auf die Energiekosten in Gebäuden, da sowohl private Haushalte als auch Unternehmen mit höheren Ausgaben für Heizung und Strom konfrontiert sind. Die steigenden Kosten belasten nicht nur die finanzielle Situation der Verbraucher, sondern können auch zu einer erhöhten Energiearmut führen, wenn Menschen ihre Energierechnungen nicht mehr bezahlen können. <br />Die Nutzung von Gas und Öl als Energieträger in Gebäuden ist aus mehreren Gründen nicht nachhaltig. Öl und Gas sind nicht erneuerbare Ressourcen und tragen erheblich zum Klimawandel bei, da ihre Verbrennung hohe CO2-Emissionen verursacht. Zudem ist die Verfügbarkeit von 'grünem Gas' wie Biogas oder grünem Wasserstoff begrenzt, was bedeutet, dass der derzeit hohe Verbrauch an Gas für die Wärmeerzeugung nicht einfach durch diese nachhaltigeren Alternativen ersetzt werden kann. Die Öl- und Gasindustrie steht daher vor der Herausforderung, Nachhaltigkeitsstrategien zu entwickeln, die über die Vermeidung von Umweltverschmutzung hinausgehen und auch die Sicherheit der Bevölkerung gewährleisten. Langfristig müssen Gas- und Ölheizungen durch klimafreundliche Technologien ersetzt werden, um die Klimaziele zu erreichen und eine nachhaltige Energieversorgung sicherzustellen.",
  },
  {
    icon: faBuilding,
    title: "WPB",
    text: "In Deutschland wurde im Rahmen der Bundesförderung für effiziente Gebäude (BEG) eine neue Kategorie für besonders energieineffiziente Gebäude eingeführt: das 'Worst Performing Building' (WPB). Ein Gebäude fällt unter diese Kategorie, wenn es zu den energetisch schlechtesten 25 % des deutschen Gebäudebestandes gehört oder, falls das Baujahr auf 1957 oder früher fällt, mindestens 75 % der Gebäudestruktur unrenoviert ist. Diese Klassifizierung zielt darauf ab, die energetische Sanierung von Gebäuden, die einen erheblichen Beitrag zum Energieverbrauch und zu den CO2-Emissionen leisten, zu fördern und zu beschleunigen.       Um die Sanierung dieser energetisch ineffizienten Gebäude zu fördern, bietet die KfW attraktive Finanzierungs- und Fördermöglichkeiten. Für die Sanierung von WPBs zu Effizienzhäusern 40, 55 oder 70 EE ('Erneuerbare Energien-Klasse') gibt es einen zusätzlichen Bonus in Höhe von 10 %-Punkten auf den Tilgungszuschuss.<br />Das bedeutet, dass bei einer Sanierung zum Effizienzhaus 40 EE anstelle des regulären 25 %igen Tilgungszuschusses ganze 35 % gewährt werden. Bei einem maximal möglichen Darlehensbetrag von 150.000 Euro ergibt dies einen Tilgungszuschuss von bis zu 52.500 Euro. Diese Förderung gilt sowohl für Wohngebäude als auch für gewerbliche Nichtwohngebäude und soll Anreize schaffen, die energetische Bilanz dieser Gebäude deutlich zu verbessern. Die Renovierung von WPBs ist nicht nur aus ökologischer Sicht sinnvoll, um den Energieverbrauch und die CO2-Emissionen zu reduzieren, sondern auch aus ökonomischer Perspektive, da sie langfristig zu erheblichen Energiekosteneinsparungen führen kann.",
  },
];
const GradientInfo = () => {
  const [selectedOption, setSelectedOption] = useState(options[1]);
  const [showText, setShowText] = useState(false);

  const handleOptionClick = (index) => {
    setShowText(false); // Start fading out
    setTimeout(() => {
      setSelectedOption(options[index]);
    }, 500);
  };

  useEffect(() => {
    setShowText(true);
  }, [selectedOption]);

  return (
    <div className="info-component">
      <div className="options-bar">
        {options.map((option, index) => (
          <div
            key={index}
            className="icon-container"
            onClick={() => handleOptionClick(index)}
            style={{
              borderBottom:
                selectedOption === option
                  ? "5px solid #f7941d"
                  : "5px solid transparent",
              boxShadow:
                selectedOption === option
                  ? "0 1px 1px rgba(255, 102, 0, 0.5)"
                  : "0 0px 0px rgba(255, 102, 0, 0.5)",
            }}
          >
            <FontAwesomeIcon
              icon={option.icon}
              className="option-icon"
              size="2x"
            />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", marginBottom: "50px" }}>
        {selectedOption && (
          <div>
            <div className="selected-title">{selectedOption.title}</div>
            <div
              className="selected-text"
              style={{
                display: "block",
                justifyContent: "space-between",
                margin: "auto",
                textAlign: "left",
                opacity: showText ? 1 : 0,
                color: "white",
              }}
            >
              {selectedOption.text.includes("<br />") ? (
                <div>
                  <div className="left-content">
                    {selectedOption.text.split("<br />")[0]}
                  </div>
                  <div className="right-content">
                    {selectedOption.text.split("<br />")[1]}
                  </div>
                </div>
              ) : (
                <div>{selectedOption.text}</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GradientInfo;
