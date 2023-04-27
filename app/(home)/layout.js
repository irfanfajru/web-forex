import Header from "./header";
import Footer from "./footer";
export default function HomeLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
