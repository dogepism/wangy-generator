import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import copy from "copy-to-clipboard";

const RenderTemplate = (selection, words, words2, words3, words4) => {
    switch (selection) {
        case 'option1':
            return `GW BENER2 PENGEN JILATI ${words} YA TUHAN. GW PENGEN BANGET MENJILAT SETIAP BAGIAN TUBUHNYA SAMPAI AIR LIUR GW BERCUCURAN KAYAK AIR KERINGAT LALU NGENTOT DENGANNYA SETIAP HARI SAMPAI TUBUH KITA MATI RASA YA TUHAN. GW INGIN MEMBUAT ANAK2 DENGAN ${words} SEBANYAK SATU TIM SEPAK BOLA DAN MEMBUAT SATU TIM SEPAK BOLA LAINNYA MELAWAN ANAK2 TIM SEPAK BOLA PERTAMA GW YG GW BUAT AMA ${words}. GW PENGEN MASUK KE STIAP LUBANG TUBUHNYA. MAU ITU LUBANG HIDUNG,LUBANG TELINGA,RONGGA MATA MAUPUN PUSAR, KCUALI PORI2 KULIT. KEMUDIAN GW AKAN MENJADIKANNYA KARAKTER GAME YG TIDAK BISA HIDUP KALAU GK GW KENTOT STIAP HARINYA.`
        case 'option2':
            return `Hari pertama ${words} gym itu pas hari minggu pagi gym buka jam 8, ${words} pikir pagi-pagi baru buka enak soalnya gak banyak orang gym karena ${words} belom tau cara pake alatnya mau nyoba-nyoba dulu, taunya cuman angkat dumble aja…hehehehehhe. Gak berapa lama ada yang datang ya bli ${words2} ini, baru pertama ${words} kagum sama badannya udah ke bentuk banget. ${words} dengan polosnya liatin dia aja latian pengen tahu gimana cara pake alatnya, pas ke pergok ngeliatin ${words} senyum aja mringis dia juga senyum juga, dan bilang Kenapa kok liatin terus…??? ${words} jawab dengan polosnya, iya bli, ${words} belom tau cara pake alatnya soalnya baru pertama kali gym…!!!!.  Dari situ ${words} lanjut ngobrol sama bli ${words2}, kita saling kenalan dan ${words} di ajari gimana caranya pake alat-alatnya terus di kasih tips cara pengen besari badan. Dan ${words} baru tau kalau pengen besarin badan gak cuman gym aja harus minum susu suplemen dan segala macamnya, pikirku manggut-manggut aja. Hari itu hari keberuntunganku, dapat ilmu dari bli ${words2} gratis seolah dapat personal trainer gratis…hehehehh.  Setelah selesai gym ${words} sempet ngobrol panjang lebar sama bli ${words2}, ternyata bli ${words2} kost di deket tempat gym dia satpam di sebuah bank, dan tak kira udah berkeluarga ternyata dia masih single.`
        case 'option3':
            return `${words}........... ${words} ${words} ❤️ ❤️ ❤️ AAAAAAAAAAAAAAAAAGH AAAAAAAAAAAAAAAAAAAAAAAGH WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya ${words} wangi aku mau nyiumin aroma wanginya ${words} AAAAAAAAH ❤️ ❤️ ❤️ - Rambutnya.... aaah rambutnya juga pengen aku elus-elus - AAAAAH ${words} keluar pertama kali juga manis dia bawa balon itu juga manis banget AAAAAAAAH ${words} LUCCUUUUUUUUUUUUUUU...... ❤️ ❤️ ❤️ GUA BAKAL BAKAR DUIT 12 JUTA RUPIAH BUAT ${words} AAAAAAAAAAAAAAAAAAAAAAAAAAAAAGH apa ? ${words} itu gak nyata ? Cuma karakter 2 dimensi katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK CYGAMES BANGSAAAAAT!! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ${words} ngeliat gw ... ${words} di laptop ngeliatin gw ${words} ... kamu percaya sama aku ? aaaaaaaaaaah syukur ${words} gak malu merelakan aku aaaaaah YEAAAAAAAAAAAH GUA MASIH PUNYA ${words}, SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH ANILA, ANCHIRA MAHIRA VAJRA KUMBIRAAAAA KIRIMKANLAH CINTAKU PADA ${words} KIRIMKAN KE CYGAMES AAAAAAAAH`
        case 'option4':
            return `NENEN NENEN KEPENGEN NENEN SAMA ${words}. TETEK GEDE NAN KENCANG MILIK ${words} MEMBUATKU KEPENGEN NENEN. DIBALUT PAKAIAN KETAT YANG ADUHAI CROOOOTOTOTOTOTOT ANJING SANGE GUA BANGSAT. ${words},PLIS DENGERIN BAIK BAIK. TOLONG BUKA BAJU SEBENTAR SAJA PLISSS TOLOOONG BANGET,BIARKAN MULUT KERINGKU BISA MENGECAP NENEN ${words}. BIARKAN AKU MENGENYOT NENENMU ${words}. AKU RELA NGASIH SESEMBAHAN APA AJA BERAPAPUN ITU DUIT YG AKU BAKAR KHUSUS TERKHUSUS BUATMU. TAPI TOLOOOONG BANGET BUKA BAJUMU AKU MAU NENEN.NENEN NENEEEEN NENEN ${words} WANGIIII`
        default:
            return "";
    }
}

function TemplateComplete(props) {

    const FinishedWords = RenderTemplate(props.selection, props.words, props.words2)

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