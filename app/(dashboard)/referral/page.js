export const metadata = {
  title: "Referral",
};
export default function Referral() {
  return (
    <div>
      <h1 className="text-center mb-4 mt-4 text-2xl font-extrabold tracking-tight leading-none">
        Referral
      </h1>
      <hr></hr>
      <div className="m-4">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
          <div>
            {/* referral link */}
            <div className="bg-white border rounded-lg p-2 shadow">
              <h2 className="text-center text-base font-semibold ">
                Share Your Personal Link
              </h2>
              <div className="border m-2 p-2 rounded-lg">
                http://127.0.0.1:3000/referral/xxxx
              </div>
            </div>
            {/* referral code */}
            <div className="mt-4 bg-white border rounded-lg p-2 shadow">
              <h2 className="text-center text-base font-semibold">
                Share Your Coupon Code
              </h2>
              <p className="text-base text-center m-2">xxxx</p>
            </div>
          </div>
          {/* referral use */}
          <div className="bg-white border rounded-lg p-2 shadow">
            <div className="grid grid-cols-2 gap-2 text-center">
              <div>
                <h3>Referred</h3>
                <p>1</p>
              </div>
              <div>
                <h3>Total Commission</h3>
                <p>Rp 20K</p>
              </div>
            </div>
            <div className="relative overflow-x-auto mt-4">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Telegram Id
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Commission
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      1
                    </th>
                    <td className="px-6 py-4">GreenDay</td>
                    <td className="px-6 py-4">1 Month Plan</td>
                    <td className="px-6 py-4">{new Date().toDateString()}</td>
                    <td className="px-6 py-4">Rp 20K</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
