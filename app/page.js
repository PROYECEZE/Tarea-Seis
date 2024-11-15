import Header from "./components/header";
import Grid from "./components/grids";

const cardData = [
  { imageUrl: "/images/traveling.png", priceColor: "bg-softGreen" },
  { imageUrl: "/images/planning.png", priceColor: "bg-softYellow" },
  { imageUrl: "/images/see.png", priceColor: "bg-softred" },
  { imageUrl: "/images/traveling.png", priceColor: "bg-softGreen" },
  { imageUrl: "/images/planning.png", priceColor: "bg-softYellow" },
  { imageUrl: "/images/see.png", priceColor: "bg-softred" }
]

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <section className="container max-w-size pt-14 py-8">
          <div className="rounded-lg bg-white py-2 px-5 shadow-3xl">
            <div className="flex items-center">
              <div className="flex relative flex-1 items-center">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.70833 15.0417C12.2061 15.0417 15.0417 12.2061 15.0417 8.70833C15.0417 5.21053 12.2061 2.375 8.70833 2.375C5.21053 2.375 2.375 5.21053 2.375 8.70833C2.375 12.2061 5.21053 15.0417 8.70833 15.0417Z" stroke="#869AB8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.6249 16.625L13.1812 13.1813" stroke="#869AB8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input className="pl-2 pr-4 py-2 w-full rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder:text-lightBlack font-black" placeholder="Search" type="search"/>
                <search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"/>
              </div>
              <span className="text-xs text-lightBlue font-black font-roboto text-postInfoss">123 RESULTS</span>
              <button className="ml-5 bg-intenseBlue hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md font-roboto text-postInfo"> Search </button>
            </div>
          </div>
        </section>
        <section className="container max-w-size px-4 py-5 cursor-pointer">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {cardData.map((card, index) => (
              <Grid key={index} {...card} />
            ))}
          </div>
        </section>
        <section className="container mx-auto px-4 py-20 text-center">
          <button className="inline-flex items-center space-x-2">
            <span className="text-intenseBlue font-black font-roboto text-postInfo px-44">Load more</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </section>
      </main>
      <footer>
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-postInfo text-black font-normal">
            Landkit. © all rights reserved 2021
          </p>
        </div>
      </footer>
    </>
  );
}
