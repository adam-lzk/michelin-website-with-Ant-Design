import { Routes, Route } from 'react-router-dom'
import { PageLayout } from './components/PageLayout.jsx'
import { HomePage } from './pages/HomePage'
import { Restaurants } from './pages/Restaurants'
import { Delivery } from './pages/Delivery'
import { JobOpenings } from './pages/JobOpenings'
import { Payment } from './pages/Payment'
import { Contacts } from './pages/Contacts'
import { NotFoundPage } from './pages/NotFoundPage'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<PageLayout />}>
        <Route index element={<HomePage />} />
        <Route path='restaurants' element={<Restaurants />} />
        <Route path='delivery' element={<Delivery />} />
        <Route path='job-openings' element={<JobOpenings />} />
        <Route path='payment' element={<Payment />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default Router
