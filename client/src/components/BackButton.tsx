import { Link } from "react-router-dom";

type Props = {};
const BackButton = (props: Props) => {
  return (
    <Link to="/" className="mt-4">
      <button className="btn btn-outline btn-xs">« Go Back</button>
    </Link>
  );
};
export default BackButton;
