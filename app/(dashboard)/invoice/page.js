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
      <div class="relative overflow-x-auto mt-4">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                INVOICE#
              </th>
              <th scope="col" class="px-6 py-3">
                PRODUCT
              </th>
              <th scope="col" class="px-6 py-3">
                INVOICE DATE
              </th>
              <th scope="col" class="px-6 py-3">
                DUE DATE
              </th>
              <th scope="col" class="px-6 py-3">
                STATUS
              </th>
              <th scope="col" class="px-6 py-3">
                TOTAL
              </th>
              <th scope="col" class="px-6 py-3"></th>
              <th scope="col" class="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                INV01
              </th>
              <td class="px-6 py-4">Standard Plan</td>
              <td class="px-6 py-4">{new Date().toDateString()}</td>
              <td class="px-6 py-4">{new Date().toDateString()}</td>
              <td class="px-6 py-4">
                <span class="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                  Pending
                </span>
              </td>
              <td class="px-6 py-4">$ 49</td>
              <td class="px-6 py-4">
                <button
                  class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Pay Now
                </button>
              </td>
              <td class="px-6 py-4">
                <a href="#">Download</a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                INV02
              </th>
              <td class="px-6 py-4">Standard Plan</td>
              <td class="px-6 py-4">{new Date().toDateString()}</td>
              <td class="px-6 py-4">{new Date().toDateString()}</td>
              <td class="px-6 py-4">
                <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                  Success
                </span>
              </td>
              <td class="px-6 py-4">$ 49</td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">
                <a href="#">Download</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
