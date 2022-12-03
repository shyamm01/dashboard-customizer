import { CssBaseline, ThemeProvider} from '@mui/material';


import { ColorModeContext, useMode} from './components/Dashboards/theme';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar  from "./components/Navbar";
import Login from './components/loginSignup/Login';
import Register from './components/loginSignup/Signup';
import Dashboard1 from './components/Dashboards/DashBoard1/Dashboard1';
import './components/bootstrap/bootstrap.css'
import Customizer from './components/Customizer';


function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <BrowserRouter>
    
    <Navbar/>
    
    
    <Routes>
      <Route element={<Login />} path="login" />;
      <Route element={<Register/>} path='register'/>;
      <Route element={<Dashboard1/>} path='dashboards'/>;
      <Route element={<Customizer/>} path='customizer'/>;
      
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </ColorModeContext.Provider>
    
  );
}

export default App;
