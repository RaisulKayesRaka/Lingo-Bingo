import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <section className="mx-auto w-11/12 max-w-screen-xl py-16">
      <div className="mx-auto flex max-w-screen-sm items-center justify-center">
        <div className="w-full rounded-xl border p-8">
          <h1 className="pb-8 text-center text-3xl font-bold">Log In</h1>
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4">
              <label htmlFor="name">
                <strong>Email</strong>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  id="email"
                  className="w-full rounded-md border p-2"
                />
              </label>
              <label htmlFor="photoUrl">
                <strong>Password</strong>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                  className="w-full rounded-md border p-2"
                />
              </label>
            </div>
            <Link to="/" className="underline">Forgot Password</Link>
            <div className="grid grid-cols-1 gap-4">
              <button
                type="submit"
                className="w-full rounded-md bg-[#58cc02] p-2 font-bold text-white"
              >
                Log In
              </button>
              <button
                type="submit"
                className="w-full rounded-md bg-[#58cc02] p-2 font-bold text-white"
              >
                Log In with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
