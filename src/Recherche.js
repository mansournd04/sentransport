function Recherche({
  recherche,
  setRecherche,
  setNbRecherches,
  nbRecherches
}) {

  return (
    <div>

      <input
        type="text"
        placeholder="Rechercher une ligne"
        value={recherche}
        onChange={(e) => {
          setRecherche(e.target.value);
          setNbRecherches(nbRecherches + 1);
        }}
      />

      <button onClick={() => setRecherche("")}>
        Effacer
      </button>

    </div>
  );
}

export default Recherche;