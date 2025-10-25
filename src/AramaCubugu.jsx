function AramaCubugu({ aramaMetni, setAramaMetni }) {
  return (
    <input
    id="arama"
      type="text"
      placeholder="Başlik veya yazar ara..."
      value={aramaMetni}
      onChange={(e) => setAramaMetni(e.target.value)}
    />
  );
}

export default AramaCubugu;