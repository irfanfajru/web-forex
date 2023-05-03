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
      <div className="m-4 grid gap-4 grid-cols-1 sm:grid-cols-3 ">
        <div>
          <div className="rounded-lg bg-gray-800 shadow border">
            <div className="p-2 text-center rounded-r-md bg-white ml-2">
              <p className="font-normal text-gray-700">2</p>
              <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900">
                Total
              </h5>
            </div>
          </div>
          <div className="rounded-lg mt-2 bg-gray-800 shadow border">
            <div className="p-2 text-center rounded-r-md bg-white ml-2">
              <p className="font-normal text-gray-700">1</p>
              <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900">
                Subscribed
              </h5>
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <UserTable />
        </div>
      </div>
    </div>
  );
}
