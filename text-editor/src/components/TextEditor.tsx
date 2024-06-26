import React, { useState } from 'react';

let TextEditor: React.FC<{
  fontFamily: string | null;
  fontWeight: string | null;
  italicEnabled: boolean;
  onSave: (text: string, fontFamily: string | null, fontWeight: string | null, italicEnabled: boolean) => void;
}> = ({ fontFamily, fontWeight, italicEnabled, onSave }) => {
  const [text, setText] = useState('');

  const handleReset = () => {
    setText('');
    localStorage.removeItem('editorState');
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  
  const handleSubmit = () => {
    onSave(text, fontFamily || '', fontWeight || '', italicEnabled);
    // Save to local storage
    const editorState = {
      text,
      fontFamily: fontFamily || '',
      fontWeight: fontWeight || '',
      italicEnabled,
    };
    localStorage.setItem('editorState', JSON.stringify(editorState));
  };

  return (
    <div style={{ width:"90%"}}>
      <textarea
        style={{
          fontFamily: fontFamily || 'Arial',
          fontWeight: fontWeight || 'normal',
          fontStyle: italicEnabled ? 'italic' : 'normal',
        }}
        value={text}
        onChange={handleChange}
      />
      <br />
      <div style={{display:"flex", justifyContent:"space-around"}}>
      <button onClick={handleReset}>Reset</button>

      <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default TextEditor;

