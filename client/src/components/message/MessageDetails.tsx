import { Details } from "../../hooks/useFetch";

type Props = {
  singleData: Details;
};
const MessageDetails = ({ singleData }: Props) => {
  return (
    <div className="w-full max-w-md mx-auto flex justify-center items-center">
      <div className="w-full mockup-window border border-base-300 shadow-2xl">
        <div className="w-full flex flex-col justify-center p-8 border-t border-base-300">
          <h2 className="text-2xl font-semibold">
            {singleData?.firstName} {singleData?.firstName}
          </h2>
          <p className="font-semibold">{singleData?.phone}</p>
          <p className="my-4">{singleData?.message}</p>
        </div>
      </div>
    </div>
  );
};
export default MessageDetails;
