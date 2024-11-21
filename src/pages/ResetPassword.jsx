import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext, useState } from "react";

export default function ResetPassword() {
  const { resetPassword } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const refEmail = location.state?.email;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    resetPassword(email)
      .then(() => {
        window.open("https://mail.google.com", "_blank");
        navigate("/login");
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  return (
    <section className="mx-auto w-11/12 max-w-screen-xl py-16">
      <div className="mx-auto flex max-w-[500px] items-center justify-center">
        <div className="w-full rounded-xl border p-8">
          <h1 className="pb-8 text-center text-3xl font-bold">
            Reset Password
          </h1>
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
                  defaultValue={refEmail}
                  required
                />
              </label>
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}

            <div className="grid grid-cols-1 gap-4">
              <button
                type="submit"
                className="w-full rounded-md bg-[#58cc02] p-2 font-bold text-white"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
