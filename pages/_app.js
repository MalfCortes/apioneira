import '../styles/globals.css'
import Cabeca from '../componentes/cabeca.js'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Cabeca style={{
      position: "static",
      top:"0"
    }}/>
    <Component {...pageProps} />
    </>
    )
}

export default MyApp
