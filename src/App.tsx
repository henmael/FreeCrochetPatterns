import './App.css'
import { CrochetGallery } from './CrochetGallery/crochetGallery'
import { HashRouter, NavLink, Route, Routes } from 'react-router-dom'
import { loadCrochetData } from './helper/loadCrochetPatterns'
import { CrochetContext } from './helper/CrochetContext'
import { CrochetPattern } from './CrochetGallery/crochetPattern'
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from 'react'

function App() {

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const data = loadCrochetData();

  const indexOfLastItem = currentPage * itemsPerPage;

  const hasMore = indexOfLastItem < data.length

  return (
    <div className='flex flex-col h-screen justify-between'>
      <HashRouter>
        <div className='flex mt-5 text-center'>
            <NavLink to="/"><img title='Home' className='w-15 h-15 sm:w-25 sm:h-25 flex-1 mt-6 hover:scale-125 transform transition hover:opacity-65' src='cat.png' alt=""/></NavLink>
            <h1 className='text-2xl sm:text-8xl flex-1 text-center'>
                  Free Crochet Patterns
            </h1>
        </div>
        <CrochetContext.Provider value={data.slice(0, indexOfLastItem)}>
          <Routes>
            <Route path="/" element={<CrochetGallery/>}/>
            <Route path="/pattern/:id" element={<CrochetPattern/>}/>
          </Routes>
          </CrochetContext.Provider>
          <div className={`text-center text-bold text-lg`}>
            <button className={`border-3 border-solid p-2 rounded-md transform transition hover:scale-110 disabled:text-gray disabled:opacity-40 disabled:transition disabled:transform disabled:hover:scale-100`} onClick={() => setCurrentPage(currentPage+1)} disabled={!hasMore}>Load More</button>
          </div>
      </HashRouter>
      <footer className='text-center content-bottom text-xl m-4'>
        <a href='https://www.instagram.com/henriette_crochet/' target='_blank' rel="noopener noreferrer"><InstagramIcon style={{fontSize: '2.5em'}}/></a>
        <p>© 2024; Designed by henriette_crochet</p>
      </footer>
    </div>
  )
}

export default App
