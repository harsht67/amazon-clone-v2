import './App.scss'
import { Footer, Header, Home, ProductPage, Cart, Login } from './features'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
     
      <Router>

        <Routes>

          <Route 
            path='/' 
            element={
              <>  
                <Header/>
                <Home/>
                <Footer/>
              </>
            }
          />

          <Route path='/login' element={<Login/>} />

          <Route 
            path='/product/:id'
            element={
              <>
                <Header/>
                <ProductPage/>
                <Footer/>
              </>
            }
          />

          <Route 
            path='/cart'
            element={
              <>  
                <Header/>
                <Cart/>
                <Footer/>
              </>
            }
          />

        </Routes>
    
      </Router>

    </div>
  )
}

export default App