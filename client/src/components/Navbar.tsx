import { Link } from "react-router-dom";

type Props = {};
const Navbar = (props: Props) => {
  return (
    <div className="navbar bg-base-100 fixed top-0">
      <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold">Contacts App</Link>
    </div>
  );
};
export default Navbar;
