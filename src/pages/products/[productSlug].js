import GenericPageHeader from "@/components/GenericPageHeader";
import MainFooter from "@/components/MainFooter";
import MainHeader from "@/components/MainHeader";
import SingleProduct from "@/components/SingleProduct";
import { generateCrumbs } from "@/libs/breadCrumbs";
import { useRouter } from "next/router";

const Product = () => {

  const router = useRouter();

  const { productSlug } = router.query;
   
  const crumbs = generateCrumbs(`/products/${productSlug}`);

  return (
    <>
    <MainHeader/>
    <main>
      <GenericPageHeader title={productSlug} crumbs={crumbs}/>
      <SingleProduct/>
    </main>
    <MainFooter/>
    </>
  )
}

export default Product
