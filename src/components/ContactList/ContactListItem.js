import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={s.item}>
      <span>{name}:</span>
      <span>{number}</span>
      <button type="button" className={s.buttonDelete} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
