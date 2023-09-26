import { Menu } from 'antd'
import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout
import './App.css'

function App() {
  return (
  <Layout>

    <Sider className='sider'>
      <Menu
        items={[
          { key: "1", label: "Home page" },
          { key: "2", label: "Restaurants" },
          { key: "3", label: "Delivery" },
          { key: "4", label: "Job openings" },
          { key: "5", label: "Payment" },
          { key: "6", label: "Contacts" },
        ]}
      />
    </Sider>
    <Layout>
      <Header className='header'>Khinkalnya</Header>
      <Content className='content'>
        <img
          src="../pictures/pict1.jpg"
          alt="Хинкали"
        />
        <h2>О нас</h2>
        <p>Khinkalnya is a family, here they cherish the recipes of their favorite dishes and cook only
        the most delicious: khinkali with fragrant broth and juicy filling, khachapuri boats, warming
        kharcho and tender chikhirtmu, spicy lula kebab and Georgian pkhali. And the most homely Napoleon!</p>
        <p>In Khinkalna, as at home, you can celebrate the holiday with sparkling Badagoni and enjoy the usual
        in the afternoon, under a glass of homemade Kakhetian wine. Gather the whole family at a large table
        or appoint a meeting with a dear person, and just run in for a delicious lunch!</p>
        <img
          src="../pictures/pict2.jpg"
          alt="Хинкали"
        />
        <p>Everyone is comfortable in Khinkalna: we have a children&apos;s menu and comfortable chairs,
        as well as entertainment for the little guests, our genatsvalikov!</p>
        <p>Dear friends, we invite you to the family of Khinkalnya restaurants in your city — Minsk, Brest,
        Grodno, Mozyr, Soligorsk and Pinsk! Choose your favorite dishes in our menu, and we will serve them
        with we will prepare it with love, pack it well and bring it back. Hot, juicy, fragrant!</p>
      </Content>
      <Footer className='footer'>
        <p>LLC &quot;Investment and quality restaurant&quot;, UNP 193475654, Address: Republic of Belarus,
        25b Filimonov str., Minsk, 220114, <br /> room 302-2, Certificate of state registration
        Registration No. 193475654 dated 07.10.2020 issued by the Minsk City Executive Committee, <br />
        Working hours: 12.00-23.00. tel./fax +375-17-389-70-40, e-mail: hinkalnainvesticii@gmail.com</p>
      </Footer>
    </Layout>
  </Layout>
  )
}

export default App
