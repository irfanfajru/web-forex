import Header from "./header";

export default function AdminLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
