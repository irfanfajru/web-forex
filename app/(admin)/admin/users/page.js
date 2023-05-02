import UserTable from "./userTable";

export const metadata = {
  title: "Admin - Users",
};
export default function Users() {
  return (
    <div>
      <h1 className="text-center mb-4 mt-4 text-2xl font-extrabold tracking-tight leading-none">
        Users
      </h1>
      <hr></hr>
      <div className="m-4 grid gap-4 grid-cols-1 sm:grid-cols-2 ">
        <UserTable />
      </div>
    </div>
  );
}
