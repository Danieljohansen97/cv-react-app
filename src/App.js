// React and Router
import { Routes, Route } from "react-router-dom"
// Style
import "./App.css"
import Experience from "./pages/Experience"
// Bootstrap
// Pages
import Layout from "./pages/Layout"
import NotFound from "./pages/NotFound"
import FrontPage from "./pages/FrontPage"
import Education from "./pages/Education"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<FrontPage />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
