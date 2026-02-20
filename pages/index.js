import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="h-screen flex items-center justify-center">
        <h2 className="text-5xl opacity-30">Scroll Section</h2>
      </section>

      <section className="h-screen flex items-center justify-center">
        <h2 className="text-5xl opacity-30">More Content</h2>
      </section>
    </>
  );
}