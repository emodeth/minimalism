import DynamicFooter from "@/components/DynamicFooter";
import DynamicFooterResponsive from "@/components/DynamicFooterResponsive";
import InfoLinkGrid from "@/components/InfoLinkGrid";
import InfoLinkItem from "@/components/InfoLinkItem";
import MainGrid from "@/components/MainGrid";
import MainItem from "@/components/MainItem";
import Menu from "@/components/Menu";
import MenuOverlay from "@/components/MenuOverlay";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import StaticFooter from "@/components/StaticFooter";
import { MenuProvider } from "@/contexts/MenuContext";

import { mainItems } from "@/utils/mainItems";

function Home() {
  return (
    <MenuProvider>
      <header className="fixed py-5 left-0 right-0 top-0 z-[9999] max-md:px-2">
        <Navbar />
      </header>
      <main>
        <Menu />
        <MenuOverlay />
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
        <MainGrid>
          {mainItems.map((mainItem, i) => (
            <MainItem
              key={i}
              name={mainItem.name}
              description={mainItem.description}
              image={mainItem.image}
              path={mainItem.path}
            />
          ))}
        </MainGrid>
        <Newsletter />
        <DynamicFooterResponsive />
        <StaticFooter />
        <DynamicFooter />
      </main>
    </MenuProvider>
  );
}

export default Home;
