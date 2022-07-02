import './App.scss'
import { Footer, Header, Home, ProductPage } from './features'

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

        </Routes>
    
      </Router>

    </div>
  )
}

export default App