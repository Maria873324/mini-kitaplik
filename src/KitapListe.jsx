import KitapKarti from "./KitapKarti";

function KitapListe({ kitaplar, favoriler, favoriEkleCikar }) {
  return (
    <div className="kitap-liste">
      {kitaplar.map((kitap) => (
        <KitapKarti
          key={kitap.id}
          kitap={kitap}
          favorideMi={favoriler.some((f) => f.id === kitap.id)}
          favoriEkleCikar={favoriEkleCikar}
        />
      ))}
    </div>
  );
}

export default KitapListe;
