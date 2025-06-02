const getData = async() => {
    
    const res = await fetch("http://localhost:5018/prikaziKafice");
    const data = await res.json();

    return data;
}

document.getElementById('kafic').addEventListener("click", ()=> {

    getData().then(kafic => {

        let html = "<table><tr><th>Назив</th><th>Адреса</th></tr>";

        kafic.forEach((kafic) => {
            html += "<tr><td>"+ kafic.naziv+"</td><td>"+kafic.adresa+".</td></tr>";
        });

        html +="</table>";
        document.getElementById('kaficDiv').innerHTML = html;
    });
});


const getData2 = async() => {
    
    const res = await fetch("http://localhost:5018/prikaziRestorane");
    const data = await res.json();

    return data;
}

document.getElementById('restoran').addEventListener("click", ()=> {

    getData2().then(a => {

        let html = "<table><tr><th>Назив</th><th>Адреса</th></tr>";

        a.forEach((a) => {
            html += "<tr><td>"+ a.naziv+"</td><td>"+a.adresa+".</td></tr>";
        });

        html +="</table>";
        document.getElementById('restoranDiv').innerHTML = html;
    });
});

const getData3 = async() => {
    
    const res = await fetch("http://localhost:5018/prikaziSupermarkete");
    const data = await res.json();

    return data;
}

document.getElementById('kupovina').addEventListener("click", ()=> {

    getData3().then(a => {

        let html = "<table><tr><th>Назив</th><th>Адреса</th></tr>";

        a.forEach((a) => {
            html += "<tr><td>"+ a.naziv+"</td><td>"+a.adresa+".</td></tr>";
        });

        html +="</table>";
        document.getElementById('kupovinaDiv').innerHTML = html;
    });
});

const getData4 = async() => {
    
    const res = await fetch("http://localhost:5018/prikaziBanke");
    const data = await res.json();

    return data;
}

document.getElementById('banka').addEventListener("click", ()=> {

    getData4().then(a => {

        let html = "<table><tr><th>Назив</th><th>Адреса</th></tr>";

        a.forEach((a) => {
            html += "<tr><td>"+ a.naziv+"</td><td>"+a.adresa+".</td></tr>";
        });

        html +="</table>";
        document.getElementById('bankaDiv').innerHTML = html;
    });
});


const getData5 = async() => {
    
    const res = await fetch("http://localhost:5018/prikaziSkole");
    const data = await res.json();

    return data;
}

document.getElementById('skola').addEventListener("click", ()=> {

    getData5().then(a => {

        let html = "<table><tr><th>Назив</th><th>Адреса</th></tr>";

        a.forEach((a) => {
            html += "<tr><td>"+ a.naziv+"</td><td>"+a.adresa+".</td></tr>";
        });

        html +="</table>";
        document.getElementById('skolaDiv').innerHTML = html;
    });
});


const getData6 = async() => {
    
    const res = await fetch("http://localhost:5018/prikaziLecenje");
    const data = await res.json();

    return data;
}

document.getElementById('lecenje').addEventListener("click", ()=> {

    getData6().then(a => {

        let html = "<table><tr><th>Назив</th><th>Адреса</th></tr>";

        a.forEach((a) => {
            html += "<tr><td>"+ a.naziv+"</td><td>"+a.adresa+".</td></tr>";
        });

        html +="</table>";
        document.getElementById('lecenjeDiv').innerHTML = html;
    });
});


const getData7 = async() => {
    
    const res = await fetch("http://localhost:5018/prikaziFrizere");
    const data = await res.json();

    return data;
}

document.getElementById('frizer').addEventListener("click", ()=> {

    getData7().then(a => {

        let html = "<table><tr><th>Назив</th><th>Адреса</th></tr>";

        a.forEach((a) => {
            html += "<tr><td>"+ a.naziv+"</td><td>"+a.adresa+".</td></tr>";
        });

        html +="</table>";
        document.getElementById('frizerDiv').innerHTML = html;
    });
});


const getData8 = async() => {
    
    const res = await fetch("http://localhost:5018/prikaziKladionice");
    const data = await res.json();

    return data;
}

document.getElementById('kladionica').addEventListener("click", ()=> {

    getData8().then(a => {

        let html = "<table><tr><th>Назив</th><th>Адреса</th></tr>";

        a.forEach((a) => {
            html += "<tr><td>"+ a.naziv+"</td><td>"+a.adresa+".</td></tr>";
        });

        html +="</table>";
        document.getElementById('kladionicaDiv').innerHTML = html;
    });
});