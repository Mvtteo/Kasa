import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Housing from './pages/Housing'
import Error from './components/Error/Index'
import About from './pages/About'
import Header from './components/Header/Index'
import Index from './components/Data/index'
import Footer from './components/Footer/Index'
import Grab from './components/Data/Import'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/Fiche_Logement" element={<Housing />}></Route>
      <Route path="/index" element={<Index />}></Route>
      <Route path="/apropos" element={<About />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
)
