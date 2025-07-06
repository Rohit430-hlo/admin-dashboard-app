// import React from 'react';
// import {
//   HtmlEditor,
//   Image,
//   Inject,
//   Link,
//   QuickToolbar,
//   RichTextEditorComponent,
//   Toolbar
// } from '@syncfusion/ej2-react-richtexteditor';

// import { EditorData } from '../data/dummy';
// import { EditorHeader } from '../components/EditorHeader';

// const Editor = () => {
//   return (
//     <div className="w-full px-4 py-6 md:px-10 md:py-10 bg-white rounded-3xl shadow-md max-w-5xl mx-auto mt-24">
//       <EditorHeader category="App" title="Editor" />
      
//       <div className="mt-6">
//         <RichTextEditorComponent value={EditorData} height={400}>
//           <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
//         </RichTextEditorComponent>
//       </div>
//     </div>
//   );
// };

// export default Editor;



// import React from 'react'
// import {HtmlEditor , Image , Inject , Link , QuickToolbar , RichTextEditorComponent , Toolbar} from '@syncfusion/ej2-react-richtexteditor'

// import { EditorData } from '../data/editordummy'
// import {Header} from '../components'

// const Editor = () => {
//   return (
//     <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
//       <Header category={"App"} title={"Editor"} />

//       <RichTextEditorComponent

//         // value={EditorData}

//       >
//         <Inject services={[HtmlEditor , Toolbar , Image , Link , QuickToolbar ]}/>
//       </RichTextEditorComponent>
//     </div>
//   )
// }

// export default Editor


import React from 'react';
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar
} from '@syncfusion/ej2-react-richtexteditor';

import { EditorData } from '../data/editordummy';
import { Header } from '../components';

const Editor = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-[#1e293b] dark:text-gray-200 rounded-3xl transition-colors duration-300">
      <Header category={"App"} title={"Editor"} />

      <div className="mt-6">
        <RichTextEditorComponent
          // value={EditorData}
          className="dark:bg-[#1e293b] dark:text-white dark:border-gray-600"
        >
          <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
        </RichTextEditorComponent>
      </div>
    </div>
  );
};

export default Editor;
