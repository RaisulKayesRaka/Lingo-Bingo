import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

export default function Profile() {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <section className="w-11/12 mx-auto max-w-screen-xl py-16">
      <div className="flex flex-col gap-6 justify-center items-center">
        <h1 className="text-center mb-4 text-3xl font-extrabold">Welcome, {user?.displayName || "User "}!</h1>
        <img 
          src={user?.photoURL ? user.photoURL :`https://placehold.co/200`} 
          className="w-32 h-32 rounded-full border-4 border-gray-300" 
          alt="Profile"
        />
        <div className="text-center">
          <p className="font-bold text-xl text-gray-700">{user?.displayName}</p>
          <p className="text-gray-500">{user?.email}</p>
        </div>
        <Link 
          to="/updateProfile" 
          className="mt-4 px-4 py-2 text-white bg-[#58cc02] hover:bg-green-500 rounded-lg transition duration-200"
        >
          Update Profile
        </Link>
      </div>
    </section>
  );
}