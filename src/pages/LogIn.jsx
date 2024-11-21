import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext, useState } from "react";

export default function LogIn() {
  const { setUser, userLogin } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };
  return (
    <section className="mx-auto w-11/12 max-w-screen-xl py-16">
      <div className="mx-auto flex max-w-[500px] items-center justify-center">
        <div className="w-full rounded-xl border p-8">
          <h1 className="pb-8 text-center text-3xl font-bold">Log In</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4">
              <label htmlFor="email">
                <strong>Email</strong>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  id="email"
                  className="w-full rounded-md border p-2"
                  required
                />
              </label>
              <label htmlFor="password">
                <strong>Password</strong>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                  className="w-full rounded-md border p-2"
                  required
                />
              </label>
            </div>
            {error.login && (
              <p className="text-sm text-red-500">{error.login}</p>
            )}
            <Link to="/" className="underline">
              Forgot Password
            </Link>
            <div className="grid grid-cols-1 gap-4">
              <button
                type="submit"
                className="w-full rounded-md bg-[#58cc02] p-2 font-bold text-white"
              >
                Log In
              </button>
              <button
                type="submit"
                className="w-full rounded-md border border-[#58cc02] p-2 font-bold text-[#58cc02]"
              >
                Log In with Google
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="underline">
              Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
