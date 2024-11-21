import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Register() {
  const { setUser, createNewUser, updateUserProfile, googleLogIn } =
    useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photoUrl = form.get("photoUrl");
    const email = form.get("email");
    const password = form.get("password");
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!regex.test(password)) {
      setError(
        "Invalid Password. Ensure it has at least one uppercase, one lowercase, and is at least 6 characters long.",
      );
      return;
    }

    createNewUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photoUrl })
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            setError(error.code);
          });
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };
  return (
    <>
      <Helmet>
        <title>Register | Lingo Bingo</title>
      </Helmet>
      <section className="mx-auto w-11/12 max-w-screen-xl py-16">
        <div className="mx-auto flex max-w-screen-md items-center justify-center">
          <div className="w-full rounded-xl border p-8">
            <h1 className="pb-8 text-center text-3xl font-bold">Register</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="" htmlFor="name">
                  <strong>Name</strong>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    id="name"
                    className="w-full rounded-md border p-2"
                    required
                  />
                </label>
                <label htmlFor="photoUrl">
                  <strong>Photo URL</strong>
                  <input
                    type="text"
                    name="photoUrl"
                    placeholder="Photo URL"
                    id="photoUrl"
                    className="w-full rounded-md border p-2"
                    required
                  />
                </label>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label htmlFor="name">
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
                <label htmlFor="photoUrl">
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
              {error && <p className="text-sm text-red-500">{error}</p>}

              <div className="">
                <button
                  type="submit"
                  className="w-full rounded-md bg-[#58cc02] p-2 font-bold text-white"
                >
                  Register
                </button>
              </div>
            </form>
            <button
              onClick={handleGoogleLogIn}
              className="mt-4 w-full rounded-md border border-[#58cc02] p-2 font-bold text-[#58cc02]"
            >
              Register with Google
            </button>
            <div className="mt-4 text-center">
              Already have an account?{" "}
              <Link to="/login" className="underline">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
