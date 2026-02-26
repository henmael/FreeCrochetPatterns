import './App.css'
import { CrochetGallery } from './CrochetGallery/crochetGallery'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { loadCrochetData } from './helper/loadCrochetPatterns'
import { CrochetContext } from './helper/CrochetContext'
import { CrochetPattern } from './CrochetGallery/crochetPattern'
import InstagramIcon from '@mui/icons-material/Instagram';
import { Home } from './Home/home'
import { Tab, Tabs } from '@mui/material'
function App() {

  const data = loadCrochetData()

  const date = new Date();

  const location = useLocation();

  return (
    <div className='flex flex-col h-screen justify-between'>
        <div className='flex mt-5 text-center'>
            <NavLink to="/"><img title='Home' className='w-15 h-15 sm:w-25 sm:h-25 flex-1 mt-6 hover:scale-125 transform transition hover:opacity-65' src='cat.png' alt=""/></NavLink>
            <h1 className='text-2xl sm:text-8xl flex-1 text-center'>
                  Free Crochet Patterns
            </h1>
        </div>
        <Tabs value={location.pathname} sx={{position: 'absolute', marginTop: 18, marginLeft: 1, ".Mui-selected": {color: `white`}}} >
          <Tab sx={{color: 'white', fontFamily: "Pixelify Sans", fontWeight: 'bold'}} label='Home' value='/' component={NavLink} to='/'/>
          <Tab sx={{color: 'white', fontFamily: "Pixelify Sans", fontWeight: 'bold'}} label='Gallery' value='/gallery' component={NavLink} to='/gallery' />
        </Tabs>
        <CrochetContext.Provider value={data}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/gallery" element={<CrochetGallery/>}/>
            <Route path="/pattern/:id" element={<CrochetPattern/>}/>
          </Routes>
          </CrochetContext.Provider>
      <footer className='text-center content-bottom text-xl m-4'>
        <a href='https://www.instagram.com/henriette_crochet/' target='_blank' rel="noopener noreferrer"><InstagramIcon style={{fontSize: '2.5em'}}/></a>
        <p>© {date.getFullYear()}; Designed by henriette_crochet</p>
      </footer>
    </div>
  )
}

export default App
