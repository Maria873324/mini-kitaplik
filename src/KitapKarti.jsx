function KitapKarti({ kitap, favorideMi, favoriEkleCikar }) {
 return (
    <div className="kitap-karti">
      <h3>{kitap.baslik}</h3>
      <p>{kitap.yazar} - {kitap.kategori}</p>
      <button
        className={favorideMi ? "favori-btn aktif" : "favori-btn"}
        onClick={() => favoriEkleCikar(kitap)}
      >
        {favorideMi ? "★ Favoride" : "☆ Favori Ekle"}
      </button>
    </div>
  );
}

export default KitapKarti;
