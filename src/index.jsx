//importations de toutes les différentes pages du site et layouts

import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Housing from './pages/Housing'
import Error from './pages/Error'
import About from './pages/About'
import Header from './components/Header/Index'
import Index from './components/Cards/index'
import Footer from './components/Footer/Index'

//définition de la racine de départ du site
const container = document.getElementById('root')
const root = createRoot(container)

//mise en place des différents chemins disponibles sur le site pour accéder
//aux différentes pages

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
