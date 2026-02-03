import './App.css'
import { CrochetGallery } from './CrochetGallery/crochetGallery'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { loadCrochetData } from './helper/loadCrochetPatterns'
import { CrochetContext } from './helper/CrochetContext'
import { CrochetPattern } from './CrochetGallery/crochetPattern'

function App() {

  return (
    <BrowserRouter>
    <div className='flex'>
        <NavLink to="/"><img title='Home' className='w-25 h-25 flex-1 mt-6 hover:scale-125 transform transition hover:opacity-65' src='cat.png' alt=""/></NavLink>
        <h1 className='text-8xl flex-1 text-center'>
              Free Crochet Patterns
        </h1>
    </div>
      <CrochetContext.Provider value={loadCrochetData()}>
      <Routes>
        <Route path="/" element={<CrochetGallery/>}/>
        <Route path="/pattern/:id" element={<CrochetPattern/>}/>
      </Routes>
      </CrochetContext.Provider>
    </BrowserRouter>
  )
}

export default App
