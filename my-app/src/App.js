
import './App.css';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          REACT LOGIN 
        </p>
        
      </header>
      <body className="App-body">
      <div id = "datos">
        <TextField
          required
          id="correo"
          defaultValue="Correo"
        />
        <TextField
          required
          id="contraseña"
          defaultValue="Contraseña"
        />
      </div>
        <Button variant="contained">Iniciar Sesion</Button>
      </body>
    </div>
  );
}

export default App;
