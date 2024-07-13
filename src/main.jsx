import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navigation from './nav.jsx'
import Hero from './hero.jsx'
import Featured from './featured.jsx'
import Appstore from './appstore.jsx'
import Testimonials from './Testimonials.jsx'
import Analytics from './analytics.jsx'
import Contact from './contact.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navigation />
    <Hero />
    <Featured />
    <Analytics />
    <Appstore />
    <Testimonials />
    <Contact />
    
  </React.StrictMode>,
)
