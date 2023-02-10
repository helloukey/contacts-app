import SendMessageModal from "../Modal";
import SendMessage from "../SendMessage";
import { Details } from "../../hooks/useFetch";

type Props = {
  avatar: string;
  singleData: Details;
};
const ContactDetails = ({ avatar, singleData }: Props) => {
  return (
    <div className="w-full max-w-md mx-auto flex justify-center items-center">
      <div className="w-full card lg:card-side bg-base-100 shadow-2xl">
        <figure className="w-32 lg:w-full mx-auto mt-8 lg:mt-0 p-4">
          <img
            src={avatar}
            alt="avatar"
            className="w-full h-full object-contain rounded-full lg:rounded-none"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl mx-auto whitespace-nowrap">
            {singleData?.firstName} {singleData?.lastName}
          </h2>
          <h3 className="font-semibold mx-auto whitespace-nowrap">
            {singleData?.phone}
          </h3>
          <div className="card-actions justify-end mt-4">
            <SendMessageModal
              title="Send Message"
              buttonSize="small"
              id="sendmodal"
            >
              <SendMessage
                userId={Number(singleData?.id)}
                firstName={singleData?.firstName}
                lastName={singleData?.lastName}
                phone={singleData?.phone}
              />
            </SendMessageModal>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactDetails;
