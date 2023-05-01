import ChangePassword from "./changePassword";
import EditForm from "./editForm";
import ProfileCard from "./profileCard";
export const metadata = {
  title: "User Profile",
};
export default function Profile() {
  return (
    <div className="m-4 grid gap-4 grid cols-1 md:grid-cols-3">
      <div>
        <ProfileCard />
      </div>
      <div className="md:col-span-2">
        <EditForm />
      </div>
      <div></div>
      <div className="md:col-span-2">
        <ChangePassword />
      </div>
    </div>
  );
}
