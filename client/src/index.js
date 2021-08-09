import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, CSSReset, ColorModeScript} from "@chakra-ui/react";
import { myNewTheme } from "./styles/theme.js"
import  boom  from "./styles/config.js"

//  useEffect(() => {
//     setMounted(true);
//   }, []);

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={myNewTheme}>
      <CSSReset />
      <ColorModeScript initialColorMode={boom.config.initialColorMode} />
      
      <App />
    
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
