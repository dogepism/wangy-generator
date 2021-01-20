import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TemplateComplete from './TemplateComplete';
import { ToggleButton, ButtonGroup } from 'react-bootstrap';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';



function App() {
  // Declare a new state variable, which we'll call "count"
  const [words, setWords] = useState('');
  const [selection, setSelection] = useState('keqing')

  const [checked, setChecked] = useState(false);
  const radios = [
    { name: 'Light Mode', value: 'light' },
    { name: 'Dark Mode', value: 'dark' },
  ];

  // eslint-disable-next-line
  const [template, setTemplate] = useState('');
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}

  const onChange = (event) => {
    setWords(event.target.value);

  };
  useEffect(() => { setSelection('keqing') }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles />
      <div>
        <div className="container pt-5">
          <div className="row">
            <div className="col">
              <label className={theme === 'light' ? "textColorTheme" : ""}>
                Name:
            </label>
              <input className="form-control" type="text" value={words} onChange={onChange} />
            </div>
            <div className="col">
              <label>
                Template
          </label>
              <select defaultValue="keqing" className="form-control" onChange={e => setSelection(e.target.value)}>
                <option value="keqing">template 1</option>
                <option value="venti">template 2</option>
                <option value="ganyu">template 3</option>
                <option value="qiqi">template 4</option>
              </select>

            </div>
          </div>

          <div className="row">
            {template}
            <TemplateComplete selection={selection} words={words} theme={theme} />
          </div>

          <br />

          <div className="row">
          <button onClick={themeToggler}>Switch Theme</button>
          </div>
        </div>
      </div>
      </>
    </ThemeProvider>
  );
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
