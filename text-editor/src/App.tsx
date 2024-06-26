import React, { useState } from 'react';
import './App.css';
import FontFamilySelector from './components/FontFamilySelector';
import FontWeightSelector from './components/FontWeightSelector'; // You need to create this component
import ItalicToggle from './components/ItalicToggle';
import TextEditor from './components/TextEditor';
import ResetSubmitButtons from './components/ResetSubmitButtons';

const App: React.FC = () => {
  const [fontFamily, setFontFamily] = useState<string | null>(null);
  const [fontWeight, setFontWeight] = useState<string | null>(null);
  const [italicEnabled, setItalicEnabled] = useState(false);

  // Load editor state from localStorage on component mount
  React.useEffect(() => {
    const savedState = localStorage.getItem('editorState');
    if (savedState) {
      const { text, fontFamily, fontWeight, italicEnabled } = JSON.parse(savedState);
      setFontFamily(fontFamily);
      setFontWeight(fontWeight);
      setItalicEnabled(italicEnabled);
    }
  }, []);

  const handleFontFamilyChange = (selectedFamily: string) => {
    setFontFamily(selectedFamily);
  };

  const handleFontWeightChange = (selectedWeight: string) => {
    setFontWeight(selectedWeight);
  };

  const handleItalicToggle = () => {
    setItalicEnabled(!italicEnabled);
  };

  const handleSave = (text: string, fontFamily: string, fontWeight: string, italicEnabled: boolean) => {
    // Handle save logic here (e.g., save to local storage)
    console.log('Saving:', { text, fontFamily, fontWeight, italicEnabled });
    const editorState = {
      text,
      fontFamily,
      fontWeight,
      italicEnabled,
    };
    localStorage.setItem('editorState', JSON.stringify(editorState));
  };

  const handleReset = () => {
    // Reset editor state
    setFontFamily(null);
    setFontWeight(null);
    setItalicEnabled(false);
    localStorage.removeItem('editorState');
  };

  return (
    <div className="App">
      <h1>Text Editor</h1>
      <FontFamilySelector onSelectFamily={handleFontFamilyChange} />
      <br></br>
      <FontWeightSelector selectedFamily={fontFamily} onSelectWeight={handleFontWeightChange} />
      <ItalicToggle italicEnabled={italicEnabled} onToggleItalic={handleItalicToggle} />
      <TextEditor
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        italicEnabled={italicEnabled}
        onSave={handleSave}
      />
      <ResetSubmitButtons onReset={handleReset} onSubmit={() => {}} />
    </div>
  );
};

export default App;
