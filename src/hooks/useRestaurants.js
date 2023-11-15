import { useEffect, useState } from "react"

export const useRestaurants = (params) => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const handleFetch = async () => {
      const response = await fetch(`http://localhost:8080/restaurants`)
      const result = await response.json()
      setRestaurants(result)
    }
    handleFetch()
  }, [])

  return { restaurants }
}
