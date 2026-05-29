import { useState, useEffect } from 'react';
import Header from "./Header";
import Recherche from "./Recherche";
import ListeLignes from "./ListeLignes";
import Footer from "./Footer";

function App() {

  const [recherche, setRecherche] = useState("");
  const [nbRecherches, setNbRecherches] = useState(0);
  const [lignes, setLignes] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/lignes")
      .then(response => {
        if (!response.ok) {
          throw new Error("Erreur serveur : " + response.status);
        }
        return response.json();
      })
      .then(data => {
        setLignes(data);
        setChargement(false);
      })
      .catch(error => {
        setErreur(error.message);
        setChargement(false);
      });
  }, []);

  const lignesFiltrees = lignes.filter((ligne) =>
    ligne.depart.toLowerCase().includes(recherche.toLowerCase()) ||
    ligne.arrivee.toLowerCase().includes(recherche.toLowerCase())
  );

  if (chargement) {
    return (
      <div>
        <Header />
        <p>Chargement des lignes...</p>
      </div>
    );
  }

  if (erreur) {
    return (
      <div>
        <Header />
        <p>Impossible de charger les lignes.</p>
        <p>{erreur}</p>
        <p>Vérifiez que le serveur Flask est lancé (python api/app.py).</p>
      </div>
    );
  }