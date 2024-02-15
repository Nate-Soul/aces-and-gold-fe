import CartGrid from "@/components/sections/CartGrid"
import GenericPageHeader from "@/components/subcomponents/GenericPageHeader"
import MainFooter from "@/components/MainFooter"
import MainHeader from "@/components/MainHeader"
import { generateCrumbs } from "@/libs/breadCrumbs"


const CartPage = () => {

    const crumbs = generateCrumbs("/cart");

  return (
    <>
      <MainHeader/>
      <main>
        <GenericPageHeader title="Your Cart" crumbs={crumbs}/>
        <CartGrid/>
      </main>
      <MainFooter/>
    </>
  )
}

export default CartPage
