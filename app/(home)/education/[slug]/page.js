import Link from "next/link";
//Dynamic metadata
export async function generateMetadata({ params }) {
  return {
    title: params.slug.replaceAll("-", " "),
  };
}
export default function Education({ params }) {
  const konten = [0, 1, 2];
  return (
    <div className="m-5 md:m-20 md:mx-28">
      <h1 className="mb-2 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
        {params.slug.replaceAll("-", " ")}
      </h1>
      <div className="flex gap-10">
        {/* articles */}
        <div className="md:w-4/5">
          <hr></hr>
          {konten.map((val) => (
            <p className="mt-2 text-base font-normal md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              euismod, nisl vel tristique blandit, est eros porta tortor, vitae
              hendrerit elit ex a nunc. Integer vehicula pellentesque justo. Nam
              convallis lacinia tristique. Quisque in orci nec ligula eleifend
              accumsan ac mattis lorem. Phasellus porta diam vitae nisl
              hendrerit elementum. Ut hendrerit diam et feugiat tincidunt.
              Vivamus vel mauris ac velit volutpat rhoncus. Integer commodo nisi
              quis mattis vulputate. Proin sit amet pharetra arcu. Fusce blandit
              aliquam luctus. In bibendum, sapien nec finibus pellentesque, ex
              orci facilisis nibh, vel placerat tellus elit non mauris.
              Suspendisse potenti. Phasellus efficitur fermentum odio eu
              sodales. Fusce mollis, sem a aliquam fringilla, quam neque
              ultricies dui, ut mattis odio odio in ipsum. Sed in rutrum lacus.
              Ut sit amet pretium nibh, a scelerisque arcu.
            </p>
          ))}
        </div>
        {/* sticky card */}
        <div className="hidden w-1/5 md:block">
          <div className="bg-center rounded-lg p-4 bg-no-repeat bg-[url('/jumbotron.jpg')] bg-gray-700 bg-blend-multiply">
            <h1 className="text-center mb-4 text-xl font-extrabold tracking-tight leading-none text-white">
              Unlock Your Trading Potential with Our Forex Signals
            </h1>
            <p className="text-center mb-8 text-base font-normal text-gray-300">
              Our platform provides you with accurate and reliable real-time
              signals to help you make informed trading decisions in the highly
              volatile Forex market.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                href="/register"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
