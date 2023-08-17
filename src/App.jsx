import './App.css'

import Header from './components/Header'
import SectionCarousel from './components/SectionCarousel'
import iconBook from './assets/book-icon.jpg';

function App() {

  return (
    <>
      <Header />
      <div>
        <img src={iconBook} alt="" />
      </div>
      <SectionCarousel/>
      <SectionCarousel/>
      <SectionCarousel/>
    </>
  )
}

export default App
