const formData = ()=>{

    let data = {
      ime: null,
      prezime: null,
      godiste: null,
      jmbg: null
    };
  
      const ime = document.getElementById('ime').value;
      const prezime = document.getElementById('prezime').value;
      const godiste = document.getElementById('godiste').value;
      const jmbg = document.getElementById('jmbg').value;
      
    
      let errors = [];
      
      if(parseInt(godiste) == null || godiste.trim() == ""){
        errors.push("Унесите годиште");
      }
    
      if(parseInt(godiste) > 2023 || parseInt(godiste) < 1900){
        errors.push("Не можете бити млађи од 2023. године и старији од 1910. године");
      }
    
      if(ime == null || ime.trim() == ""){
        errors.push("Унесите име");
      }
    
    
      if(prezime == null || prezime.trim() == ""){
        errors.push("Унесите презиме");
      }
    
      if(parseInt(jmbg) == null || jmbg.trim() == ""){
        errors.push("Унесите јмбг");
      }
    
      if(parseInt(jmbg) > 9999999999999  || parseInt(jmbg) < 1000000000000){
        errors.push("ЈМБГ мора имати 13 цифара");
      }
    
      if(errors.length > 0){
        document.getElementById('errorDiv').innerHTML = errors.join("<br>");
      }
      else {
        data = {
            ime: ime,
            prezime: prezime,
            godiste: godiste,
            jmbg: jmbg
        }
        console.log(data);
      }
               
    
       return data;
  }
  
  
const sendData = async ()=>{
  const options = {
    method: "post",
    body: JSON.stringify(formData()),
    headers: {"Content-type":"application/json; charset=UTF-8"}
  }
  const res = await fetch("http://localhost:5018/predajVizu", options);
  const json = await res.json();

  return json;
}
document.getElementById('viza_dugme').addEventListener("click", ()=>{
 
  sendData()
  .then(res => {
      console.log(res);
  });

});
  
 
  