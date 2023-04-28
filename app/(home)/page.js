import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* jumbotron */}
      <section className="bg-center bg-no-repeat bg-[url('/jumbotron.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Unlock Your Trading Potential with Our Forex Signals
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Our platform provides you with accurate and reliable real-time
            signals to help you make informed trading decisions in the highly
            volatile Forex market.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              href="/register"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Join Now
            </Link>
            {/* <a
              href="#"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              login
            </a> */}
          </div>
        </div>
      </section>
      <div className="m-10 sm:m-20">
        {/* grid */}
        <div className="grid grid-cols-1 gap-y-2 sm:gap-8 sm:gap-y-20 sm:grid-cols-2">
          {/* card */}
          <div>
            <Image
              className="rounded-xl"
              src="/accurate.jpg"
              alt="accurate"
              width={800}
              height={800}
            />
          </div>
          <div>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
              Accurate and Reliable Signals
            </h1>
            <p className="mb-8 text-lg font-normal lg:text-xl">
              We pride ourselves on providing accurate and reliable Forex
              signals that are based on thorough analysis and research.
            </p>
          </div>
          {/* card */}
          <div className="sm:hidden">
            <Image
              alt="accurate"
              width={800}
              height={800}
              className="rounded-xl"
              src="/transparent.jpg"
            />
          </div>
          <div>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
              Transparency and Accountability
            </h1>
            <p className="mb-8 text-lg font-normal lg:text-xl">
              We believe in transparency and accountability, which is why we
              provide our clients with detailed reports and analysis of our
              signals.
            </p>
          </div>
          <div className="hidden sm:block">
            <Image
              alt="accurate"
              width={800}
              height={800}
              className="rounded-xl"
              src="/transparent.jpg"
            />
          </div>
          {/* card */}
          <div>
            <Image
              alt="accurate"
              width={800}
              height={800}
              className="rounded-xl"
              src="/highacc.jpg"
            />
          </div>
          <div>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
              High Accuracy
            </h1>
            <p className="mb-8 text-lg font-normal lg:text-xl">
              We provide highly accurate Forex signals based on our teams
              extensive market analysis and technical expertise. Our signals
              have a high probability of success, which can increase your
              chances of making profitable trades.
            </p>
          </div>
        </div>
      </div>
      {/* telegram alert */}
      <div className="text-center p-4 m-4">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
          Live telegram alerts
        </h1>
        <p className="mb-8 text-lg font-normal lg:text-xl">
          Stay ahead of the market and receive timely trading signals with our
          live Telegram alerts.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            href="/register"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
}
