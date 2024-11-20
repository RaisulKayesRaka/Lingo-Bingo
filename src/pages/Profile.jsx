import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <section className="w-11/12 mx-auto max-w-screen-xl py-16">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-center mb-8 text-2xl font-bold">Welcome<br/>UserName</h1>
        <img src="" className="w-32 h-32 rounded-full border" alt="" />
        <div className="text-center">
        <p className="font-semibold text-lg">Username</p>
        <p>example@gmail.com</p>

        </div>
        <Link to="/updateProfile" className="btn btn-sm text-white bg-[#58cc02]">Update Profile</Link>
      </div>
    </section>
  )
}
