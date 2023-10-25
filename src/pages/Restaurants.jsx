import { StyledContent } from '../atoms.js'
import { List, Card } from 'antd'
import { StarFilled, StarOutlined } from '@ant-design/icons';

const cardsData = [
  {
    title: 'Europejski Grill',
    description: 'Krakowskie Przedmieście 13, Warsaw, 00 071, Poland',
    rating: 5,
    priceRange: 2,
    cuisine: 'Modern Cuisine',
    alt: 'Europejski Grill',
    src: 'https://axwwgrkdco.cloudimg.io/v7/__gmpics__/004f79d3d40a4397982c508c245b0c8d',
  },
  {
    title: 'Lore Bistroo',
    description: 'Peetri 12, Port Noblessner, Tallinn, 10415, Estonia',
    rating: 4,
    priceRange: 1,
    cuisine: 'Modern Cuisine',
    alt: 'Lore Bistroo',
    src: 'https://axwwgrkdco.cloudimg.io/v7/__gmpics__/279cf643f77442aa812a6fd2cab3f49e',
  },
  {
    title: '38',
    description: 'Olevimägi 9, Tallinn, 10123, Estonia',
    rating: 4,
    priceRange: 3,
    cuisine: 'French',
    alt: '38',
    src: 'https://axwwgrkdco.cloudimg.io/v7/__gmpics__/e57529c57ab44857aba57d8abb4ac91e',
  },
  {
    title: 'Koneser Grill',
    description: 'ul. Ząbkowska 29, Warsaw, 03 736, Poland',
    rating: 4,
    priceRange: 2,
    cuisine: 'Thai',
    alt: 'Koneser Grill',
    src: 'https://axwwgrkdco.cloudimg.io/v7/__gmpics__/8d510cb9562249478edfa2d2cda00843',
  },
  {
    title: 'Dyletanci',
    description: 'ul. Rozbrat 44a, Warsaw, 00 419, Poland',
    rating: 5,
    priceRange: 3,
    cuisine: 'French',
    alt: 'Dyletanci',
    src: 'https://axwwgrkdco.cloudimg.io/v7/__gmpics__/502c3efff32b4beba04c7b2b7bdc324c',
  },
  {
    title: 'Muzealna',
    description: 'The National Museum, al. Jerozolimskie 3, Warsaw, 00 495, Poland',
    rating: 5,
    priceRange: 2,
    cuisine: 'Modern Cuisine',
    alt: 'Muzealna',
    src: 'https://axwwgrkdco.cloudimg.io/v7/__gmpics__/a79fbd4a0ca14e4ab69042a52e66c7d4',
  },
  {
    title: 'elixir by Dom Wódki',
    description: 'ul. Wierzbowa 9-11, Warsaw, 00 094, Poland',
    rating: 4,
    priceRange: 4,
    cuisine: 'Traditional Cuisine',
    alt: 'elixir by Dom Wódki',
    src: 'https://axwwgrkdco.cloudimg.io/v7/__gmpics__/843017fa46b3464db4ac1bffb724e3e7',
  },
  {
    title: 'Nobu Warsaw',
    description: 'ul. Wilcza 73, Warsaw, 00 670, Poland',
    rating: 5,
    priceRange: 4,
    cuisine: 'Asian',
    alt: 'Nobu Warsaw',
    src: 'https://axwwgrkdco.cloudimg.io/v7/__gmpics__/5e039d93c7dc456a93af34482cc47602',
  },
  {
    title: 'Mantel ja Korsten',
    description: 'Poska 19a, Tallinn, 10216, Estonia',
    rating: 5,
    priceRange: 1,
    cuisine: 'French',
    alt: 'Mantel ja Korsten',
    src: 'https://axwwgrkdco.cloudimg.io/v7/__gmpics__/83ab2afe26b847ab846213754c12feaa',
  },
  {
    title: 'Artesse',
    description: 'ul. Św. Jana 15, Krakow, 31 017, Poland',
    rating: 4,
    priceRange: 1,
    cuisine: 'Modern Cuisine',
    alt: 'Artesse',
    src: 'https://axwwgrkdco.cloudimg.io/v7/__gmpics__/48196baa11874b4e9207dcee7097558d',
  },
  {
    title: 'Fiorentina',
    description: 'ul. Grodzka 63, Krakow, 31 044, Poland',
    rating: 4,
    priceRange: 3,
    cuisine: 'Modern Cuisine',
    alt: 'Fiorentina',
    src: 'https://axwwgrkdco.cloudimg.io/v7/__gmpics__/335bb0d55d184d40965b042dac8817ea',
  },
]

const getRatingIcon = (rating) => {
  const ratingIcon = []
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      ratingIcon.push(<StarFilled />)
    }
    else {
      ratingIcon.push(<StarOutlined />)
    }
  }
  return ratingIcon
}

const CardDescription = ({ description, rating, priceRange, cuisine }) => {
  return (
    <>
      <p style={{height:'43px'}}>
        {description}
      </p>
      <p>
        {getRatingIcon(rating)}
      </p>
      <p>
        {Array(priceRange).fill('€')} • {cuisine}
      </p>
    </>
  )
}

const Restaurants = () => (
  <StyledContent>
    <List
      grid={{
      gutter: 0,
      column: 3,
    }}
      dataSource={cardsData}
      rowKey="id"
      renderItem={(item) => (
        <List.Item>
          <Card
            hoverable
            //style={{ width: 330 }}
            cover={<img alt={item.alt} src={item.src} />}
          >
            <Card.Meta
              title={item.title}
              description={
                <CardDescription
                  description={item.description}
                  rating={item.rating}
                  priceRange={item.priceRange}
                  cuisine={item.cuisine}
                />
            } />
          </Card>
        </List.Item>
      )}
    />
  </StyledContent>
)

export { Restaurants }
