export default function Home() {
  return (
    <div>
      {/* jumbotron */}
      <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            We invest in the world’s potential
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Register Sekarang
            </a>
            {/* <a
              href="#"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              login
            </a> */}
          </div>
        </div>
      </section>
      <div className="m-20">
        {/* grid */}
        <div className="grid grid-cols-1 gap-8 gap-y-20 sm:grid-cols-2">
          {/* card */}
          <div>
            <img
              className="rounded"
              src="https://www.cekpremi.com/blog/wp-content/uploads/2021/05/cara-main-forex-untuk-pemula.jpg"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              Kemudahan Bertransaksi dengan XXX Trading Tools
            </h1>
            <p className="font-normal text-base mt-8">
              Bingung mau trading apa? Kalau trading di XXX, Anda dapat
              menggunakan tools analisis dari berbagai provider ternama untuk
              mendapatkan laporan pergerakan harga, berita pasar terkini, serta
              informasi penting lainnya yang Anda butuhkan ketika bertransaksi.
            </p>
            <p className="mt-2">
              Salah satu tools unggulan kami adalah Trading Signal yang
              memberikan informasi potensi pergerakan harga untuk produk-produk
              tertentu.
            </p>
          </div>
          {/* card */}
          <div>
            <h1 className="text-2xl font-bold">
              Platform yang Ramah untuk Trader Pemula
            </h1>
            <p className="font-normal text-base mt-8">
              Banyak orang ingin trading forex, tetapi kesulitan memahami
              dasar-dasar dan cara trading forex. Oleh karena itu, MIFX
              menghadirkan platform edukasi interaktif berbasis online untuk
              membantu Anda belajar trading. Konten edukasi dibuat ringan dan
              singkat sehingga seorang trader pemula bisa belajar trading dari
              nol dalam waktu 1 jam.
            </p>
          </div>
          <div>
            <img
              className="rounded"
              src="https://www.cekpremi.com/blog/wp-content/uploads/2021/05/cara-main-forex-untuk-pemula.jpg"
            />
          </div>
          {/* card */}
          <div>
            <img
              className="rounded"
              src="https://www.cekpremi.com/blog/wp-content/uploads/2021/05/cara-main-forex-untuk-pemula.jpg"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              Keuntungan Tambahan Trading di MIFX
            </h1>
            <p className="font-normal text-base mt-8">
              Setiap kali Anda bertransaksi di MIFX, Anda mendapatkan poin MIFX
              Rewards yang dapat ditukarkan dengan berbagai hadiah travel,
              gadget, lifestyle, maupun otomotif.
            </p>
          </div>
        </div>
      </div>
      {/* end grid */}
      <div className="bg-grey px-20 py-10">
        <h1 className="text-4xl font-bold text-center">
          Peluang Profit dalam Genggaman
        </h1>
        <p className="text-center font-normal text-base mt-2">
          memenuhi dan mempermudah segala kebutuhan trading Anda di mana saja
          dan kapan saja.
        </p>
        <div className="grid grid-cols-3 gap-8 mt-8">
          <div>
            <p>ini icon</p>
            <p className="mt-4">Trading di mana saja, kapan saja</p>
          </div>
          <div>
            <p>ini icon</p>
            <p className="mt-4">Trading di mana saja, kapan saja</p>
          </div>
          <div>
            <p>ini icon</p>
            <p className="mt-4">Trading di mana saja, kapan saja</p>
          </div>
        </div>
      </div>
      {/* daftar sekarang */}
      <div className="grid grid-cols-2 mt-20 mx-10">
        <div>ini gambar</div>
        <div>daftar segera</div>
      </div>
    </div>
  );
}
