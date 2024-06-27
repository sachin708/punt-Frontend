// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const FontFamilySelector: React.FC<{
//   onSelectFamily: (fontFamily: string) => void;
// }> = ({ onSelectFamily }) => {
//   const [fonts, setFonts] = useState<string[]>([]);
//    console.log(fonts[46]);

//   useEffect(() => {
//     const fetchFonts = async () => {
//       const apiKey = 'AIzaSyBcF5Gi8V_LdiPvPSLh9mcvjMzhbrj1Yl8'; // Replace with your Google API key
//       try {
//         const response = await axios.get(
//           `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}&sort=popularity`
//         );
//         const allFonts = response.data.items.map((item: any) => item.family);
//         const uniqueFonts = Array.from(new Set<string>(allFonts)); // Ensure fonts are unique
//         setFonts(uniqueFonts.slice(0, 50)); // Set all fetched unique fonts
//       } catch (error) {
//         console.error('Error fetching fonts:', error);
//       }
//     };

//     fetchFonts();
//   }, []);

//   const handleFamilyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedFamily = e.target.value;
//     onSelectFamily(selectedFamily);
//   };

//   return (
//     <div>
//       <label htmlFor="fontFamily">Font Family:</label>
//       <select id="fontFamily" onChange={handleFamilyChange}>
//         {fonts.map((font, index) => (
//           (index==0||index==10||index==46||index==17)
//            && <option key={index} value={font}>
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

let FontFamilySelector: React.FC<{
  onSelectFamily: (fontFamily: string) => void;
}> = ({ onSelectFamily }) => {
  let [fonts, setFonts] = useState<string[]>([]);

  useEffect(() => {
    const fetchFonts = async () => {
      const apiKey = 'AIzaSyBcF5Gi8V_LdiPvPSLh9mcvjMzhbrj1Yl8'; // Replace with your Google API key
      const response = await axios.get(
        `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}&sort=popularity&fields=items(family)`
      );
      const topFonts = response.data.items.slice(0, 12).map((item: any) => item.family);
      const uniqueFonts = Array.from(new Set<string>(topFonts)); // Ensure fonts are unique
      setFonts(uniqueFonts);
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

