import * as React from 'react'
import useImages from '../hooks/useImages'
import Meme from './Meme'

const ListOfMemes = () => {
  const { images, isLoading, error } = useImages()

  return (
    <div className='listContainer'>
      {images.length > 0 && !isLoading
        ?
        images.map((image, i) => <Meme image={image} key={i} />)
        :
        <p>{error ? error : 'loading...'}</p>}
    </div>
  )
}
export default ListOfMemes