import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const addContact = createAction('contacts/add', (name, number) => {
  return {
    payload: {
      name: name,
      number: number,
      id: nanoid(),
  },
  }});

const deleteContact = createAction('contacts/delete');
const filterContact = createAction('contacts/filter');
const actions = { addContact, deleteContact, filterContact };

export default actions;
