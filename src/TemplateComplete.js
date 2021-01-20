import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import copy from "copy-to-clipboard";

const RenderTemplate = (selection, words) => {
    switch (selection) {
        case 'keqing':
            return `eda cuma pengen jilat ${words}, soalnya ${words} adalah kesukaan eda`
        case 'venti':
            return `eda pergi buat nampol ${words}, darikemaren didiemin si ${words} batu bener`
        case 'qiqi':
            return `eda ke pasar nyariin ${words}, kemaren belum bayar utang si ${words}`
        case 'ganyu':
            return `eda ditampolin sama ${words}, trus eda lari dari kejaran ${words}`
        default:
            return "";
    }
}

function TemplateComplete(props) {

    const FinishedWords = RenderTemplate(props.selection, props.words)

    return (
        <div className="container mt-5">
            <div className="row">
                <div className={props.theme === 'light' ? "textColorTheme" : ""}>{FinishedWords}</div>
            </div>
            <div className="row mt-5">
                <Button variant="primary" onClick={() => copy(FinishedWords)}>Copy To Clipboard</Button>{' '}
            </div>
        </div>
    );
}

export default TemplateComplete;