import React from "react";
import '../styles/globals.css'
import Navbar from "../components/Navbar";
import Sidedrawer from "../components/Sidedrawer";
import Backdrop from "../components/Backdrop";
import { GlobalProvider } from "../context/globalState";
function MyApp({ Component, pageProps, }) {
  console.log(pageProps.data)
  const [open_drawer, setOpenDrawer] = React.useState(false);

  return (
    <div style={{ height: '100%' }}>
      <GlobalProvider>
        <Navbar setOpenDrawer={setOpenDrawer} open_drawer={open_drawer} data={ pageProps.data}/>
      {open_drawer &&
        <>
        <Sidedrawer show={open_drawer}  setOpenDrawer={setOpenDrawer} />
          <Backdrop setOpenDrawer={setOpenDrawer} open_drawer={open_drawer}/>
          </>
      }

        <Component {...pageProps} />
        </GlobalProvider>
    </div>
  )
}

export default MyApp
export async function getStaticProps(context) {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json()
console.log(data)
  if (!data) {
    return {
      notFound:true
    }
  }
  return {
    props:{data}
  }
}