import { Layout, Space } from 'antd'
const { Header, Footer, Sider, Content } = Layout

const headerStyle = {
  fontFamily: 'Georgia',
  textAlign: 'center',
  fontSize: '30px',
  color: '#fff',
  height: 120,
  lineHeight: '120px',
  paddingInline: 50,
  backgroundColor: '#af2127',
}

const contentStyle = {
  fontFamily: 'sans-serif',
  fontSize: 16,
  minHeight: 120,
  lineHeight: '35px',
  color: '#260000',
  backgroundColor: '#fcf5f5',
  paddingBottom: 5,
}

const siderStyle = {
  textAlign: 'center',
  lineHeight: '90px',
  color: '#000',
  backgroundColor: '#fff0f0',
  paddingTop: 20,
}

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#af2127',
}

const pStyle = {
  marginRight: 40,
  marginLeft: 40,
  marginTop: 25,
  marginBottom: 25,
}

const h2Style = {
  textAlign: 'center',
  marginTop: 25,
}

const buttonStyle = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  padding:10,
  paddingRight:20,
  paddingLeft:20,
  margin: 20,
  border: 0,
  borderRadius: '25px',
  color: '#fff',
  backgroundColor: '#af2127',
}

const imgStyle = {
  width: '100%',
  padding: 0,
  margin:0,
}

const citiesStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  height: '60px',
  paddingRight: 225,
  paddingLeft: 225,
  alignItems: 'center',
  fontSize: 16,
}

function App() {
  return (
  <Space
    direction="vertical"
    style={{
      width: '100%',
      margin: 0

    }}
    size={[0, 48]}
  >
    <Layout>
      <Sider style={siderStyle}>
        <button style={buttonStyle}>Главная страница</button>
        <button style={buttonStyle}>Рестораны</button>
        <button style={buttonStyle}>Заказать доставку</button>
        <button style={buttonStyle}>Вакансии</button>
        <button style={buttonStyle}>Оплата</button>
        <button style={buttonStyle}>Контакты</button>
      </Sider>
      <Layout>
        <Header style={headerStyle}>Хинкальня</Header>
        <Content style={contentStyle}>
        <img
          src="../pictures/pict1.jpg"
          alt="Хинкали"
          style={imgStyle}
        />
          <h2 style={h2Style}>О нас</h2>
          <p style={pStyle}>Хинкальня — это семья, здесь берегут рецепты любимых блюд и готовят только самое вкусное:
          хинкали с ароматным бульоном и сочной начинкой, лодочки хачапури, согревающий харчо и нежную
          чихиртму, пряный люля-кебаб и грузинские пхали. А еще самый домашний Наполеон!</p>
          <p style={pStyle}>В Хинкальне, как дома, можно отметить праздник игристым Бедагони и насладиться обычным
          днем под бокал домашнего кахетинского вина. Собрать всю семью за большим столом или назначить
          встречу с дорогим человеком, да и просто забежать на вкусный обед!</p>
          <img
            src="../pictures/pict2.jpg"
            alt="Хинкали"
            style={imgStyle}
          />
          <p style={pStyle}>В Хинкальне уютно каждому: у нас есть детское меню и удобные стульчики, а еще развлечения
          для маленьких гостей,  наших генацваликов!</p>
          <p style={pStyle}>Дорогие наши, приглашаем вас в семью ресторанов Хинкальня в вашем городе — Минске, Бресте,
          Гродно, Мозыре, Солигорске и Пинске! Выбирайте в нашем меню свои любимые блюда, а мы их с
          любовью приготовим, хорошенько упакуем и привезем. Горячими, сочными, ароматными!</p>
        </Content>
        <Footer style={footerStyle}>
          <div style={citiesStyle}>
            <p>Минск</p>
            <p>Брест</p>
            <p>Мозырь</p>
            <p>Гродно</p>
            <p>Солигорск</p>
            <p>Пинск</p>
          </div>
          <p>ООО «Инвестиции и качество ресторан», УНП 193475654, Адрес: Республика Беларусь,
          220114 г. Минск, ул. Филимонова, д. 25б, <br /> пом. 302-2, Свидетельство о государственной
          регистрации №193475654 от 07.10.2020 выдано Минским горисполкомом, <br /> Режим работы: 12.00-23.00.
          тел./факс +375-17-389-70-40, e-mail: hinkalnainvesticii@gmail.com</p>
        </Footer>
      </Layout>
    </Layout>
  </Space>
  )
}

export default App
