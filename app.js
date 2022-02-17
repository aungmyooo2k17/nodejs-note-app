import yargs from "yargs";
import { addNote, removeNote, listNote, readNote } from "./note.js";

const log = console.log;

yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "remove a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "list notes",
  handler: function (argv) {
    listNote();
  },
});

yargs.command({
  command: "read",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  describe: "read a new note",
  handler: function (argv) {
    readNote(argv.title);
  },
});

yargs.parse();
