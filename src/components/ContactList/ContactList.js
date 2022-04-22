import React from 'react';
import ContactListItem from './ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/selectors';
import actions from '../../redux/actions';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDelete = id => dispatch(actions.deleteContact(id));

return (
  <ul className={s.list}>
    {contacts.map(contact => (
      <ContactListItem
        key={contact.id}
        id={contact.id}
        name={contact.name}
        number={contact.number}
        onDelete={onDelete}
      />
    ))}
  </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
  }),
  ),
}

export default ContactList;
