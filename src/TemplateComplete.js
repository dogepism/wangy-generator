import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import copy from "copy-to-clipboard";

const RenderTemplate = (selection, words) => {
    switch (selection) {
        case 'option1':
            return `eda cuma pengen jilat ${words}, soalnya ${words} adalah kesukaan eda`
        case 'option2':
            return `eda pergi buat nampol ${words}, darikemaren didiemin si ${words} batu bener`
        case 'option3':
            return `${words}........... ${words} ${words} AAAAAAAAAAAAAAAAAGH AAAAAAAAAAAAAAAAAAAAAAAGH WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya ${words} wangi aku mau nyiumin aroma wanginya ${words} AAAAAAAAH - Rambutnya.... aaah rambutnya juga pengen aku elus-elus - AAAAAH ${words} keluar pertama kali juga manis dia bawa balon           itu juga manis banget AAAAAAAAH ${words} LUCCUUUUUUUUUUUUUUU...... GUA BAKAL BAKAR DUIT 12 JUTA RUPIAH BUAT ${words} AAAAAAAAAAAAAAAAAAAAAAAAAAAAAGH apa ? ${words} itu gak nyata ? Cuma karakter 2 dimensi katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK CYGAMES BANGSAAAAAT!! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ${words} ngeliat gw ... ${words} di laptop ngeliatin gw ${words} ... kamu percaya sama aku ? aaaaaaaaaaah syukur ${words} gak malu merelakan aku aaaaaah YEAAAAAAAAAAAH GUA MASIH PUNYA ${words}, SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH ANILA, ANCHIRA MAHIRA VAJRA KUMBIRAAAAA KIRIMKANLAH CINTAKU PADA ${words} KIRIMKAN KE CYGAMES AAAAAAAAH`
        case 'option4':
            return `NENEN NENEN KEPENGEN NENEN SAMA ${words}. TETEK GEDE NAN KENCANG MILIK ${words} MEMBUATKU KEPENGEN NENEN. DIBALUT PAKAIAN KETAT YANG ADUHAI CROOOOTOTOTOTOTOT ANJING SANGE GUA BANGSAT. ${words},PLIS DENGERIN BAIK BAIK. TOLONG BUKA BAJU SEBENTAR SAJA PLISSS TOLOOONG BANGET,BIARKAN MULUT KERINGKU BISA MENGECAP NENEN ${words}. BIARKAN AKU MENGENYOT NENENMU ${words}. AKU RELA NGASIH SESEMBAHAN APA AJA BERAPAPUN ITU DUIT YG AKU BAKAR KHUSUS TERKHUSUS BUATMU. TAPI TOLOOOONG BANGET BUKA BAJUMU AKU MAU NENEN.NENEN NENEEEEN NENEN ${words} WANGIIII`
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