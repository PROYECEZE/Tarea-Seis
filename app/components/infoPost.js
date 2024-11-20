
export default function InfoPost({ title, subTitle, imageUrl, published }) {
  return (
  <>
    <main className="container px-8 py-10 max-w-dimensions sm:py-24 sm:px-0 font-roboto">
      <h1 className="text-center text-2xl font-bold text-lighBlack sm:text-43px">{title}</h1>
      <p className="mt-6 text-base sm:text-postSubtitle text-darkBlue font-black text-center">{subTitle}</p>
      <div className="my-10 sm:my-20 flex items-center gap-10 justify-between">
        <div className="flex items-center">
          <img src="images/women.jpg" alt="Alice Cooper" className="w-9 h-auto"/>
          <div className="ml-3">
            <p className="font-semibold text-gray-900 text-xs tracking-wider font-black text-lighBlack">ALICE COOPER</p>
            <p className="mt-0.5 text-sm text-darkBlue font-black opacity-70 text-xs">{published}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-xs sm:text-sm text-lightBlue font-black">SHARE:</span>
          <a href="#" aria-label=" visit our instagram">
            <svg aria-label="logo instagram" width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4519 1.94897C13.2553 1.93319 13.5879 1.94182 14.6959 1.98633C17.5421 2.09981 18.8788 3.44243 19.0242 6.26616C19.0812 7.37273 19.0927 7.70517 19.1085 10.5086C19.1242 13.313 19.1156 13.6446 19.072 14.7518C18.9575 17.5743 17.6395 18.9345 14.7921 19.0801C13.6847 19.137 13.354 19.1494 10.5488 19.1652C7.74535 19.181 7.4128 19.1723 6.30565 19.1278C3.45246 19.0135 2.12273 17.6647 1.97736 14.8471C1.92038 13.7406 1.90802 13.409 1.89223 10.6047C1.87645 7.80121 1.88596 7.46952 1.9296 6.36151C2.04408 3.5372 3.36207 2.17876 6.20943 2.03323C7.31688 1.97712 7.64844 1.96475 10.4519 1.94897ZM10.4412 0.0563735C7.58966 0.0724254 7.23273 0.0866848 6.11304 0.143739C2.30083 0.340201 0.193527 2.46785 0.0400143 6.28552C-0.00530043 7.40667 -0.0155407 7.76373 0.000511276 10.6153C0.0165632 13.4669 0.0308275 13.8247 0.0878812 14.9444C0.284343 18.7566 2.41199 20.8639 6.22966 21.0174C7.35081 21.0619 7.70787 21.0721 10.5594 21.056C13.411 21.04 13.7688 21.0257 14.8885 20.9687C18.6972 20.7722 20.8098 18.6446 20.9607 14.8269C21.006 13.7066 21.0162 13.3487 21.0002 10.4971C20.9841 7.64552 20.9699 7.2886 20.9128 6.1689C20.7199 2.36018 18.5896 0.249384 14.7719 0.0958716C13.6508 0.0505569 13.2928 0.0403215 10.4412 0.0563735V0.0563735ZM10.47 5.16454C7.49242 5.1813 5.09192 7.60898 5.10868 10.5866C5.12544 13.5641 7.55312 15.9655 10.5307 15.9487C13.5083 15.932 15.9088 13.5043 15.892 10.5259C15.8752 7.54828 13.4476 5.14778 10.47 5.16454ZM10.52 14.0562C8.5872 14.067 7.01129 12.5096 7.0004 10.5759C6.98952 8.64306 8.5478 7.06714 10.4806 7.05626C12.4135 7.04538 13.9894 8.60366 14.0003 10.5365C14.0112 12.4702 12.4529 14.0453 10.52 14.0562ZM16.0669 3.66039C15.3704 3.66431 14.8092 4.23185 14.8131 4.92747C14.817 5.62308 15.3846 6.18427 16.0811 6.18035C16.7767 6.17643 17.337 5.60889 17.3331 4.91328C17.3291 4.21767 16.7625 3.65647 16.0669 3.66039Z" fill="#ABBCD5"/>
              </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500" aria-label="visit our facebook">
            <svg aria-label="logo facebook" width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.7807 0.778697L2.09979 0.883855C1.4593 0.88746 0.94335 1.40925 0.946956 2.04974L1.05212 20.7316C1.05572 21.3712 1.57751 21.8871 2.218 21.8835L12.276 21.8269L12.2302 13.6948L9.49323 13.7102L9.47539 10.541L12.2123 10.5256L12.1992 8.1885C12.1839 5.47604 13.832 3.98974 16.2522 3.97611C17.4115 3.96959 18.4077 4.05061 18.6985 4.08747L18.7144 6.92243L17.0362 6.93275C15.7202 6.94016 15.4691 7.5672 15.4743 8.48419L15.4857 10.508L18.6242 10.4904L18.2335 13.6619L15.5035 13.6772L15.5493 21.8085L20.9007 21.7784C21.5394 21.7748 22.0554 21.253 22.0518 20.6125L21.9466 1.93153C21.943 1.29104 21.4212 0.775092 20.7807 0.778697V0.778697Z" fill="#ABBCD5"/>
              </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500" aria-label=" visit our Twitter">
            <svg aria-label="logo Twitter" width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.9622 2.56742C20.1915 2.91476 19.3625 3.15043 18.4916 3.25946C19.3784 2.72158 20.057 1.87338 20.3725 0.865334C19.5432 1.36351 18.6229 1.72745 17.6423 1.92634C16.8527 1.0934 15.7289 0.576468 14.4899 0.583442C11.7084 0.5991 9.679 3.20582 10.3224 5.89636C6.74183 5.73714 3.55773 4.04004 1.41771 1.44542C0.299879 3.38811 0.857505 5.91814 2.7827 7.19007C2.07733 7.17129 1.41125 6.98167 0.829317 6.66206C0.793303 8.65817 2.23442 10.5173 4.30872 10.9213C3.70328 11.0892 3.03939 11.1314 2.36317 11.0057C2.92054 12.7141 4.51828 13.9503 6.40494 13.9747C4.60172 15.405 2.32332 16.0522 0.0363422 15.7955C1.94982 17.0072 4.21917 17.7075 6.65163 17.6938C14.6508 17.6488 19.132 10.8676 18.8249 4.80986C19.6632 4.197 20.3896 3.43428 20.9622 2.56742Z" fill="#ABBCD5"/>
            </svg>
          </a>
        </div>
      </div>
      <figura className = "mt-8" >
        <img src={imageUrl} alt = "Person looking at wall with photos" width = "800" height = "400"/>
        <figcaption className = "mt-4 text-center text-sm text-lightBlue font-black" >This is a caption on this photo for reference </figcaption>
      </figura>
      <div className="mt-10 max-w-none">
        <p className="font-black text-base sm:text-postInfo"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
        <p className="pt-9 font-black text-base sm:text-postInfo"> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? </p>
      </div>
    </main>
  </>
  )
}