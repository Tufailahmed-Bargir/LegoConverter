import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
 
  
  Features,
 
  Navbar,
 
  StarsCanvas,
} from "./components";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="relative z-0 bg-dark-100">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
             
          </div>
           
          <div className="relative z-0">
            <Contact />
             <About />
             <Features />
            <StarsCanvas />

          </div>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
