import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
const users = [
  {
    name: "Neil Smith",
    teleId: "neilSmith",
    status: "3 Months Plan",
    subs: true,
    exp: new Date().toDateString(),
  },
  {
    name: "John Smith",
    teleId: "JohnSmith",
    status: "Not Subscribe",
    subs: false,
    exp: "-",
  },
];
export default function UserOverview() {
  return (
    <div className="rounded-lg shadow border p-2">
      <h2 className="text-xl text-center font-bold tracking-tight text-gray-900">
        User Overview
      </h2>
      <hr></hr>
      <div className="grid grid-cols-2 gap-2 text-center mt-2">
        <div>
          <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            Total
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">2</p>
        </div>
        <div>
          <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            Subscribed
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">1</p>
        </div>
      </div>

      {/* user table */}
      <div className="relative overflow-x-auto mt-4">
        <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Expired plan date
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((val) => (
                <tr
                  key={`user-${val.name}`}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src={`https://ui-avatars.com/api/?name=${val.name}`}
                      alt="Jese image"
                    />
                    <div className="pl-3">
                      <div className="text-base font-semibold">{val.name}</div>
                      <div className="font-normal text-gray-500">
                        {val.teleId}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    {val.subs ? (
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                        {val.status}
                      </span>
                    ) : (
                      <span className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                        {val.status}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">{val.exp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-end text-sm">
        <p>Show Only 5 users</p>
        <Link
          href="/admin/users"
          className="text-end inline-flex text-blue-600"
        >
          Show More <ArrowRightIcon className="w-5 h-5 text-end" />
        </Link>
      </div>
    </div>
  );
}
