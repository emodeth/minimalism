import { MenuProvider } from "@/contexts/MenuContext";
import Navbar from "@/components/Navbar";
import MenuOverlay from "@/components/MenuOverlay";
import Menu from "@/components/Menu";
import DynamicFooterResponsive from "@/components/DynamicFooterResponsive";
import StaticFooter from "@/components/StaticFooter";
import DynamicFooter from "@/components/DynamicFooter";
import ShopGrid from "@/components/ShopGrid";
import ShopItem from "@/components/ShopItem";
import { shopItems } from "@/utils/shopItem";

function ShopPage() {
  return (
    <MenuProvider>
      <header className="fixed py-5 left-0 right-0 top-0 z-[9999] max-md:px-2">
        <Navbar />
      </header>
      <main>
        <Menu />
        <MenuOverlay />
        <ShopGrid>
          {shopItems.map((shopItem, i) => (
            <ShopItem
              key={i}
              name={shopItem.name}
              brand={shopItem.brand}
              price={shopItem.price}
              image={shopItem.image}
              tags={shopItem.tags}
            />
          ))}
        </ShopGrid>
        <DynamicFooterResponsive />
        <StaticFooter />
        <DynamicFooter />
      </main>
    </MenuProvider>
  );
}

export default ShopPage;
