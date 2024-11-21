import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext, useState } from "react";

export default function UpdateProfile() {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;

    updateUserProfile({ displayName: name, photoURL: photoUrl })
      .then(() => {
        navigate("/profile");
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
            Update Profile
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4">
              <label htmlFor="name">
                <strong>Name</strong>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  id="name"
                  className="w-full rounded-md border p-2"
                  defaultValue={user?.displayName}
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
                  defaultValue={user?.photoURL}
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
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
