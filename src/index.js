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
          <nav className={"navbar navbar-expand-lg" + (theme === 'light' ? " navbar-light bg-light" : " navbar-dark bg-dark")}>
            <a className="navbar-brand" href="#">Wangy Generator</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <button
                    className={"btn "+(theme === 'light' ? "btn-light":"btn-dark")}
                    onClick={themeToggler}
                  >
                    Switch Theme
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>

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

            <div>
              {template}
              <TemplateComplete selection={selection} words={words} theme={theme} />
            </div>

            <br />

            <div className="row">
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
