import Header from "../components/header"
import InfoPost from "../components/infoPost"

const infoPost = [
  {
    title: "See the world through new eyes",
    subTitle: "Experience diverse cultures and broaden your perspectives...As part of our ongoing effort to enhance the traveler journey, we're proud to partner with Portland International Airport (PDX).",
    imageUrl:"/images/see.jpg",
    published:"Published on Jun 10, 2016"
  }
]

export default function Post() {
  return (
  <>
    <Header/>
      {infoPost.map((post, index) => (
        <InfoPost key={index} {...post} />
      ))}
  </>
  )
}