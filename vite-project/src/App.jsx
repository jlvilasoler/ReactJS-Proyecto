import Header from "./components/Header/Header" 
import Footer from "./components/Footer/Footer" 
import Intro from "./components/Intro/Intro" 
import ItemListContainer from "./components/ItemListContainer/ItemListContainer" 
import "./App.css" 



function App() {

  return (

      <div>
        <Header/>
        <Intro mensaje="No te muevas de tu casa, elegi los productos y te los llevamos... "/>
        <ItemListContainer/>

        <Footer/>
      </div>

  )
}

export default App
