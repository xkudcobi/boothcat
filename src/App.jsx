import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Start from './pages/Start.jsx'
import Upload from './pages/Upload.jsx'
import Shoot from './pages/Shoot.jsx'
import Frames from './pages/Frames.jsx'
import Print from './pages/Print.jsx'
import { About, Contact, Faq, Features, NotFound, Privacy } from './pages/Info.jsx'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="start" element={<Start />} />
          <Route path="upload" element={<Upload />} />
          <Route path="shoot" element={<Shoot />} />
          <Route path="frames" element={<Frames />} />
          <Route path="print" element={<Print />} />
          <Route path="features" element={<Features />} />
          <Route path="faq" element={<Faq />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
