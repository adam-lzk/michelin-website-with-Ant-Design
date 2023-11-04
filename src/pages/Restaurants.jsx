import { StyledContent, StyledCard } from '../atoms.js'
import { Card, Grid, List } from 'antd'
import { StarFilled, StarOutlined } from '@ant-design/icons';

const cardsData = [
  {
    title: 'Europejski Grill',
    description: 'Krakowskie Przedmieście 13, Warsaw, 00 071, Poland',
    id: 1,
    rating: 4.3,  // of 5
    priceRange: 4,  // of 4
    cuisine: 'Polish',
    alt: 'Europejski Grill',
    src: 'https://axwwgrkdco.cloudimg.io/v7/__gmpics__/004f79d3d40a4397982c508c245b0c8d',
  },
  {
    title: 'Lore Bistroo',
    description: 'Peetri 12, Port Noblessner, Tallinn, 10415, Estonia',
    id: 2,
    rating: 4.5,
    priceRange: 2,
    cuisine: 'Modern Cuisine',
    alt: 'Lore Bistroo',
    src: 'https://axwwgrkdco.cloudimg.io/v7/__gmpics__/279cf643f77442aa812a6fd2cab3f49e',
  },
  {
    title: '38',
    description: 'Olevimägi 9, Tallinn, 10123, Estonia',
    id: 3,
    rating: 4.8,
    priceRange: 3,
    cuisine: 'Creative',
    alt: '38',
    src: 'https://axwwgrkdco.cloudimg.io/v7/__gmpics__/e57529c57ab44857aba57d8abb4ac91e',
  },
  {
    title: 'Koneser Grill',
    description: 'ul. Ząbkowska 29, Warsaw, 03 736, Poland',
    id: 4,
    rating: 4.7,
    priceRange: 1,
    cuisine: 'Meats and Grills',
    alt: 'Koneser Grill',
    src: 'https://axwwgrkdco.cloudimg.io/v7/__gmpics__/8d510cb9562249478edfa2d2cda00843',
  },
  {
    title: 'Dyletanci',
    description: 'ul. Rozbrat 44a, Warsaw, 00 419, Poland',
    id: 5,
    rating: 4.6,
    priceRange: 3,
    cuisine: 'Modern Cuisine',
    alt: 'Dyletanci',
    src: 'https://axwwgrkdco.cloudimg.io/v7/__gmpics__/502c3efff32b4beba04c7b2b7bdc324c',
  },
  {
    title: 'Muzealna',
    description: 'The National Museum, al. Jerozolimskie 3, Warsaw, 00 495, Poland',
    id: 6,
    rating: 4.4,
    priceRange: 1,
    cuisine: 'Traditional Cuisine',
    alt: 'Muzealna',
    src: 'https://axwwgrkdco.cloudimg.io/v7/__gmpics__/a79fbd4a0ca14e4ab69042a52e66c7d4',
  },
  {
    title: 'elixir by Dom Wódki',
    description: 'ul. Wierzbowa 9-11, Warsaw, 00 094, Poland',
    id: 7,
    rating: 4.6,
    priceRange: 2,
    cuisine: 'Polish',
    alt: 'elixir by Dom Wódki',
    src: 'https://axwwgrkdco.cloudimg.io/v7/__gmpics__/843017fa46b3464db4ac1bffb724e3e7',
  },
  {
    title: 'Nobu Warsaw',
    description: 'ul. Wilcza 73, Warsaw, 00 670, Poland',
    id: 8,
    rating: 4.1,
    priceRange: 3,
    cuisine: 'Japanese',
    alt: 'Nobu Warsaw',
    src: 'https://axwwgrkdco.cloudimg.io/v7/__gmpics__/5e039d93c7dc456a93af34482cc47602',
  },
  {
    title: 'Mantel ja Korsten',
    description: 'Poska 19a, Tallinn, 10216, Estonia',
    id: 9,
    rating: 4.8,
    priceRange: 1,
    cuisine: 'Mediterranean Cuisine',
    alt: 'Mantel ja Korsten',
    src: 'https://axwwgrkdco.cloudimg.io/v7/__gmpics__/83ab2afe26b847ab846213754c12feaa',
  },
  {
    title: 'Artesse',
    description: 'ul. Św. Jana 15, Krakow, 31 017, Poland',
    id: 10,
    rating: 4.8,
    priceRange: 3,
    cuisine: 'Creative',
    alt: 'Artesse',
    src: 'https://axwwgrkdco.cloudimg.io/v7/__gmpics__/48196baa11874b4e9207dcee7097558d',
  },
  {
    title: 'Fiorentina',
    description: 'ul. Grodzka 63, Krakow, 31 044, Poland',
    id: 11,
    rating: 4.7,
    priceRange: 3,
    cuisine: 'Creative',
    alt: 'Fiorentina',
    src: 'https://axwwgrkdco.cloudimg.io/v7/__gmpics__/335bb0d55d184d40965b042dac8817ea',
  },
]

const CardDescription = ({ description, rating, priceRange, cuisine }) => {
  const filledStarsCount = Math.round(rating)
  const emptyStarsCount = 5 - Math.round(rating)

  return (
    <>
      <p style={{ height: "67px" }}>{description}</p>
      <p>
        {Array(filledStarsCount).fill('').map((item, index) => (
          <StarFilled key={`filled-${index}`} />
        ))}
        {Array(emptyStarsCount).fill('').map((item, index) => (
          <StarOutlined key={`outlined-${index}`} />
        ))}
        {/* to get an array of filled and outlined stars to represent the rating */}
      </p>
      <p>
        {Array(priceRange).fill('').map((item, index) => (
          <span key={index.toString()}>€</span>
        ))} • {cuisine}
        {/* to get an array of € to represent the price range */}
      </p>
    </>
  )
}

export const RestaurantsPage = () => {
  const { xs, sm, md, lg, xl, xxl } = Grid.useBreakpoint()
  // xs[0, 575], sm[576, 767], md[768, 991], lg[992, 1199], xl[1200, 1599], xxl [1600, ...]
  // console.log(Grid.useBreakpoint())

  return (
    <StyledContent>
      <List
        grid={{
          gutter: 16,  // something like margin: 16px
          column: xxl ? 5 : xl ? 4 : lg ? 3 : md ? 2 : sm ? 1 : xs ? 1 : 6,
        }}
        dataSource={cardsData}
        rowKey={item => item.id.toString()}  // to uniquely identify an item in array
        renderItem={(item) => (
          <List.Item>
            <StyledCard
              hoverable
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
                }
              />
            </StyledCard>
          </List.Item>
        )}
      />
    </StyledContent>
  )
}

CardDescription.propTypes={
  description: () => null,
  rating: () => null,
  priceRange: () => null,
  cuisine: () => null,
}
