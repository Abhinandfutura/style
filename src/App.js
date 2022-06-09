import './App.css';
import Navbar1 from './Components/Navbar1';
import styled from 'styled-components'

import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    
    <Container className="App">
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Navbar1/>}  />

    </Routes>
    
    </BrowserRouter>
      
    </Container>
  );
}


const Container=styled.div`
    
    background: #62b262;
    height: 100vh;
`
export default App;
