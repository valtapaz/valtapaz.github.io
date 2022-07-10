const characters = [
    'ACE','DANT','CAST','CASTILLES',
    'HECTOR','ELSI','BARRACKS',
    'DECK','WILLIAM','JEFF','ADELPHA','UNKNOWN',
];

function loadDoc(e) {
    console.log(e);
    let file = e.files[0];
    console.log(file);
    let reader = new FileReader();
    readSuccess=((e)=>{
        let scriptFile = e.explicitOriginalTarget.result;
        const parser = new DOMParser();
        const scriptParsed = parser.parseFromString(scriptFile,"application/xml").documentElement;
        const script = scriptParsed.getElementsByTagName(`para`);
        start(script)
    });
    let item = reader.readAsText(file);
    reader.onload=readSuccess;
    console.log(item);
}
// loadDoc();
const loadIt = (e) => {
    console.log(e)
}

const start = (script) => {
    const scriptWithoutBreaks = [];
    for (const line of script) {
        if (line.firstChild !== null && !/^\(.+\)\s*$/.test(line.firstChild.textContent)) {
            scriptWithoutBreaks.push(line);
        }
    }
    console.log(scriptWithoutBreaks)
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
