import Header from "./components/header";
import Grid from "./components/grids";

const cardData = [
  { imageUrl: "/images/traveling.png", priceColor: "bg-softGreen", fill: "#F99716"},
  { imageUrl: "/images/planning.png", priceColor: "bg-softYellow", fill: "currentColor"},
  { imageUrl: "/images/see.png", priceColor: "bg-softred", fill: "currentColor"},
  { imageUrl: "/images/traveling.png", priceColor: "bg-softGreen", fill: "#F99716"},
  { imageUrl: "/images/planning.png", priceColor: "bg-softYellow", fill: "currentColor"},
  { imageUrl: "/images/see.png", priceColor: "bg-softred", fill: "currentColor" }
]

export default function Home() {
  return (
    <>
      <Header/>
      <main className="container max-w-size">
        <section className="pt-14 py-8">
          <div className="rounded-lg bg-white py-2 px-5 shadow-3xl">
            <div className="flex items-center">
              <div className="flex relative flex-1 items-center">
                <svg aria-hidden="true" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.70833 15.0417C12.2061 15.0417 15.0417 12.2061 15.0417 8.70833C15.0417 5.21053 12.2061 2.375 8.70833 2.375C5.21053 2.375 2.375 5.21053 2.375 8.70833C2.375 12.2061 5.21053 15.0417 8.70833 15.0417Z" stroke="#869AB8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.6249 16.625L13.1812 13.1813" stroke="#869AB8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input className="pl-2 pr-4 py-2 w-full rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder:text-lightBlack font-black" placeholder="Search" type="search"/>
                <search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"/>
              </div>
              <span className="text-xs text-lightBlue font-black font-roboto text-postInfoss" aria-label="123 blog found">123 RESULTS</span>
              <button className="ml-5 bg-intenseBlue hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md font-roboto text-postInfo"> Search </button>
            </div>
          </div>
        </section>
        <section className="py-5 cursor-pointer">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {cardData.map((card, index) => (
              <Grid key={index} {...card} />
            ))}
          </div>
        </section>
        <section className="py-10 sm:py-20 text-center">
          <button className="flex items-center m-auto border border-snowBlue rounded hover:bg-blue-100">
            <span className="text-intenseBlue font-black font-roboto text-postInfo p-1 px-10 sm:py-3 sm:px-52">Load more</span>
            <svg className="mr-8" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.52642 0.21967C6.23353 -0.0732233 5.75866 -0.0732233 5.46576 0.21967C5.17287 0.512563 5.17287 0.987437 5.46576 1.28033L9.43543 5.25H0.75C0.335786 5.25 0 5.58579 0 6C0 6.41421 0.335786 6.75 0.75 6.75H9.43543L5.46576 10.7197C5.17287 11.0126 5.17287 11.4874 5.46576 11.7803C5.75866 12.0732 6.23353 12.0732 6.52642 11.7803L11.7328 6.57398C11.8962 6.4364 12 6.23033 12 6C12 5.76967 11.8962 5.56359 11.7328 5.42601L6.52642 0.21967Z" fill="#335EEA"/>
            </svg>
          </button>
        </section>
      </main>
      <footer>
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-postInfo text-black font-normal mb-8" aria-hidden="true">
            Landkit. © all rights reserved 2021
          </p>
        </div>
      </footer>
    </>
  );
}
