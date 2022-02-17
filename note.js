import fs from "fs";
import { successMessage, errorMessage, listItem, readItem } from "./app-log.js";
export const addNote = (title, body) => {
  try {
    const data = loadData();
    const dupNote = data.filter(function (note) {
      return note.title === title;
    });

    if (dupNote.length == 0) {
      data.push({
        title: title,
        body: body,
      });
      saveNotes(data);
      successMessage("Note save successfully.");
    } else {
      errorMessage("Title has already taken!");
    }
  } catch (err) {
    errorMessage(err);
  }
};

export const removeNote = (title) => {
  const data = loadData();
  const removeItem = data.filter((d) => d.title === title);

  if (removeItem.length !== 0) {
    let notes = data.filter((d) => d.title !== title);
    saveNotes(notes);
    successMessage("Note remove successfully.");
  } else {
    errorMessage("No item to remove");
  }
};

export const listNote = () => {
  const data = loadData();
  data.forEach((element) => {
    listItem(element.title);
  });
};

export const readNote = (title) => {
  const data = loadData();
  const item = data.filter((d) => d.title === title);
  if (item.length !== 0) {
    readItem(item[0].title, item[0].body);
  } else {
    errorMessage("No item found");
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const loadData = (path) => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (err) {
    return [];
  }
};
