import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/viva-dark/theme.css";
import "primereact/resources/primereact.min.css";
import "./App.css"

export default function App() {
  return (
    <PrimeReactProvider>
		<div className='flex justify-content-center align-items-center h-screen'>
			<h1> Ops... Parece que você não pode acessar essa página</h1>
		</div>
    </PrimeReactProvider>
  )
}
