import { Command } from 'commander';

import {
    listContacts,
    getContactById,
    addContact,
    removeContact,
} from './contacts.js';

const program = new Command();

program
    .option("-a, --action <type>", "action to perform")
    .option("-i, --id <id>", "contact id")
    .option("-n, --name <name>", "contact name")
    .option("-e, --email <email>", "contact email")
    .option("-p, --phone <phone>", "contact phone");

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
