
import ComponentCounter from "./components/MiPrimerComponent/ComponentCounter"
import MiPrimerComponent from "./components/MiPrimerComponent/MiPrimerComponent"
import ComponentUseEffect from "./components/MiPrimerComponent/ComponentUseEffect";
import FormComponent from "./components/MiPrimerComponent/FormComponent";
import AppProduct from "../src/components/AppProduct/ListProduct/AppProduct";
const App = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', gap:'2vh'}}> 
    {/*<MiPrimerComponent text={"Texto desde propiedades"} color="red" fontSize={5}/>
    <ComponentCounter />
    <hr />
    <ComponentUseEffect />
    <hr />
    <FormComponent /> */}
    <AppProduct/>
    </div>
  )
}

export default App
