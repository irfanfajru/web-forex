import Link from "next/link";

export default function DashboardCard({ item }) {
  return (
    <>
      <Link
        href={item.href}
        className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 hover:border-gray-700"
      >
        <h5 className="mb-4 text-xl font-medium dark:text-gray-400">
          {item.title}
        </h5>
        <p className="text-base font-normal mt-2">{item.desc}</p>
      </Link>
    </>
  );
}
