

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const FontFamilySelector: React.FC<{
//   onSelectFamily: (fontFamily: string) => void;
// }> = ({ onSelectFamily }) => {
//   const [fonts, setFonts] = useState<string[]>([]);
//   const [nextPageToken, setNextPageToken] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchFonts = async () => {
//       const apiKey = 'AIzaSyBcF5Gi8V_LdiPvPSLh9mcvjMzhbrj1Yl8'; // Replace with your Google API key
//       let apiUrl = `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}&sort=popularity`;

//       if (nextPageToken) {
//         apiUrl += `&pageToken=${nextPageToken}`;
//       }

//       const response = await axios.get(apiUrl);
//       console.log(response.data.items)
//       setFonts((prevFonts) => [...prevFonts, ...response.data.items.map((item: any) =>  item.family )]);
//       setNextPageToken(response.data.nextPageToken);
//     };

//     fetchFonts();
//   }, [nextPageToken]);

//   const handleFamilyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedFamily = e.target.value;
//     onSelectFamily(selectedFamily);
//   };

//   return (
//     <div>
//       <label htmlFor="fontFamily">Font Family:</label>
//       <select id="fontFamily" onChange={handleFamilyChange}>
//         {fonts.map((font, index) => (
//           <option key={index} value={font}>
//             {font}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default FontFamilySelector;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FontFamilySelector: React.FC<{
  onSelectFamily: (fontFamily: string) => void;
}> = ({ onSelectFamily }) => {
  const [fonts, setFonts] = useState<string[]>([]);

  useEffect(() => {
    const fetchFonts = async () => {
      const apiKey = 'AIzaSyBcF5Gi8V_LdiPvPSLh9mcvjMzhbrj1Yl8'; // Replace with your Google API key
      const response = await axios.get(
        `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}&sort=popularity&fields=items(family)`
      );
      const topFonts = response.data.items.slice(0, 10).map((item: any) => item.family);
      setFonts(topFonts);
    };

    fetchFonts();
  }, []);

  const handleFamilyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFamily = e.target.value;
    onSelectFamily(selectedFamily);
  };

  return (
    <div>
      <label htmlFor="fontFamily">Font Family:</label>
      <select id="fontFamily" onChange={handleFamilyChange}>
        {fonts.map((font, index) => (
          <option key={index} value={font}>
            {font}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontFamilySelector;



