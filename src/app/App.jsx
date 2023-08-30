import "primereact/resources/themes/viva-dark/theme.css";
import "primereact/resources/primereact.min.css";
import "./App.css"
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter } from  'react-router-dom'
import { isLogged } from './authentication/Session'
import Main from "./view/main/Main";
import Login from "./authentication/Login";
export default function App() {
  return (
    <PrimeReactProvider>
        <BrowserRouter>
        { isLogged() ? <Main/> : <div className="Login"><Login/></div>}
        </BrowserRouter>
     </PrimeReactProvider>
  )
}