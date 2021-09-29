import React, {ChangeEvent} from "react";

type  NewNoteInputProps = {
  addNote(note: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({addNote}) => {
  const [note, setNote] = React.useState<string>("");

  const onAddNote = () => {
    addNote(note);
    setNote("");
  };

  return (
    <div>
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setNote(e.target.value);
        }}
        value={note}
        type="text"
        name="note"
        placeholder="Note"
      />
      <button
        onClick={() => {
          onAddNote();
        }}
      >
        {" "}
        Add Noted{" "}
      </button>
    </div>
  );
};
