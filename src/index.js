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
  const [selection, setSelection] = useState('option1')

  // eslint-disable-next-line
  const [template, setTemplate] = useState('');
  const [theme, setTheme] = useState('dark');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const onChange = (event) => {
    setWords(event.target.value);

  };
  useEffect(() => { setSelection('option1'); setWords('keqing') }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div>
          <nav className={"navbar navbar-expand-lg" + (theme === 'light' ? " navbar-light bg-light" : " navbar-dark bg-dark")}>
            <a className="navbar-brand" href="#">Degen-erator</a>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="ml-auto" id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item active">
                  <button
                    className={"btn " + (theme === 'light' ? "btn-light" : "btn-dark")}
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
                  <option value="option1">template 1</option>
                  <option value="option2">template 2</option>
                  <option value="option3">template 3</option>
                  <option value="option4">template 4</option>
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
        <div className="img-responsive justify-content-md-center text-center my-5">
          <a target="_blank" href="https://static.wikia.nocookie.net/meme/images/5/51/FC6B143C-9DF6-4D2D-91B1-CC2E4A1368A6.jpeg/revision/latest/scale-to-width-down/220?cb=20200818155515" className="img-responsive">
            <img className="img-judi" src={"https://cdn.indxxi.xyz/wp-content/uploads/2020/06/25132817/600x350-lux138-Pop-Up.gif"} alt="Logo" />
          </a>
        </div>

        <div class={"text-center footer p-3 mt-5 " + (theme === 'light' ? "text-dark" : "text-white")}>
          © {(new Date().getFullYear())} Copyright: DOGEPISM. All Rights Reserved 
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
