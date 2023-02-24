import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import Loading from "../Loading";

type Props = {};

// https://fake-contacts-9jle.onrender.com
// http://localhost:8000/contacts

const ContactsTable = (props: Props) => {
  const { data, error, loading, fetchData } = useFetch({});

  useEffect(() => {
    fetchData("https://fake-contacts-9jle.onrender.com/contacts");
  }, [fetchData]);

  return (
    <>
      <div className="overflow-x-auto overflow-y-auto">
        {/* Data when available */}
        {data && !loading && !error && (
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <th>
                    <Link to={`/contact/${item.id}`}>{item.id}</Link>
                  </th>
                  <td>
                    <Link to={`/contact/${item.id}`}>{item.firstName}</Link>
                  </td>
                  <td>
                    <Link to={`/contact/${item.id}`}>{item.lastName}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* When data is loading */}
        {!data && loading && !error && (
          <div className="flex justify-center items-center">
            <Loading />
          </div>
        )}

        {/* When Error occurs */}
        {!data && !loading && error && <ErrorMessage error={error} />}
      </div>
    </>
  );
};
export default ContactsTable;
