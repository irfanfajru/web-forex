import Link from "next/link";

export const metadata = {
  title: "Invoice",
};
export default function Invoice() {
  return (
    <div>
      <h1 className="text-center mb-4 mt-4 text-2xl font-extrabold tracking-tight leading-none">
        Invoice History
      </h1>
      <hr></hr>
      <div className="relative overflow-x-auto m-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                INVOICE#
              </th>
              <th scope="col" className="px-6 py-3">
                PRODUCT
              </th>
              <th scope="col" className="px-6 py-3">
                INVOICE DATE
              </th>
              <th scope="col" className="px-6 py-3">
                DUE DATE
              </th>
              <th scope="col" className="px-6 py-3">
                STATUS
              </th>
              <th scope="col" className="px-6 py-3">
                TOTAL
              </th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                INV01
              </th>
              <td className="px-6 py-4">1 Year Plan</td>
              <td className="px-6 py-4">{new Date().toDateString()}</td>
              <td className="px-6 py-4">{new Date().toDateString()}</td>
              <td className="px-6 py-4">
                <span className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                  Pending
                </span>
              </td>
              <td className="px-6 py-4">Rp 1560K</td>
              <td className="px-6 py-4">
                <button
                  className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Pay Now
                </button>
              </td>
              <td className="px-6 py-4">
                <a href="#">Download</a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                INV02
              </th>
              <td className="px-6 py-4">3 Months Plan</td>
              <td className="px-6 py-4">{new Date().toDateString()}</td>
              <td className="px-6 py-4">{new Date().toDateString()}</td>
              <td className="px-6 py-4">
                <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                  Success
                </span>
              </td>
              <td className="px-6 py-4">Rp 420K</td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4">
                <a href="#">Download</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
