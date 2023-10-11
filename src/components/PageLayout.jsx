import { Layout, Menu } from 'antd'
import { Link, Outlet } from 'react-router-dom'
import { StyledSider, StyledHeader } from '../atoms.js'
import '../App.css'

function PageLayout() {
  return (
  <Layout>
    <StyledHeader>Khinkalnya</StyledHeader>
    <Layout>
      <StyledSider>
        <Menu
          className='menu'
          items={[
            { key: "1", label: <Link to='/'>Home page</Link> },
            { key: "2", label: <Link to='/restaurants'>Restaurants</Link> },
            { key: "3", label: <Link to='/delivery'>Delivery</Link> },
            { key: "4", label: <Link to='/job-openings'>Job openings</Link> },
            { key: "5", label: <Link to='/payment'>Payment</Link> },
            { key: "6", label: <Link to='/contacts'>Contacts</Link> },
          ]}
        />
      </StyledSider>

      <Outlet />

    </Layout>
  </Layout>
  )
}

export { PageLayout }
