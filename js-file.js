function getValue() {
    const eNum = parseFloat(document.getElementById('eNum').value);
    const oNum = parseFloat(document.getElementById('oNum').value);
    const pNum = parseFloat(document.getElementById('pNum').value);
    let eo = eNum + eNum * oNum / 100;
    let eop = eo + eNum * pNum / 100;

    let eRes = document.getElementById('eRes');
    let eoRes = document.getElementById('eoRes');
    let eopRes = document.getElementById('eopRes');
    eRes.textContent = 'E, kg : ' + eNum;
    eoRes.textContent = 'E + O, kg : ' + eo.toFixed(2);
    eopRes.textContent = 'E + O + P, kg : ' + eop.toFixed(2);
}

let calc = document.getElementById('calc');
calc.addEventListener('click', getValue, false); 
