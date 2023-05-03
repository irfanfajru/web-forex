import TransactionTable from "./transactionTable";

export const metadata = {
  title: "Admin - Transactions",
};
export default function Transactions() {
  return (
    <div>
      <h1 className="text-center mb-4 mt-4 text-2xl font-extrabold tracking-tight leading-none">
        Transactions
      </h1>
      <hr></hr>
      <div className="m-4">
        <div className="rounded-lg shadow border p-1">
          <TransactionTable />
        </div>
      </div>
    </div>
  );
}
