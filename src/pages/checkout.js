import CheckoutLayout from "@/components/CheckoutLayout"
import GenericPageHeader from "@/components/GenericPageHeader"
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
