import PriceCard from "./priceCard";
export const metadata = {
  title: "Langganan",
};
const priceList = [
  {
    title: "1 Month Plan",
    price: 150,
    month: 1,
    refPrice: 130,
  },
  {
    title: "3 Months Plan",
    price: 140,
    month: 3,
    refPrice: 110,
  },
  { title: "1 Year Plan", price: 130, month: 12, refPrice: 100 },
];
export default function Langganan() {
  return (
    <div>
      <h1 className="text-center mb-4 mt-4 text-2xl font-extrabold tracking-tight leading-none">
        Price List
      </h1>
      <hr></hr>
      <div className="m-4 grid gap-8 grid-cols-1 sm:grid-cols-3 ">
        {priceList.map((val, index) => (
          <PriceCard item={val} key={`list${index}`} />
        ))}
      </div>
    </div>
  );
}
