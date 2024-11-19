import { NavLink } from "react-router-dom";

export default function Header() {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/start-learning">Start Learning</NavLink>
      </li>
      <li>
        <NavLink to="/tutorials">Tutorials</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
    </>
  );
  return (
    <header className="sticky top-0 z-50 bg-white/50 py-4 backdrop-blur">
      <section className="mx-auto w-11/12 max-w-screen-xl">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4">
          <div className="dropdown inline-block md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-ghost justify-normal p-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <div className="flex items-center justify-start gap-2">
            <img src="/logo.svg" alt="" className="h-8 w-8 sm:h-10 sm:w-10" />
            <h2 className="text-xl font-bold sm:text-2xl">Lingo Bingo</h2>
          </div>
          <div className="hidden items-center justify-center md:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="flex items-center justify-end gap-4">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="avatar btn btn-circle btn-ghost"
              >
                <div className="h-8 w-8 rounded-full border bg-gray-100 sm:h-10 sm:w-10">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://robohash.org/4"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
              >
                <li>
                  <a>My Profile</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
