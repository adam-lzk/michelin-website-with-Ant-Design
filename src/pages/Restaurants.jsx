import { StyledContent, StyledCard } from '../atoms.js'
import { Card, Grid, List } from 'antd'
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

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
  const [cardsData, setCardsData] = useState([])

  useEffect(() => {
    const handleFetch = async () => {
      const response = await fetch("http://localhost:8080/restaurants")
      const result = await response.json()
      setCardsData(result)
    }
    handleFetch()
  }, [])

  //console.log({ cardsData })

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
