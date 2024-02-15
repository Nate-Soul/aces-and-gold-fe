import CheckoutLayout from "@/components/sections/CheckoutLayout"
import GenericPageHeader from "@/components/subcomponents/GenericPageHeader"
import MainFooter from "@/components/MainFooter"
import MainHeader from "@/components/MainHeader"


const Checkout = () => {
  return (
    <>
    <MainHeader/>
    <main>
      <CheckoutLayout/>
    </main>
    <MainFooter/>
    </>
  )
}

export default Checkout
