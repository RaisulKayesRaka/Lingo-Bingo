export default function Register() {
  return (
    <section className="mx-auto w-11/12 max-w-screen-xl py-16">
      <div className="mx-auto flex max-w-screen-md items-center justify-center">
        <div className="w-full rounded-xl border p-8">
          <h1 className="pb-8 text-center text-3xl font-bold">Register</h1>
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="" htmlFor="name">
                <strong>Name</strong>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  id="name"
                  className="w-full rounded-md border p-2"
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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <button
                type="submit"
                className="w-full rounded-md bg-[#58cc02] p-2 font-bold text-white"
              >
                Register
              </button>
              <button
                type="submit"
                className="w-full rounded-md bg-[#58cc02] p-2 font-bold text-white"
              >
                Register with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
