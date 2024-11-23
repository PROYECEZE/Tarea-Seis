import Header from "../../components/header"
import InfoPost from "../../components/infoPost"

export default async function Post({ params }) {
  let post = null
  const slug = (await params).slug
  
  console.log('localhost:3000/posts/' + slug)
  
  try {
    const response = await fetch('http://localhost:3000/posts/' + slug)

    if (!response.ok) {
      throw new ApiError()
    }

    post = await response.json()
  } catch (error) {
    console.log(error.message, error.status)
  }

  return (
  <>
    <Header/>

    {
      post ? <InfoPost {...post} /> : <h1>NO DATA</h1>
    }
  </>
  )
}
