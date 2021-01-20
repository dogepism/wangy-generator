import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TemplateComplete from './TemplateComplete';


function App() {
  // Declare a new state variable, which we'll call "count"
  const [words, setWords] = useState('');
  const [selection, setSelection] = useState('keqing')

  // eslint-disable-next-line
  const [template, setTemplate] = useState('');


  const onChange = (event) => {
    setWords(event.target.value);

  };
  useEffect(() => { setSelection('keqing') }, []);

  return (
    
    <div style={{ backgroundColor: '#121212', }}>
      <div className="container pt-5">
        <div className="row">
          <div className="col">
            <label className="textColorTheme">
              Name:
            </label>
            <input class="form-control" type="text" value={words} onChange={onChange} />
          </div>
          <div className="col">
            <label>
              Template
          </label>
            <select class="form-control" onChange={e => setSelection(e.target.value)}>
              <option selected value="keqing">template 1</option>
              <option value="venti">template 2</option>
              <option value="ganyu">template 3</option>
              <option value="qiqi">template 4</option>
            </select>

          </div>

          {console.log(selection)}
          {/* submit template */}

        </div>

        <div className="row">
          {template}
          <TemplateComplete selection={selection} words={words} />
        </div>
        <br />

      </div>
    </div>
  );
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
