import { Routes, Route } from 'react-router-dom'
import { PageLayout } from './components/PageLayout.jsx'
import { HomePage } from './pages/HomePage'
import { RestaurantsPage } from './pages/Restaurants'
import { HotelsPage } from './pages/Hotels'
import { MagazinePage } from './pages/Magazine'
import { FavoritesPage } from './pages/Favorites'
import { ContactsPage } from './pages/Contacts'
import { NotFoundPage } from './pages/NotFoundPage'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<PageLayout />}>
        <Route index element={<HomePage />} />
        <Route path='restaurants' element={<RestaurantsPage />} />
        <Route path='hotels' element={<HotelsPage />} />
        <Route path='magazine' element={<MagazinePage />} />
        <Route path='favorites' element={<FavoritesPage />} />
        <Route path='contacts' element={<ContactsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default Router
