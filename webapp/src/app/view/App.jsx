import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/viva-dark/theme.css";
import "primereact/resources/primereact.min.css";
import Main from './main/Main';
import "./App.css"

export default function App() {
  return (
    <PrimeReactProvider>
      <Main/>
    </PrimeReactProvider>
  )
}
