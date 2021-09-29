export type Action = {
  type: "ADD_NOTE";
  payload: string;
};

export const addNote = (notes:string): Action => ({
    type: "ADD_NOTE",
    payload: notes
});
