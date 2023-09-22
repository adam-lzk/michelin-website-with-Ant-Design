import styled from '@emotion/styled'
import { Layout, Space } from 'antd'
const { Header, Footer, Sider, Content } = Layout

const StyledSpace = styled.Header`
  width: 100%;
  margin: 0;
`

const StyledHeader = styled.Header`
  font-family: Georgia;
  text-align: center;
  font-size: 30px;
  color: #fff;
  height: 120;
  line-height: 120px;
  padding-inline: 50;
  background-color: #af2127;
`

const StyledContent = styled.Content`
  font-family: sans-serif;
  font-size: 16;
  min-height: 120;
  line-height: 35px;
  color: #260000;
  background-color: #fcf5f5;
  padding-bottom: 5;
`

const StyledSider = styled.Sider`
  text-align: center;
  line-height: 90px;
  color: #000;
  background-color: #fff0f0;
  padding-top: 20;
`

const StyledFooter = styled.Footer`
  text-align: center;
  color: #fff;
  background-color: #af2127;
`

const P = styled.p`
  margin-right: 40;
  margin-left: 40;
  margin-top: 25;
  margin-bottom: 25;
`

const H2 = styled.h2`
  text-align: center;
  margin-top: 25;
`

const Button = styled.button`
  font-family: sans-serif;
  text-align: center;
  padding: 10;
  padding-right: 20;
  padding-left: 20;
  margin: 20;
  border: 0;
  border-radius: 25px;
  color: #fff;
  background-color: #af2127;
`

const Img = styled.img`
  width: 100%;
  padding: 0;
  margin:0;
`

const CitiesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 60px;
  padding-right: 225;
  padding-left: 225;
  align-items: center;
  font-size: 16;
`

function App() {
  return (
  <StyledSpace
    direction="vertical"
    size={[0, 48]}
  >
    <Layout>
      <StyledSider>
        <Button>Главная страница</Button>
        <Button>Рестораны</Button>
        <Button>Заказать доставку</Button>
        <Button>Вакансии</Button>
        <Button>Оплата</Button>
        <Button>Контакты</Button>
      </StyledSider>
      <Layout>
        <StyledHeader>Хинкальня</StyledHeader>
        <StyledContent>
        <Img
          src="../pictures/pict1.jpg"
          alt="Хинкали"
        />
          <H2>О нас</H2>
          <P>Хинкальня — это семья, здесь берегут рецепты любимых блюд и готовят только самое вкусное:
          хинкали с ароматным бульоном и сочной начинкой, лодочки хачапури, согревающий харчо и нежную
          чихиртму, пряный люля-кебаб и грузинские пхали. А еще самый домашний Наполеон!</P>
          <P>В Хинкальне, как дома, можно отметить праздник игристым Бедагони и насладиться обычным
          днем под бокал домашнего кахетинского вина. Собрать всю семью за большим столом или назначить
          встречу с дорогим человеком, да и просто забежать на вкусный обед!</P>
          <Img
            src="../pictures/pict2.jpg"
            alt="Хинкали"
          />
          <P>В Хинкальне уютно каждому: у нас есть детское меню и удобные стульчики, а еще развлечения
          для маленьких гостей,  наших генацваликов!</P>
          <P>Дорогие наши, приглашаем вас в семью ресторанов Хинкальня в вашем городе — Минске, Бресте,
          Гродно, Мозыре, Солигорске и Пинске! Выбирайте в нашем меню свои любимые блюда, а мы их с
          любовью приготовим, хорошенько упакуем и привезем. Горячими, сочными, ароматными!</P>
        </StyledContent>
        <StyledFooter>
          <CitiesContainer>
            <P>Минск</P>
            <P>Брест</P>
            <P>Мозырь</P>
            <P>Гродно</P>
            <P>Солигорск</P>
            <P>Пинск</P>
          </CitiesContainer>
          <P>ООО «Инвестиции и качество ресторан», УНП 193475654, Адрес: Республика Беларусь,
          220114 г. Минск, ул. Филимонова, д. 25б, <br /> пом. 302-2, Свидетельство о государственной
          регистрации №193475654 от 07.10.2020 выдано Минским горисполкомом, <br /> Режим работы: 12.00-23.00.
          тел./факс +375-17-389-70-40, e-mail: hinkalnainvesticii@gmail.com</P>
        </StyledFooter>
      </Layout>
    </Layout>
  </StyledSpace>
  )
}

export default App
