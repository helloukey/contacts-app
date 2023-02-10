import ContactsTable from "../components/contact/ContactsTable";
import ContactsModal from "../components/Modal";
import MessagesModal from "../components/Modal";
import MessagesTable from "../components/message/MessagesTable";

type Props = {};
const Home = (props: Props) => {
  return (
    <div className="w-full h-full max-w-md mx-auto flex flex-col md:flex-row justify-center items-center gap-5 px-4">
      <ContactsModal title="Contacts" buttonSize="large" id="contacts">
        <ContactsTable />
      </ContactsModal>
      <MessagesModal title="Messages" buttonSize="large" id="messages">
        <MessagesTable />
      </MessagesModal>
    </div>
  );
};
export default Home;
