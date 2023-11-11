import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="p-5 bg-slate-400 flex items-center justify-center">
      <Link className="mr-2" href={"/"}>
        Home
      </Link>
      <Link href={"/"}>About</Link>
    </nav>
  );
};

export default Navbar;
