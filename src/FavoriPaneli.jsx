function FavoriPaneli({ favoriler, favoriEkleCikar }) {
  return (
    <div className="favori-panel">
      <h3>Favoriler ({favoriler.length})</h3>
      <ul>
        {favoriler.map((kitap) => (
          <li key={kitap.id}>
            {kitap.baslik}{" "}
            <button onClick={() => favoriEkleCikar(kitap)}>Kaldir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriPaneli;
