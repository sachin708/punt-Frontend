// src/components/ItalicToggle.tsx
import React from 'react';

const ItalicToggle: React.FC<{
  italicEnabled: boolean;
  onToggleItalic: () => void;
}> = ({ italicEnabled, onToggleItalic }) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={italicEnabled} onChange={onToggleItalic} />
        Italic
      </label>
    </div>
  );
};

export default ItalicToggle;
