import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ErrorMessage from "../ErrorMessage";
import Loading from "../Loading";
dayjs.extend(relativeTime);

type Props = {};

const MessagesTable = (props: Props) => {
  const {
    data: messages,
    error: messagesError,
    loading: messagesLoading,
    fetchData: messagesFetchData,
  } = useFetch({});

  useEffect(() => {
    messagesFetchData("http://localhost:8000/messages");
  }, [messagesFetchData]);

  return (
    <div>
      {/* When Data is available */}
      {messages && !messagesLoading && !messagesError && (
        <div className="overflow-x-auto overflow-y-auto">
          <table className="table w-full">
            {/* Head */}
            <thead>
              <tr>
                <th></th>
                <th>Full Name</th>
                <th>Date</th>
                <th>OTP</th>
              </tr>
            </thead>
            <tbody>
              {messages
                .sort(
                  (item1, item2) =>
                    Number(new Date(item2.date)) - Number(new Date(item1.date))
                )
                .map((item, index) => (
                  <tr key={item.id}>
                    <th>
                      <Link to={`/message/${item.id}`}>{index + 1}</Link>
                    </th>
                    <td>
                      <Link to={`/message/${item.id}`}>
                        {item.firstName} {item.lastName}
                      </Link>
                    </td>
                    <td>
                      <Link to={`/message/${item.id}`}>
                        {dayjs(item.date).fromNow()}
                      </Link>
                    </td>
                    <td>
                      <Link to={`/message/${item.id}`}>{item.OTP}</Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      {/* When Data is Loading */}
      {!messages && messagesLoading && !messagesError && <Loading />}

      {/* When Error occurs */}
      {!messages && !messagesLoading && messagesError && (
        <ErrorMessage error={messagesError} />
      )}
    </div>
  );
};
export default MessagesTable;
