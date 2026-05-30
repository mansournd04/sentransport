function LigneBus({ ligne }) {

  return (
    <div className="ligne-card">

      <div className="numero">
        {ligne.numero}
      </div>

      <div className="infos">

        <h3>{ligne.depart} → {ligne.arrivee}</h3>

        <p>{ligne.arrets} arrêts</p>

      </div>

    </div>
  );
}

export default LigneBus;