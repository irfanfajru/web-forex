import Header from "./header";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
