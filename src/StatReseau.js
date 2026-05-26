function StatReseau({ lignes }) {
  const nombreLignes = lignes.length;

  const totalArrets = lignes.reduce(
    (total, ligne) => total + ligne.arrets,
    0
  );

  const ligneMax = lignes.reduce(
    (max, ligne) =>
      ligne.arrets > max.arrets ? ligne : max,
    lignes[0]
  );

  return (
    <div className="stat-reseau">
      <h3>Statistiques</h3>
      <p>Nombre de lignes : {nombreLignes}</p>
      <p>Total des arrêts : {totalArrets}</p>
      <p>
        Ligne max : {ligneMax.numero} ({ligneMax.arrets} arrêts)
      </p>
    </div>
  );
}

export default StatReseau;