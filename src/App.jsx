import { Layout, Space } from 'antd'
const { Header, Footer, Sider, Content } = Layout

const headerStyle = {
  textAlign: 'center',
  fontSize: '30px',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
}

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '80px',
  color: '#fff',
  backgroundColor: '#108ee9',
}

const siderStyle = {
  textAlign: 'center',
  lineHeight: '80px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
}

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
}

function App() {
  return (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    <Layout>
      <Sider style={siderStyle}>
        <button>Главная страница</button>
        <br />
        <button>Рестораны</button>
        <br />
        <button>Заказать доставку</button>
        <br />
        <button>Вакансии</button>
        <br />
        <button>Оплата</button>
        <br />
        <button>Контакты</button>
      </Sider>
      <Layout>
        <Header style={headerStyle}>Хинкальня</Header>
        <Content style={contentStyle}>
          <h2>О нас</h2>
          <p>Хинкальня — это семья, здесь берегут рецепты любимых блюд и готовят только самое вкусное:
          хинкали с ароматным бульоном и сочной начинкой, лодочки хачапури, согревающий харчо и нежную
          чихиртму, пряный люля-кебаб и грузинские пхали. А еще самый домашний Наполеон!</p>
          <p>В Хинкальне, как дома, можно отметить праздник игристым Бедагони и насладиться обычным
          днем под бокал домашнего кахетинского вина. Собрать всю семью за большим столом или назначить
          встречу с дорогим человеком, да и просто забежать на вкусный обед!</p>
          <p>В Хинкальне уютно каждому: у нас есть детское меню и удобные стульчики, а еще развлечения
          для маленьких гостей,  наших генацваликов!</p>
          <p>Дорогие наши, приглашаем вас в семью ресторанов Хинкальня в вашем городе — Минске, Бресте,
          Гродно, Мозыре, Солигорске и Пинске! Выбирайте в нашем меню свои любимые блюда, а мы их с
          любовью приготовим, хорошенько упакуем и привезем. Горячими, сочными, ароматными!</p>
        </Content>
        <Footer style={footerStyle}>
          <p>Минск Брест Мозырь Гродно Солигорск Пинск</p>
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
