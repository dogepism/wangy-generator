import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TemplateComplete from './TemplateComplete';
import { Button, ToggleButton, ButtonGroup } from 'react-bootstrap';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';




function App() {
  // Declare a new state variable, which we'll call "count"
  const [words, setWords] = useState('');
  const [words2, setWords2] = useState('');
  const [words3, setWords3] = useState('');
  const [words4, setWords4] = useState('');
  const [selection, setSelection] = useState('option1');
  const [warning, setWarning] = useState((localStorage.getItem('warning') === 'false' ? false : true));

  // eslint-disable-next-line
  const [theme, setTheme] = useState('dark');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  useEffect(() => {
    setSelection('option1');
    setWords('yoga');
    setWords2('adhi');
    // setWarning((localStorage.getItem('warning') === 'false' ? false : true))
  }, []);

  { console.log('check', localStorage.getItem('warning')) }
  const handleWarningSubmit = () => {
    setWarning(false);
    localStorage.setItem('warning', false)
  }

  const RenderInput = (selection) => {
    switch (selection) {
      case 'option1':
        return <div>
          <input className="form-control" type="text" value={words} onChange={(e) => setWords(e.target.value)} />
        </div>
      case 'option2':
        return <div>
          <input placeholder="pengganti orang ke 1" className="form-control" type="text" value={words} onChange={(e) => setWords(e.target.value)} />
          <input placeholder="pengganti orang ke 2" className="form-control mt-2" type="text" value={words2} onChange={(e) => setWords2(e.target.value)} />
        </div>
      case 'option3':
        return <div>
          <input className="form-control" type="text" value={words} onChange={(e) => setWords(e.target.value)} />
          {/* <input className="form-control" type="text" value={words2} onChange={(e) => setWords2(e.target.value)} />
          <input className="form-control" type="text" value={words3} onChange={(e) => setWords3(e.target.value)} /> */}
        </div>
      case 'option4':
        return <div>
          <input className="form-control" type="text" value={words} onChange={(e) => setWords(e.target.value)} />
          {/* <input className="form-control" type="text" value={words2} onChange={(e) => setWords2(e.target.value)} />
          <input className="form-control" type="text" value={words3} onChange={(e) => setWords3(e.target.value)} />
          <input className="form-control" type="text" value={words4} onChange={(e) => setWords4(e.target.value)} /> */}
        </div>
      default:
        return "";
    }
  }


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className={(warning === true ? "fadeMe" : "d-none")}>
          <div className="confirmationScreen">
            <div className="row">
              <div className="mx-auto dangerLabel">Klik tombol dibawah ini jika umur anda diatas 18 tahun</div>
            </div>
            <div className="mt-4 d-flex row">
              <Button size="lg" onClick={() => handleWarningSubmit()} className="mx-auto" variant="warning" >Saya diatas 18 Tahun</Button>
            </div>
          </div>
        </div>
        <div>
          <nav className={"navbar navbar-expand-lg" + (theme === 'light' ? " navbar-light bg-light" : " navbar-dark bg-dark")}>
            <div className="container">
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
            </div>
          </nav>
        </div>

        {/* //navbar end */}

        <div>
          <div className="container pt-5">
            <div className="row">
              <div className="col">
                <label className={theme === 'light' ? "textColorTheme" : ""}>
                  Name:
                </label>

                {RenderInput(selection)}
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
              <TemplateComplete selection={selection} words={words} words2={words2} words3={words3} words4={words4} theme={theme} />
            </div>

            <br />

            <div className="row">
            </div>
          </div>
        </div>
        {/* <div className="img-responsive justify-content-md-center text-center my-5">
          <a target="_blank" href="https://static.wikia.nocookie.net/meme/images/5/51/FC6B143C-9DF6-4D2D-91B1-CC2E4A1368A6.jpeg" className="img-responsive">
            <img className="img-judi" src={"https://cdn.indxxi.xyz/wp-content/uploads/2020/06/25132817/600x350-lux138-Pop-Up.gif"} alt="Logo" />
          </a>
        </div> */}

        <div class={"text-center footer p-3 mt-5 " + (theme === 'light' ? "text-dark" : "text-white")}>
          © {(new Date().getFullYear())} Copyright: DOGEPISM. All Rights Reserved
      </div>
      </>
    </ThemeProvider >
  );
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
