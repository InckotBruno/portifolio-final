// Adicione esta função para alterar o idioma
function changeLanguage(language) {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    elementsToTranslate.forEach(element => {
        const translations = element.dataset.translate.split(';');
        const translatedText = language === 'en' ? translations[0] : translations[1];
        element.textContent = translatedText;
    });
}
