import './App.scss'
import { Footer, Header, Home } from './features'

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

        </Routes>
    
      </Router>

    </div>
  )
}

export default App