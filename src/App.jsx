import { useState } from "react"
import { useEffect } from "react"
import AramaCubugu from "./AramaCubugu"
import KategoriFiltre from "./KategoriFiltre";
import KitapListe from "./KitapListe";
import FavoriPaneli from "./FavoriPaneli";
import "./App.css";

function App() {
  const kitaplar =[
  {id:1, baslik:"React'e Giris", yazar:"D. Usta", kategori:"Web"},
  {id:2, baslik:"Ileri JavaScript", yazar:"S. kilic", kategori:"CS"},
  {id:3, baslik:"Veri Yapilari", yazar:"A. Demir", kategori:"CS"},
  {id:4, baslik:"Algoritmalar", yazar:"E. Kaya", kategori:"CS"},
  {id:5, baslik:"UI/UX Temelleri", yazar:"N. Akin", kategori:"Tasarim"},
];

  const [aramaMetni, setAramaMetni] = useState(localStorage.getItem("arama") || "");
  const [kategori, setKategori] = useState("Tumu");
  const [favoriler, setFavoriler] = useState(
    JSON.parse(localStorage.getItem("favoriler")) || []
  );

  useEffect(() => {
    localStorage.setItem("arama", aramaMetni);
  }, [aramaMetni]);

  useEffect(() => {
    localStorage.setItem("favoriler", JSON.stringify(favoriler));
  }, [favoriler]);

  const filtrelenmis = kitaplar.filter((kitap) => {
    const arama = kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
                  kitap.yazar.toLowerCase().includes(aramaMetni.toLowerCase());
    const kategoriUygun = kategori === "Tumu" || kitap.kategori === kategori;
    return arama && kategoriUygun;
  });

  const favoriEkleCikar = (kitap) => {
    if (favoriler.find((f) => f.id === kitap.id)) {
      setFavoriler(favoriler.filter((f) => f.id !== kitap.id));
    } else {
      setFavoriler([...favoriler, kitap]);
    }
  };

  return (
    <div className="app">
      <h1>Mini Kitaplik</h1>

      <div className="ust">
        <AramaCubugu aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />
        <KategoriFiltre kategori={kategori} setKategori={setKategori} />
      </div>

      <div className="icerik">
        <KitapListe
          kitaplar={filtrelenmis}
          favoriler={favoriler}
          favoriEkleCikar={favoriEkleCikar}
        />
        <FavoriPaneli favoriler={favoriler} favoriEkleCikar={favoriEkleCikar} />
      </div>
    </div>
  );
}

export default App;