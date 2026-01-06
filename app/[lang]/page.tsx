export default function LangHome({ params }: { params: { lang: string } }) {
  return (
    <main style={{ padding: 24 }}>
      <h1>OK: /{params.lang}</h1>
      <p>Language routing works. Next step: layout + navigation.</p>
    </main>
  );
}