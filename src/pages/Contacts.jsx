import ContactForm from "components/ContactForm/ContactForm";
import Filter from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";
import css from "./Pages.module.css";

const Contacts = () => {
    return (
      <div className={css.app}>
        <h1 className={css.head}>Phonebook</h1>
        <ContactForm />

        <h2 className={css.head}>Contacts</h2>
        <Filter />
        <ContactList/>
      </div>
    );
}

export default Contacts;