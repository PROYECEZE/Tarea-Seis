import Image from "next/image"

export default function TravelCard({ imageUrl, priceColor }) {
  return (
    <div className="rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative">
        <Image
          alt="Travel photo"
          className=""
          height={200}
          src={imageUrl}
          width={400}
        />
        <div
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs text-white font-roboto font-black ${priceColor}`}
        >
          $49/MO
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lightBlack font-roboto mb-2 text-xl font-black">
          Keeping the dream alive by traveling the world.
        </h3>
        <p className="font-roboto mb-1 text-softGray font-normal">
          Integrate the latest technologies with an innovative platform...
        </p>
        <div className="flex justify-end mb-2 group">
          <svg className="text-gray-400 group-hover:text-yellowGradient transition-colors duration-300" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16 6.20038C16 6.38185 15.875 6.55325 15.75 6.68431L12.2596 10.2533L13.0865 15.2943C13.0962 15.3648 13.0962 15.4253 13.0962 15.4959C13.0962 15.758 12.9808 16 12.7019 16C12.5673 16 12.4327 15.9496 12.3173 15.879L8 13.4997L3.68269 15.879C3.55769 15.9496 3.43269 16 3.29808 16C3.01923 16 2.89423 15.758 2.89423 15.4959C2.89423 15.4253 2.90385 15.3648 2.91346 15.2943L3.74038 10.2533L0.240385 6.68431C0.125 6.55325 0 6.38185 0 6.20038C0 5.89792 0.298077 5.77694 0.538462 5.73661L5.36538 5.00063L7.52885 0.413359C7.61538 0.221802 7.77885 0 8 0C8.22115 0 8.38462 0.221802 8.47115 0.413359L10.6346 5.00063L15.4615 5.73661C15.6923 5.77694 16 5.89792 16 6.20038Z" />
          </svg>
        </div>
        <div className="w-41 border border-lightGray"></div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-3">
            <Image
              alt="Author avatar"
              className="h-8 w-8 rounded-full"
              height={32}
              src="/images/women.png"
              width={32}
            />
            <span className="font-roboto text-xs text-softGray font-black">ALIVE COOPER</span>
          </div>
          <span className="font-roboto text-xs text-softGray font-black">MAY 02</span>
        </div>
      </div>
    </div>
  )
}