import css from "../Contact/Contact.module.css";

export const Contact = ({ name, number, id, deleteContact }) => {
  return (
    <>
      <span className={css.contactName}>{name}</span>
      <span className={css.contactNumber}>{number}</span>
      <button
        className={css.contactButton}
        onClick={() => deleteContact(id)}
        type="button"
      >
        Delete
      </button>
    </>
  );
};
