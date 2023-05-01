import DashboardCard from "./dashboardCard";

export const metadata = {
  title: "Dashboard",
};
const cards = [
  {
    title: "Langganan",
    href: "/langganan",
    desc: "Choose your subscription plan",
  },
  {
    title: "Referral",
    href: "/referral",
    desc: "Share your referral code to get commission",
  },
  {
    title: "Invoice",
    href: "/invoice",
    desc: "View your invoice history",
  },
];
export default function Dashboard() {
  return (
    <div className="m-4">
      {/* welcome */}
      <div className="p-4 rounded-lg shadow ">
        <h2 className="text-xl font-medium">Welcome User</h2>
        <p>
          Active Plan :
          <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
            3 Months Plan
          </span>
        </p>
        <p>Active Until : {new Date().toDateString()}</p>
      </div>
      <div className="mt-4 gap-4 grid grid-cols-1 sm:grid-cols-3">
        {cards.map((e) => (
          <DashboardCard key={`${e.title}-card`} item={e} />
        ))}
      </div>
    </div>
  );
}
