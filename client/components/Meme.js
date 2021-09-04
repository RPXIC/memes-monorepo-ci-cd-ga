import * as React from 'react'

const Meme = ({ image }) => <img className='meme' alt={`image${image}`} src={`http://localhost:8000/api/images/${image}`} />

export default Meme