// src/components/FontWeightSelector.tsx
import React, { useState, useEffect } from 'react';

const FontWeightSelector: React.FC<{
  selectedFamily: string | null;
  onSelectWeight: (fontWeight: string) => void;
}> = ({ selectedFamily, onSelectWeight }) => {
  const [weights, setWeights] = useState<string[]>([]);

  useEffect(() => {
    const fetchWeights = async () => {
      if (!selectedFamily) return;

      // Mocked weights for demo, replace with actual logic to fetch weights for selected font family
      const mockedWeights = ['100', '200', '400', '600', '700'];
      setWeights(mockedWeights);
    };

    fetchWeights();
  }, [selectedFamily]);

  const handleWeightChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedWeight = e.target.value;
    onSelectWeight(selectedWeight);
  };

  return (
    <div>
      <label htmlFor="fontWeight">Font Weight:</label>
      <select id="fontWeight" onChange={handleWeightChange}>
        {weights.map((weight) => (
          <option key={weight} value={weight}>
            {weight}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontWeightSelector;
