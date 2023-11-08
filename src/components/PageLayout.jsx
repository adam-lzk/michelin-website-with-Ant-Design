import { Layout, Menu } from 'antd'
import { Link, Outlet } from 'react-router-dom'
import { StyledSider, StyledHeader } from '../atoms.js'
import '../App.css'

export const PageLayout = () => {
  return (
  <Layout>
    <StyledHeader>Michelin</StyledHeader>
    <Layout>
      <StyledSider>
        <Menu
          className='menu'
          items={[
            { key: "1", label: <Link to='/'>Home page</Link> },
            { key: "2", label: <Link to='/restaurants'>Restaurants</Link> },
            { key: "3", label: <Link to='/hotels'>Hotels</Link> },
            { key: "4", label: <Link to='/magazine'>Magazine</Link> },
            { key: "5", label: <Link to='/favorites'>Favorites</Link> },
            { key: "6", label: <Link to='/contacts'>Contacts</Link> },
          ]}
        />
      </StyledSider>

      <Outlet />

    </Layout>
  </Layout>
  )
}
