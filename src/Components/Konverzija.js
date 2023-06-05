function Konverzija({tecaj, izabranaValuta, brojZaPretvorit}) {

let pretvorenBroj = tecaj[izabranaValuta] * brojZaPretvorit;

  return (
    <div>

        <div class="amount">
          <br/>
          <p>Rezultat</p>
          <input type="text" disabled value={pretvorenBroj.toFixed(4)}></input>
        </div>

      <br/>
      
      <p>1€ ≈ {tecaj[izabranaValuta]}</p>

      
    </div>
  );
}

export default Konverzija;
