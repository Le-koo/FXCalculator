import Konverzija from "./Konverzija.js";
import { useState } from 'react';
import '../Css/Tecajevi.css';

function Tecajevi() {


  const zastave = {
    američkiDolar: 'https://flagcdn.com/48x36/us.png',
    australijskiDolar: 'https://flagcdn.com/48x36/au.png',
    argentinskiPeso: 'https://flagcdn.com/48x36/ar.png',
    bosanskaMarka: 'https://flagcdn.com/48x36/ba.png',
    britanskaFunta: 'https://flagcdn.com/48x36/gb.png',
    brazilskiReal: 'https://flagcdn.com/48x36/br.png',
    češkaKruna: 'https://flagcdn.com/48x36/cz.png',
    danskaKruna: 'https://flagcdn.com/48x36/dk.png',
    egipatskaFunta: 'https://flagcdn.com/48x36/eg.png',
    hongkonškiDolar: 'https://flagcdn.com/48x36/hk.png',
    indijskaRupija: 'https://flagcdn.com/48x36/in.png',
    indonezijskaRupija: 'https://flagcdn.com/48x36/id.png',
    izraelskiNoviŠekel: 'https://flagcdn.com/48x36/il.png',
    japanskiJen: 'https://flagcdn.com/48x36/jp.png',
    južnoafričkiRand: 'https://flagcdn.com/48x36/za.png',
    južnokorejskiWon: 'https://flagcdn.com/48x36/kr.png',
    kanadskiDolar: 'https://flagcdn.com/48x36/ca.png',
    katarskiRial: 'https://flagcdn.com/48x36/qa.png',
    kazahstanskiTenge: 'https://flagcdn.com/48x36/kz.png',
    kineskiYuan: 'https://flagcdn.com/48x36/cn.png',
    kolumbijskiPeso: 'https://flagcdn.com/48x36/co.png',
    hrvatskaKuna: 'https://flagcdn.com/48x36/hr.png',
    kuvajtskiDinar: 'https://flagcdn.com/48x36/kw.png',
    libanonskaFunta: 'https://flagcdn.com/48x36/lb.png',
    malezijskiRinggit: 'https://flagcdn.com/48x36/my.png',
    mađarskaForinta: 'https://flagcdn.com/48x36/hu.png',
    meksičkiPeso: 'https://flagcdn.com/48x36/mx.png',
    norveškaKruna: 'https://flagcdn.com/48x36/no.png',
    novozelandskiDolar: 'https://flagcdn.com/48x36/nz.png',
    pakistanskaRupija: 'https://flagcdn.com/48x36/pk.png',
    poljskiZlot: 'https://flagcdn.com/48x36/pl.png',
    rumunjskiLej: 'https://flagcdn.com/48x36/ro.png',
    ruskiRubalj: 'https://flagcdn.com/48x36/ru.png',
    saudijskiRijal: 'https://flagcdn.com/48x36/sa.png',
    singapurskiDolar: 'https://flagcdn.com/48x36/sg.png',
    srpskiDinar: 'https://flagcdn.com/48x36/rs.png',
    svicarskiFranak: 'https://flagcdn.com/48x36/ch.png',
    tajlandskiBaht: 'https://flagcdn.com/48x36/th.png',
    tajvanskiDolar: 'https://flagcdn.com/48x36/tw.png',
    turskaLira: 'https://flagcdn.com/48x36/tr.png',
    ukrajinskaHrivnja: 'https://flagcdn.com/48x36/ua.png',
    urugvajskiPeso: 'https://flagcdn.com/48x36/uy.png',
    venecuelanskiBolivar: 'https://flagcdn.com/48x36/ve.png',
    švicarskiFranak: 'https://flagcdn.com/48x36/ch.png',
    švedskaKruna: 'https://flagcdn.com/48x36/se.png'
  };


  //vrijednost eura
  let tecajevi = {
    američkiDolar: 1.101656,
    argentinskiPeso: 248.624600,
    australijskiDolar: 1.645064,
    bosanskaMarka: 1.95,
    britanskaFunta: 0.875727,
    brazilskiReal: 5.499787,
    češkaKruna: 23.425354,
    danskaKruna: 7.450355,
    egipatskaFunta: 34.09,
    hongkonškiDolar: 8.645062,
    indijskaRupija: 90.045114,
    indonezijskaRupija: 16197.934657,
    izraelskiNoviŠekel: 4.016175,
    japanskiJen: 147.700676,
    južnoafričkiRand: 20.150521,
    južnokorejskiWon: 1459.305507,
    kanadskiDolar: 1.491393,
    katarskiRial: 4.010026,
    kazahstanskiTenge: 490.641026,
    kineskiYuan: 7.610260,
    kolumbijskiPeso: 5075.002253,
    hrvatskaKuna: 7.53450,
    kuvajtskiDinar: 0.337393,
    libanonskaFunta: 16829.36,
    malezijskiRinggit: 4.905828,
    mađarskaForinta: 373.236829,
    meksičkiPeso: 19.740903,
    norveškaKruna: 11.773049,
    novozelandskiDolar: 1.752154,
    pakistanskaRupija: 312.667292,
    poljskiZlot: 	4.589806,
    rumunjskiLej: 4.928355,
    ruskiRubalj: 86.151665,
    saudijskiRijal: 4.131208,
    singapurskiDolar: 1.463399,
    srpskiDinar: 117.29,
    svicarskiFranak: 0.975654,
    tajlandskiBaht: 37.207031,
    tajvanskiDolar: 33.837626,
    turskaLira: 21.476296,
    ukrajinskaHrivnja: 40.68,
    urugvajskiPeso: 43.2,
    venecuelanskiBolivar: 2733708.682649,
    švicarskiFranak: 0.975654,
    švedskaKruna: 11.283609
  };


//input value
  const [data, setData] = useState(null)
  function getData(val){
    setData(val.target.value)
  }


    //koja ce se valuta odabrat
   const [selectedValue, setSelectedValue] = useState('');

   const handleSelectChange = (event) => {
     setSelectedValue(event.target.value);
   };

  return (
    

    <div>
<div className="tecajevi">
  
        <center>
      <div className="wrapper glass">
        <header>Kalkulator Valuta</header>
        <form action="#">
          <div class="amount">
            <p>Unesite Količinu</p>
            {/* onChange uzima broj iz inputa i spremit ga u data varijablu koja će se poslat u Konverzija.js */}
            <input type="number" min="1" onChange={getData}/>
          </div>
          <div class="drop-list">
            <div class="from">
              <p>Iz</p>
              <div class="select-box" id="euro">
                <img src="https://flagcdn.com/48x36/eu.png" alt="flag"/>
                <select disabled>
                <option value="euro">Euro (EUR)</option>
                </select>
              </div>
            </div>
            <div class="icon"><i class="fas fa-exchange-alt"></i></div>
            <div class="to">
              <p>U</p>
              <div class="select-box">
                <img src={zastave[selectedValue]} alt=""/>
                <select value={selectedValue} onChange={handleSelectChange}>
                <option value="">Select an option</option>
                <option value="američkiDolar">Američki Dolar (USD)</option>
                <option value="australijskiDolar">Australijski dolar (AUD)</option>
                <option value="argentinskiPeso">Argentinski peso (ARS)</option>
                <option value="bosanskaMarka">Bosanska marka (BAM)</option>
                <option value="britanskaFunta">Britanska funta (GBP)</option>
                <option value="brazilskiReal">Brazilski real (BRL)</option>
                <option value="češkaKruna">Češka kruna (CZK)</option>
                <option value="danskaKruna">Danska kruna (DKK)</option>
                <option value="egipatskaFunta">Egipatska funta (EGP)</option>
                <option value="hongkonškiDolar">Hongkonški dolar (HKD)</option>
                <option value="indijskaRupija">Indijska rupija (INR)</option>
                <option value="indonezijskaRupija">Indonezijska rupija (IDR)</option>
                <option value="izraelskiNoviŠekel">Izraelski novi šekel (ILS)</option>
                <option value="japanskiJen">Japanski jen (JPY)</option>
                <option value="južnoafričkiRand">Južnoafrički rand (ZAR)</option>
                <option value="južnokorejskiWon">Južnokorejski won (KRW)</option>
                <option value="kanadskiDolar">Kanadski dolar (CAD)</option>
                <option value="katarskiRial">Katarski rial (QAR)</option>
                <option value="kazahstanskiTenge">Kazahstanski tenge (KZT)</option>
                <option value="kineskiYuan">Kineski yuan (CNY)</option>
                <option value="kolumbijskiPeso">Kolumbijski peso (COP)</option>
                <option value="hrvatskaKuna">Hrvatska kuna (HRK)</option>
                <option value="kuvajtskiDinar">Kuvajtski dinar (KWD)</option>
                <option value="libanonskaFunta">Libanonska funta (LBP)</option>
                <option value="malezijskiRinggit">Malezijski ringgit (MYR)</option>
                <option value="mađarskaForinta">Mađarska forinta (HUF)</option>
                <option value="meksičkiPeso">Meksički peso (MXN)</option>
                <option value="norveškaKruna">Norveška kruna (NOK)</option>
                <option value="novozelandskiDolar">Novozelandski dolar (NZD)</option>
                <option value="pakistanskaRupija">Pakistanska rupija (PKR)</option>
                <option value="poljskiZlot">Poljski zlot (PLN)</option>
                <option value="rumunjskiLej">Rumunjski lej (RON)</option>
                <option value="ruskiRubalj">Ruski rubalj (RUB)</option>
                <option value="saudijskiRijal">Saudijski rijal (SAR)</option>
                <option value="singapurskiDolar">Singapurski dolar (SGD)</option>
                <option value="srpskiDinar">Srpski dinar (RSD)</option>
                <option value="svicarskiFranak">Švicarski franak (CHF)</option>
                <option value="tajlandskiBaht">Tajlandski baht (THB)</option>
                <option value="tajvanskiDolar">Tajvanski dolar (TWD)</option>
                <option value="turskaLira">Turska lira (TRY)</option>
                <option value="ukrajinskaHrivnja">Ukrajinska hrivnja (UAH)</option>
                <option value="urugvajskiPeso">Urugvajski peso (UYU)</option>
                <option value="venecuelanskiBolivar">Venecuelanski bolivar (VES)</option>
                <option value="švicarskiFranak">Švicarski franak (CHF)</option>
                <option value="švedskaKruna">Švedska kruna (SEK)</option>
                </select>
              </div>
            </div>
          </div>
          <Konverzija izabranaValuta={selectedValue} tecaj={tecajevi} brojZaPretvorit={data}/>
        </form>
      </div>
  
      
      </center>
  
</div>
    </div>
  );
}
export default Tecajevi;
