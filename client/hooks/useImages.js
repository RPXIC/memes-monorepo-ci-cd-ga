import { useEffect, useState } from 'react'
import { getImages } from '../services/getImages'

const useImages = () => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    (async () => {
      try {
        setError('')
        setIsLoading(true)
        const data = await getImages()
        if (!data) {
          setError('No data')
          setImages([])
          return setIsLoading(false)
        }
        setImages(data)
        setIsLoading(false)
      } catch (error) {
        setImages([])
        setError('No data')
        setIsLoading(false)
      }
    })()
  }, [])

  return {
    images,
    isLoading,
    error
  }
}

export default useImages