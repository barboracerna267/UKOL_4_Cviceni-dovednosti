console.log('funguju!');

/*Vytvořte si repozitář ze šablony cviceni-dovednosti. V repozitáři najdete zdrojové soubory stránky se třemi posuvníky. Ty ukazují úroveň dovedností v různých oblastech.

Doplňte do stránky JavaScriptový program, který pomocí funkce prompt požádá uživatele aby vyjářil svoji úroveň postupně ve všech zobrazených dovednostech jako číslo 0–100. Program pak nastaví posuvníky na stránce na odpovídající délku a hodnoty u posuvníků na uživatelem zadaná čísla.
Na samém začátku vašeho programu vytvořte funkci updateSkill, která bere dva vstupy: textový řetězec představující id elementu a číslo mezi 0–100. Tato funkce při zavolání nastaví posuvník se zadaným id na správnou hodnotu. Použijte tuto funkci ve vašem kódu, abyste nemuseli při nastavování posuvníků psát třikrát po sobě téměř stejný kód.*/


const updateSkill = (id, number) => {
    const skillBar = document.getElementById(id);
    const progress = skillBar.querySelector('.skill__progress');
    const valueElement = skillBar.querySelector('.skill__value');
  
    progress.style.width = `${number}%`;
    valueElement.textContent = `${number} / 100`;
}

const levelHTML = prompt("Zadejte úroveň znalostí HTML (0–100):");
const levelCSS = prompt("Zadejte úroveň znalostí CSS (0–100):");
const levelJavascript = prompt("Zadejte úroveň znalostí Javascriptu (0–100):");

updateSkill('skill1', levelHTML);
updateSkill('skill2', levelCSS);
updateSkill('skill3', levelJavascript);
