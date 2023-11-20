console.log('funguju!');

const updateSkill = () => {
    const levelHTML = document.querySelector ('.skill__value');
    const value = valueElement.textContent;
    valueElement.textContent = Number(prompt('Zadejte úroveň znalostí HTML (0-100)'));
    return levelHTML;     
}


const levelHTML = Number(prompt('Zadejte úroveň znalostí HTML (0-100)'));
const levelCSS = Number(prompt('Zadejte úroveň znalostí CSS (0-100)'));
const levelJavascript = Number(prompt('Zadejte úroveň znalostí Javascriptu (0-100)'));

updateSkill ('skill__value')
