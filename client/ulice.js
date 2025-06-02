const getData = async() => {
    
    const res = await fetch("http://localhost:5018/prikaziUlice");
    const data = await res.json();

    return data;
}

document.getElementById('ulice_dugme').addEventListener("click", ()=> {

    getData().then(ulice => {

        let html = "<ul>";

        ulice.forEach((ulice) => {
            html += "<li>"+ulice.nazivUlice+"</li>";
        });

        html +="</ul>";
        document.getElementById('uliceDiv').innerHTML = html;
    });
});