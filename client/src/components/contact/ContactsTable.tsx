import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import Loading from "../Loading";

type Props = {};

const ContactsTable = (props: Props) => {
  const { data, error, loading, fetchData } = useFetch({});

  useEffect(() => {
    fetchData("http://localhost:8000/contacts");
  }, [fetchData]);

  return (
    <>
      {/* When Data is available */}
      {data && !loading && !error && (
        <div className="overflow-x-auto overflow-y-auto">
          <table className="table w-full">
            {/* Head */}
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
        </div>
      )}

      {/* When Data is Loading */}
      {!data && loading && !error && (
        <Loading />
      )}

      {/* When Error occurs */}
      {!data && !loading && error && (
        <ErrorMessage error={error} />
      )}
    </>
  );
};
export default ContactsTable;
