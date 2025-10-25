function KategoriFiltre({ kategori, setKategori }) {
  return (
    <select value={kategori} onChange={(e) => setKategori(e.target.value)}>
      <option>Tumu</option>
      <option>Web</option>
      <option>CS</option>
      <option>Tasarim</option>
    </select>
  );
}

export default KategoriFiltre;
