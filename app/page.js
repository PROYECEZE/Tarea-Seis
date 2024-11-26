'use client'

import { useEffect, useState } from "react"
import Header from "./components/header"
import TravelCard from "./components/travel-card"

const ITEMS_PER_PAGE = 6;

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const loadPage = (page = 1) => {
    fetch(`http://localhost:3001/posts/?_page=${page}&_per_page=${ITEMS_PER_PAGE}`).then(data => data.json()).then(data => {
      const postData = data.data
      setPosts(prev => [...prev, ...postData]);
      setFilteredPosts(prev => [...prev, ...postData]);
      setCurrentPage(page);
    })
  }

  useEffect(() => {
    loadPage();
  }, []);
  
  const handleLoadMore = () => {
    loadPage(currentPage + 1);
  }

  const filterPosts = (value) => {
    setSearchQuery(value);

    if (!value) {
      setFilteredPosts(posts);
    } else {
      const filteredCards = posts.filter(card => 
        card.title.toLowerCase().includes(value.toLowerCase()) ||
        card.abstract.toLowerCase().includes(value.toLowerCase()) ||
        card.authorBlog.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredPosts(filteredCards);
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    filterPosts(searchQuery);
  }

  return (
    <>
      <Header/>
      <main className="container max-w-size flex-grow">
        <section className='mt-14 my-8 rounded-lg bg-white py-2 px-5 shadow-3xl'>
          <form onSubmit={handleSearch} className='flex items-center'>
            <div className='flex relative flex-1 items-center'>
              <svg
                aria-hidden="true"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
              >
                <path
                  d="M8.70833 15.0417C12.2061 15.0417 15.0417 12.2061 15.0417 8.70833C15.0417 5.21053 12.2061 2.375 8.70833 2.375C5.21053 2.375 2.375 5.21053 2.375 8.70833C2.375 12.2061 5.21053 15.0417 8.70833 15.0417Z"
                  stroke="#869AB8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.6249 16.625L13.1812 13.1813"
                  stroke="#869AB8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                className="pl-10 pr-4 py-2 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder:text-lightBlack font-black"
                placeholder="Search"
                type="search"
                value={searchQuery}
                onChange={(e) => filterPosts(e.target.value)}
                aria-label="Search input"
              />
            </div>
            <span className="text-xs text-lightBlue font-black font-roboto text-postInfoss tracking-eightLetter ml-4" aria-live="polite">
              {filteredPosts.length > 0 ? `${filteredPosts.length} RESULTS` : 'NO RESULTS'}
            </span>
            <button
              type="submit"
              className="ml-5 bg-intenseBlue hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md font-roboto text-postInfo"
            >
              Search
            </button>
          </form>
        </section>
        <section className='py-5 cursor-pointer grid gap-10 md:grid-cols-2 lg:grid-cols-3'>
        {filteredPosts.map((card, index) => {
          return (
            <TravelCard key={index} {...card} />
            );
          })}
        </section>
        {filteredPosts.length === 0 && (
          <section className="flex gap-20 container max-w-size sm:mt-32 mt-0 font-roboto px-0">
            <div className="flex flex-col items-center justify-center px-5 text-center">
              <h1 className="md:text-52px text-strongBlue mb-4 font-black text-5xl mt-3">
                Uh oh.
              </h1>
              <p className="text-snowGray mb-8 font-black text-postInfo">
                We ran into an issue, but don't worry, we'll take care of it for sure.
              </p>
              <button className="px-6 py-2.5 text-white text-postInfo font-black bg-intenseBlue hover:bg-blue-700 rounded-md transition-colors">
                Back to safety
              </button>
            </div>
            <img className="w-100 h-90 hidden sm:flex" src="/images/UhOh.png" alt=""/>
          </section>
        )}
        {filteredPosts.length > 0 && (
          <section className="py-10 sm:py-20 text-center">
            <button
              onClick={handleLoadMore}
              className="flex items-center m-auto border border-snowBlue rounded hover:bg-blue-100"
            >
              <span className="text-intenseBlue font-black font-roboto text-postInfo p-1 px-10 sm:py-3 sm:px-52">Load more</span>
              <svg className="mr-8" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.52642 0.21967C6.23353 -0.0732233 5.75866 -0.0732233 5.46576 0.21967C5.17287 0.512563 5.17287 0.987437 5.46576 1.28033L9.43543 5.25H0.75C0.335786 5.25 0 5.58579 0 6C0 6.41421 0.335786 6.75 0.75 6.75H9.43543L5.46576 10.7197C5.17287 11.0126 5.17287 11.4874 5.46576 11.7803C5.75866 12.0732 6.23353 12.0732 6.52642 11.7803L11.7328 6.57398C11.8962 6.4364 12 6.23033 12 6C12 5.76967 11.8962 5.56359 11.7328 5.42601L6.52642 0.21967Z" fill="#335EEA"/>
              </svg>
            </button>
          </section>
        )}
      </main>
      <footer className="container mx-auto px-4 py-8">
        <p className="text-center text-postInfo text-black font-normal mb-8" aria-hidden="true">
          Landkit. © all rights reserved 2021
        </p>
      </footer>
    </>
  );
}