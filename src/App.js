import { useState } from "react";
import Header from "./Header";
import Recherche from "./Recherche";
import ListeLignes from "./ListeLignes";
import Footer from "./Footer";

function App() {

  const [recherche, setRecherche] = useState("");
  const [nbRecherches, setNbRecherches] = useState(0);

  const lignes = [
    {
      id: 1,
      numero: "1",
      trajet: "Parcelles Assainies → Plateau",
      arrets: 14,
    },
    {
      id: 2,
      numero: "7",
      trajet: "Guédiawaye → Place Obélisque",
      arrets: 18,
    },
    {
      id: 3,
      numero: "15",
      trajet: "Pikine → Médina",
      arrets: 12,
    },
  ];

  const lignesFiltrees = lignes.filter((ligne) =>
    ligne.trajet.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <div>

      <Header />

      <p>
        Vous avez effectué {nbRecherches} recherche(s)
      </p>

      <Recherche
        recherche={recherche}
        setRecherche={setRecherche}
        setNbRecherches={setNbRecherches}
        nbRecherches={nbRecherches}
      />

      {lignesFiltrees.length === 0 && (
        <p>Aucune ligne trouvée</p>
      )}

      <ListeLignes lignes={lignesFiltrees} />

      <Footer />

    </div>
  );
}

export default App;