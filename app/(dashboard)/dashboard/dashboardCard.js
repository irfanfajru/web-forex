import Link from "next/link";

export default function DashboardCard({ item }) {
  return (
    <>
      <Link
        href={item.href}
        className="h-fit flex gap-2 items-center max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
      >
        <div className="rounded-lg shadow p-4">
          <item.icon className="w-12 h-12 text-gray-700" />
        </div>
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {item.desc}
          </p>
        </div>
      </Link>
    </>
  );
}
