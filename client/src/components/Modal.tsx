type Props = {
  title: string;
  children: JSX.Element;
  buttonSize: string;
  id: string;
};
const Modal = ({ title, children, buttonSize, id }: Props) => {
  return (
    <div className={buttonSize === "large" ? "w-full" : "w-full lg:w-fit"}>
      {/* The button to open modal */}
      <label
        htmlFor={id}
        className={buttonSize === "large" ? "btn max-w-full w-full h-48" : "btn btn-primary w-full"}
      >
        {title}
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id={id} className="modal-toggle" />
      <label htmlFor={id} className="modal cursor-pointer">
        <label className="modal-box relative max-h-[512px]" htmlFor="">
          {children}
        </label>
      </label>
    </div>
  );
};
export default Modal;
