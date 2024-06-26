// src/components/ResetSubmitButtons.tsx
import React from 'react';

const ResetSubmitButtons: React.FC<{
  onReset: () => void;
  onSubmit: () => void;
}> = ({ onReset, onSubmit }) => {
  return (
    <div>
      {/* <button onClick={onReset}>Reset</button>
      <button onClick={onSubmit}>Submit</button> */}
    </div>
  );
};

export default ResetSubmitButtons;
