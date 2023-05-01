import DashboardCard from "./dashboardCard";
import { ShoppingCartIcon, ListBulletIcon } from "@heroicons/react/20/solid";
export const metadata = {
  title: "Dashboard",
};
const cards = [
  {
    icon: ShoppingCartIcon,
    title: "Subscribe",
    href: "/subscribe",
    desc: "Choose your subscription plan",
  },
  {
    icon: ListBulletIcon,
    title: "Invoice",
    href: "/invoice",
    desc: "View your invoice history",
  },
];
export default function Dashboard() {
  return (
    <div className="m-4">
      {/* welcome */}
      <h2 className="text-xl font-medium">Welcome Bonnie Green!</h2>
      <div className="mt-4 gap-4 grid grid-cols-1 sm:grid-cols-3">
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center p-4">
            <img
              className="w-24 h-24 rounded-full shadow-lg"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Bonnie Green
            </h5>
            <div className="flex mb-4">
              <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                3 Months Plan
              </span>
              <p className="text-sm text-gray-500">
                {new Date().toDateString()}
              </p>
            </div>
          </div>
        </div>
        {cards.map((e) => (
          <DashboardCard key={`${e.title}-card`} item={e} />
        ))}
      </div>
    </div>
  );
}
