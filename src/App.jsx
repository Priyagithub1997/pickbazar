
import './App.css'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Checkoutpage from './Checkoutpage';



function App() {


  return (
  
<>
<Header />
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkoutpage" element={<Checkoutpage />}></Route>

      
      </Routes>
     </BrowserRouter>




</>
  )
}

export default App
