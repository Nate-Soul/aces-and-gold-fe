import "@/styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
// import client from "@/lib/apolloClient";
// import { ApolloProvider } from "@apollo/client";
import store from "@/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
      // apolloprovider wrapper with client prop equals client
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    )
};