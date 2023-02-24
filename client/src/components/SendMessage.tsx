import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useOTP from "../hooks/useOTP";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ErrorMessage from "./ErrorMessage";

type Props = {
  userId: number;
  firstName: string;
  lastName: string;
  phone: string;
};

// http://localhost:8800/sendmessage
// http://localhost:8000/messages

// https://contacts-app-backend-36uz.onrender.com
// https://fake-contacts-9jle.onrender.com/messages

const SendMessage = ({ userId, firstName, lastName, phone }: Props) => {
  const { OTP } = useOTP({});
  const [text, setText] = useState<string>("");
  const [textError, setTextError] = useState<string>("");
  const { singleData, error, loading, fetchData } = useFetch({});
  const navigate = useNavigate();

  const {
    singleData: messageData,
    error: messageError,
    loading: messageLoading,
    fetchData: messageFetchData,
  } = useFetch({});

  useEffect(() => {
    setText(`Hi, Your OTP is: ${OTP}.`);
  }, [OTP]);

  const handleSubmit = () => {
    // Reset Text Error
    setTextError("");

    // Error if no text is given
    if (text.length === 0) {
      setTextError("Message cannot be empty.");
      return;
    }

    // Error if 6 digit OTP is not generated
    if (/[0-9]{6}/.test(text)) {
      setTextError("6 Digit OTP is not generated. Try refreshing this page.");
      return;
    }

    const database = {
      message: text,
      phone: phone,
    };

    // Send message when no error
    if(!textError) {
      fetchData("https://contacts-app-backend-36uz.onrender.com/sendmessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(database),
      });
    }
  };

  useEffect(() => {
    const messages = {
      id: uuidv4(),
      userId: userId,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      date: new Date(),
      message: text,
      OTP: OTP,
    };

    const debounced = setTimeout(() => {
      if (singleData) {
        messageFetchData("https://fake-contacts-9jle.onrender.com/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(messages),
        });
      }
    }, 1000);

    return () => clearTimeout(debounced);
  }, [
    singleData,
    userId,
    firstName,
    lastName,
    phone,
    OTP,
    text,
    messageFetchData,
  ]);

  useEffect(() => {
    if (messageData) navigate("/");
  }, [messageData, navigate]);

  return (
    <>
      <div className="card-body">
        <h2 className="text-center font-semibold text-2xl">Send Message</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
              setText(e.target.value)
            }
            value={text}
            placeholder="Your message..."
            className="textarea textarea-bordered textarea-lg w-full"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={loading || messageLoading}
          >
            {loading || messageLoading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>

      {/* When Error occurs */}
      {(!singleData || !messageData) &&
        (!loading || !messageLoading) &&
        (error || messageError || textError) && (
          <ErrorMessage error={error || messageError || textError} />
        )}
    </>
  );
};
export default SendMessage;
