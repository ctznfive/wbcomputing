function getValue() {
    const eNum = parseFloat(document.getElementById('eNum').value);
    const oNum = parseFloat(document.getElementById('oNum').value);
    const pNum = parseFloat(document.getElementById('pNum').value);
    let eo = eNum + eNum * oNum / 100;
    let eop = eo + eNum * pNum / 100;

    let eRes = document.getElementById('eRes');
    let eoRes = document.getElementById('eoRes');
    let eopRes = document.getElementById('eopRes');
    eRes.textContent = 'B, kg \xa0\xa0\xa0\xa0-\xa0 ' + eNum.toFixed(2);
    eoRes.textContent = 'B+H, kg \xa0\xa0-\xa0 ' + eo.toFixed(2);
    eopRes.textContent = 'B+H+T, kg -\xa0 ' + eop.toFixed(2);
}

function changeProfile(a, b) {
    document.getElementById('oNum').value = parseFloat(a);
    document.getElementById('pNum').value = parseFloat(b);
}

let calc = document.getElementById('calc');
calc.addEventListener('click', getValue, false); 

document.getElementById('profile1').addEventListener('click',() => {
    document.getElementById('oNum').value = 45;
    document.getElementById('pNum').value = 13;
})

document.getElementById('profile2').addEventListener('click',() => {
    document.getElementById('oNum').value = 30;
    document.getElementById('pNum').value = 10;
})