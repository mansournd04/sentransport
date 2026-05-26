import LigneBus from "./LigneBus";

function ListeLignes({ lignes }) {

  return (
    <div>

      {lignes.map((ligne) => (
        <LigneBus
          key={ligne.id}
          ligne={ligne}
        />
      ))}

    </div>
  );
}

export default ListeLignes;