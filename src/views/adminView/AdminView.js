import React, { useState, useEffect } from 'react';
import GrapesJS from 'grapesjs';
import axios from 'axios';

const AdminView = () => {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const editorInstance = GrapesJS.init({
      container: '#editor',
      plugins: [],
      height: '100vh',
      storageManager: false, // Handle storage manually
      canvas: {
        styles: ['https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'],
      },
    });

    // Add custom blocks for quiz components
    editorInstance.BlockManager.add('progress-bar', {
      label: 'Progress Bar',
      content: '<div class="progress"><div class="progress-bar" style="width: 50%;"></div></div>',
    });
    editorInstance.BlockManager.add('timer', {
      label: 'Timer',
      content: '<div class="timer">00:30</div>',
    });
    editorInstance.BlockManager.add('question-text', {
      label: 'Question Text',
      content: '<h4>Enter your question here</h4>',
    });
    editorInstance.BlockManager.add('options', {
      label: 'Options',
      content: `
        <div class="options">
          <button class="btn btn-primary">Option 1</button>
          <button class="btn btn-primary">Option 2</button>
          <button class="btn btn-primary">Option 3</button>
          <button class="btn btn-primary">Option 4</button>
        </div>
      `,
    });

    setEditor(editorInstance);

    return () => editorInstance.destroy();
  }, []);

  const saveGrid = async () => {
    const data = editor.getComponents();
    await axios.post('/api/save-grid', { gridData: data });
    alert('Grid saved successfully!');
  };

  return (
    <div>
      <button onClick={saveGrid} className="btn btn-success m-2">Save Grid</button>
      <div id="editor"></div>
    </div>
  );
};

export default AdminView;
