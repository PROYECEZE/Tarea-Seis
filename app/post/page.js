import Header from "../components/header"
import InfoPost from "../components/infoPost"

const infoPost = [
  {
    title: "Should I work remotely or will it put a strain on my long-term career?",
    subTitle: "As part of our ongoing effort to enhance the traveler journey, we're proud to partner with Portland International Airport (PDX) on the launch of a pilot program designed to shorten rider wait times at pickup.",
    imageUrl: "/images/works.jpg",
    published:"Published on May 20, 2019"
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