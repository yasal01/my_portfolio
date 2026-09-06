import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Project } from './pages/Project'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
