import { Command } from 'commander';

import {
    listContacts,
    getContactById,
    addContact,
    removeContact,
} from './contacts.js';

const program = new Command();

program
    .option('--action <type>', 'choose action')
    .option('--id <type>', 'contact id')
    .option('--name <type>', 'contact name')
    .option('--email <type>', 'contact email')
    .option('--phone <type>', 'contact phone');

program.parse(process.argv);

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case 'list':
            console.table(await listContacts());
            break;

        case 'get':
            console.log(await getContactById(id));
            break;

        case 'add':
            console.log(await addContact(name, email, phone));
            break;

        case 'remove':
            console.log(await removeContact(id));
            break;

        default:
            console.warn('Unknown action');
    }
}

invokeAction(options);
