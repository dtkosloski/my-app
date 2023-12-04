import {Routes , Route } from "react-router-dom" 
import Home from "./components/Home/Home" 
import About from "./components/About/About" 
function App(){ 
   return ( 
      <div className="App"> 
        <Routes> 
            <Route path="/" component={<Home/> } /> 
            <Route path="/about" component={<About/> } /> 
       </Routes> 
    </div> 
)} 
export default App