// import React from 'react';
// import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
// import Header from '../components/Header';

// const ColorPicker = () => {
//   // Function to handle color change
//   const handleColorChange = (args) => {
//     document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
//   };

//   return (
//     <div className="m-4 md:m-10 mt-24 p-4 md:p-10 bg-white rounded-3xl shadow-md">
//       <Header category="App" title="Color Picker" />

//       <div className="text-center">
//         {/* ✅ Preview Box */}
//         <div
//           id="preview"
//           className="h-32 w-full md:w-96 mx-auto mb-8 rounded-lg border border-gray-300 flex items-center justify-center text-white text-lg font-semibold"
//         />
        

//         <div className="flex justify-center items-start gap-16 flex-wrap">
//           {/* 🎨 Inline Palette */}
//           <div>
//             <p className="text-xl font-semibold mb-4">Inline Palette</p>
//             <ColorPickerComponent
//               id="inline-palette"
//               mode="Palette"
//               modeSwitcher={false}
//               inline
//               showButtons={false}
//               change={handleColorChange} // ✅ bind
//             />
//           </div>

//           {/* 🖋️ Popup Picker */}
//           <div>
//             <p className="text-xl font-semibold mb-4">Popup Picker (Pen Icon)</p>
//             <ColorPickerComponent
//               id="popup-picker"
//               mode="Picker"
//               modeSwitcher={false}
//               inline
//               showButtons={false}
//               change={handleColorChange} // ✅ bind
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ColorPicker;




import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import Header from '../components/Header';

const ColorPicker = () => {
  // 🖌️ Handle color change
  const handleColorChange = (args) => {
    document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
  };

  return (
    <div className="m-4 md:m-10 mt-24 p-4 md:p-10 bg-white dark:bg-[#1e293b] rounded-3xl shadow-md dark:shadow-lg">
      <Header category="App" title="Color Picker" />

      <div className="text-center">
        {/* 🎨 Color Preview Box */}
        <div
          id="preview"
          className="h-32 w-full md:w-96 mx-auto mb-8 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center text-white text-lg font-semibold"
        >
          Preview
        </div>

        {/* 🧩 Color Pickers */}
        <div className="flex justify-center items-start gap-16 flex-wrap text-gray-800 dark:text-gray-200">
          {/* 🎨 Inline Palette */}
          <div>
            <p className="text-xl font-semibold mb-4">Inline Palette</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={handleColorChange}
            />
          </div>

          {/* 🖋️ Popup Picker */}
          <div>
            <p className="text-xl font-semibold mb-4">Popup Picker (Pen Icon)</p>
            <ColorPickerComponent
              id="popup-picker"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={handleColorChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
