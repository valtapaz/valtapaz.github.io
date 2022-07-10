
const characters = [
    'ACE','DANT','CAST','CASTILLES',
    'HECTOR','ELSI','BARRACKS',
    'DECK','WILLIAM','JEFF','ADELPHA','UNKNOWN',
];

let filename = `./script.xml`

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      start(this.responseText);
    }
    // xhttp.setRequestHeader(``)
    xhttp.open("GET", "script.xml", true);
    xhttp.send();
}
// loadDoc();

const start = (scriptFile) => {
    const parser = new DOMParser();
    const scriptParsed = parser.parseFromString(scriptFile,"application/xml").documentElement;
    const script = scriptParsed.getElementsByTagName(`para`);
    const scriptWithoutBreaks = [];
    for (const line of script) {
        if (line.firstChild !== null && !/^\(.+\)\s*$/.test(line.firstChild.textContent)) {
            scriptWithoutBreaks.push(line);
        }
    }
    const lines = [];
    for (const line of scriptWithoutBreaks) {
        if (!/^[A-Z\s:\(\)’'.-]+$/.test(line.firstChild.textContent)) {
            lines.push(line.firstChild.textContent);
        }
    }
    for (const line of lines) {
        document.getElementById(`main`).innerHTML += line + `<br/><br/>`
    }
}
