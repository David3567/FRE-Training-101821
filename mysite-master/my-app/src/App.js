import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import React from 'react'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
				<Routes>
					<Route exact path='/contact' element={<Contact />} />
					<Route exact path='/portfolio' element={<Portfolio />} />
					<Route exact path='/' element={<Home />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	)
}

export default App
