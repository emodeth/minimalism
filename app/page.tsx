import InfoLinkGrid from "@/components/InfoLinkGrid";
import InfoLinkItem from "@/components/InfoLinkItem";
import Navbar from "@/components/Navbar";

function Home() {
  return (
    <>
      <header className="fixed py-5 px-2 left-0 right-0 top-0">
        <Navbar />
      </header>
      <main>
        <InfoLinkGrid>
          <InfoLinkItem
            description="What is minimalistm?"
            path="what-is-minimalism"
          />
          <InfoLinkItem
            description="What are the benefits?"
            path="what-are-the-benefits"
          />
          <InfoLinkItem
            description="Who is minimalism for?"
            path="who-is-minimalism-for"
          />
        </InfoLinkGrid>
      </main>
    </>
  );
}

export default Home;
