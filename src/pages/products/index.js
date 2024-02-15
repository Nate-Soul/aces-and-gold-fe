import GenericPageHeader from "@/components/subcomponents/GenericPageHeader";
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";
import ShopPage from "@/components/sections/ShopPage";
import { generateCrumbs } from "@/libs/breadCrumbs";

const Shop = () => {

  const crumbs = generateCrumbs("/products");

  return (
    <>
    <MainHeader/>
    <main>
      <GenericPageHeader title="Explore Our Shop" crumbs={crumbs}/>
      <ShopPage/>
    </main>
    <MainFooter/>
    </>
  )
}

export default Shop
