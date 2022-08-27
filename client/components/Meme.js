const Meme = ({ image }) => {
  return <img data-cy='meme' className='meme' alt={`image${image}`} src={`${window.location.href}api/images/${image}`} />
}

export default Meme
