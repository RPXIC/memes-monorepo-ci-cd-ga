export const getImages = async () => {
  const res = await fetch('/api/images')
  const data = await res.json()
  return data
}