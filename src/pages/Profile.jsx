import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Helmet>
        <title>Profile | Lingo Bingo</title>
      </Helmet>
      <section className="mx-auto w-11/12 max-w-screen-xl py-16">
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="mb-4 text-center text-3xl font-extrabold">
            Welcome!
            <br /> {user?.displayName || "User "}
          </h1>
          <img
            src={user?.photoURL ? user.photoURL : `https://placehold.co/200`}
            className="h-32 w-32 rounded-full border-4 border-gray-300"
            alt="Profile"
          />
          <div className="text-center">
            <p className="text-xl font-bold text-gray-700">
              {user?.displayName}
            </p>
            <p className="text-gray-500">{user?.email}</p>
          </div>
          <Link
            to="/updateProfile"
            className="mt-4 rounded-lg bg-[#58cc02] px-4 py-2 text-white transition duration-200 hover:bg-green-500"
          >
            Update Profile
          </Link>
        </div>
      </section>
    </>
  );
}
