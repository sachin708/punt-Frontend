# punt-Frontend
### Simple Text Editor
Overview This project is a simple text editor built with React and TypeScript. It allows users to customize the text with various font families, weights, and styles. The editor supports auto-save functionality, saving the text and font settings locally in the browser. On reloading the page, the existing content and settings are restored.

### Features
Font Family Selector: Choose from a list of Google Fonts. Font Weight Selector: Select the appropriate font weight for the chosen font family. Italic Toggle: Toggle italic style if the selected font family and weight combination supports it. Auto Save: Automatically saves the text and font settings in local storage. Reset Button: Resets the text and font settings to their defaults. Submit Button: Simulates form submission.

### Installation
To set up the project locally, follow these steps:

### Clone the repository:
https://github.com/sachin708/Punt_Partners.git cd simple-text-editor

### Install dependencies:
npm install

### Start the development server:
npm start

### Here's an example of an attractive README file for the project:

Simple Text Editor Overview This project is a simple text editor built with React and TypeScript. It allows users to customize the text with various font families, weights, and styles. The editor supports auto-save functionality, saving the text and font settings locally in the browser. On reloading the page, the existing content and settings are restored.

Features Font Family Selector: Choose from a list of Google Fonts. Font Weight Selector: Select the appropriate font weight for the chosen font family. Italic Toggle: Toggle italic style if the selected font family and weight combination supports it. Auto Save: Automatically saves the text and font settings in local storage. Reset Button: Resets the text and font settings to their defaults. Submit Button: Simulates form submission. Installation To set up the project locally, follow these steps:

### Clone the repository:

sh Copy code git clone https://github.com/yourusername/simple-text-editor.git cd simple-text-editor Install dependencies:

sh Copy code npm install Start the development server:

sh Copy code npm start Run tests:

sh Copy code npm test Usage Select Font Family: Use the dropdown to select a font family. Select Font Weight: Use the dropdown to select a font weight. Toggle Italic: Check the box to apply italic style if available. Reset: Click the "Reset" button to clear the text and reset settings. Submit: Click the "Submit" button to simulate form submission.

### Assumptions
The font data is provided via a JSON file. Local storage is used to save the text and font settings. The application assumes default values for font settings (Roboto, 400 weight, non-italic).

### Project Structure
text-editor/
</br>
├── public/
</br>
│ └── index.html
</br>
├── src/
</br>
│ ├── components/
</br>
│ │ ├── Editor.tsx
</br>
│ │ ├── FontSelector.tsx
</br>
│ │ └── App.tsx
</br>
│ ├── types/
</br>
│ │ └── index.ts
</br>
│ ├── styles/
</br>
│ │ └── App.css
</br>
│ ├── fonts.json
</br>
│ └── index.tsx
</br>
├── .gitignore
</br>
├── package.json
</br>
├── README.md
</br>
└── tsconfig.json
</br>

### Video Presentation Link :- https://drive.google.com/file/d/1Hc8k5huyGfI_Gs4EDJcPSr8YTlzuKG5-/view?usp=sharing
