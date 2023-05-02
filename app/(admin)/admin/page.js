import { ListBulletIcon } from "@heroicons/react/20/solid";
import UserOverview from "./userOverview";
import Link from "next/link";
export const metadata = {
  title: "Admin - Dashboard",
};
export default function Admin() {
  return (
    <div className="m-4">
      {/* welcome */}
      <h2 className="text-xl font-medium">Welcome Admin!</h2>
      <div className="mt-4 gap-4 grid grid-cols-1 sm:grid-cols-2">
        <UserOverview />
        <Link
          href="/admin/transactions"
          className="h-fit flex gap-2 items-center p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
        >
          <div className="rounded-lg shadow p-4">
            <ListBulletIcon className="w-12 h-12 text-gray-700" />
          </div>
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Transactions
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              View your users transactions
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
