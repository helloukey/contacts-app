import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import MessageDetails from "../components/message/MessageDetails";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import BackButton from "../components/BackButton";

type Props = {};
const Message = (props: Props) => {
  const { id } = useParams();
  const { singleData, error, loading, fetchData } = useFetch({});

  useEffect(() => {
    fetchData("http://localhost:8000/messages/" + id);
  }, [fetchData, id]);
  return (
    <div className="w-full h-full max-w-md mx-auto flex flex-col justify-center items-center gap-5 px-4">
      {/* When data available */}
      {singleData && !loading && !error && (
        <MessageDetails singleData={singleData} />
      )}
      {/* When loading */}
      {!singleData && loading && !error && <Loading />}
      {/* When Error */}
      {!singleData && !loading && error && <ErrorMessage error={error} />}
      {/* Back Button */}
      <BackButton />
    </div>
  );
};
export default Message;
