const getData = async() => {
    
    const res = await fetch("http://localhost:5018/prikaziPrevoz");
    const data = await res.json();

    return data;
}

document.getElementById('prevoz_dugme').addEventListener("click", ()=> {

    getData().then(prevoz => {

        let html = "<table><tr><th>Превозно средство</th><th>Место поласка</th><th>Време поласка</th></tr>";

        prevoz.forEach((prevoz) => {
            html += "<tr><td>"+ prevoz.naziv+"</td><td>"+prevoz.mestoPolaska+"</td><td>"+prevoz.vremePolaska+"</td></tr>";
        });

        html +="</table>";
        document.getElementById('prevozDiv').innerHTML = html;
    });
});