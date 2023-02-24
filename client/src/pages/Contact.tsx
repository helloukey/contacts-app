import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import ContactDetails from "../components/contact/ContactDetails";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import avatar from "../assets/avatar.svg";
import BackButton from "../components/BackButton";

type Props = {};
// https://jittery-pear-drawers.cyclic.app/contacts
// http://localhost:8000/contacts

const Contact = (props: Props) => {
  const { id } = useParams();
  const { singleData, error, loading, fetchData } = useFetch({});

  useEffect(() => {
    fetchData("https://jittery-pear-drawers.cyclic.app/contacts/" + id);
  }, [fetchData, id]);
  return (
    <div className="w-full h-full max-w-md mx-auto flex flex-col justify-center items-center gap-5 px-4">
      {/* When data available */}
      {singleData && !loading && !error && (
        <ContactDetails avatar={avatar} singleData={singleData} />
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
export default Contact;
