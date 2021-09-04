const fs = require('fs')
const imagesFolder = __dirname + '/public'

const getImages = (req, res) => {
  const files = fs.readdirSync(imagesFolder).filter(file => file[0] !== '.')
  res.send(files)
}

const getImage = (req, res) => {
  const file = fs.readdirSync(imagesFolder).find(file => file.toLocaleLowerCase() === req.params.id.toLocaleLowerCase())
  var img = fs.readFileSync(`${imagesFolder}/${file}`);
  res.writeHead(200, { 'Content-Type': 'image/jpg' });
  res.end(img, 'binary');
}

module.exports = {
  getImages,
  getImage
}