import {
    listContacts,
    addContact,
    getContactById,
    removeContact,
} from './contacts.js';

console.log(await listContacts());

const added = await addContact(
    'Mango',
    'mango@mail.com',
    '322-22-22'
);
console.log(added);

console.log(await getContactById(added.id));
console.log(await removeContact(added.id));
