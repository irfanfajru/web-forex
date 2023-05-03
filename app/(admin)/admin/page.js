import { ListBulletIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
export const metadata = {
  title: "Admin - Dashboard",
};
export default function Admin() {
  return (
    <div className="m-4">
      {/* welcome */}
      <h2 className="text-xl font-medium">Welcome Admin!</h2>
      <div className="mt-4 gap-4 grid grid-cols-1 sm:grid-cols-3">
        <div>
          <div className="rounded-lg bg-gray-800 shadow border">
            <div className="p-2 flex justify-between rounded-r-md bg-white ml-2">
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Total User
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Total Registered Users
                </p>
              </div>
              <p className="text-7xl font-semibold">2</p>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-lg bg-gray-800 shadow border">
            <div className="p-2 flex justify-between rounded-r-md bg-white ml-2">
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Subscribed User
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Total Subscribed Users
                </p>
              </div>
              <p className="text-7xl font-semibold">1</p>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-lg bg-gray-800 shadow border">
            <div className="p-2 flex justify-between rounded-r-md bg-white ml-2">
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Transaction
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Total Transactions for Today
                </p>
              </div>
              <p className="text-7xl font-semibold">1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
