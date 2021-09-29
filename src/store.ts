import { createStore } from "redux";
import { notesReducer } from "./notesRAeducer";


export const store = createStore(notesReducer)

