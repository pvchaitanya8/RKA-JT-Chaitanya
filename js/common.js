const hamburger = document.getElementById('hamburger');
const search = document.getElementById('search');

function adjustIframeHeight(iframe) {
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}
document.querySelectorAll('iframe').forEach(iframe => {
    iframe.addEventListener('load', () => adjustIframeHeight(iframe));
    window.addEventListener('resize', () => adjustIframeHeight(iframe));
});

if (hamburger) {
    document.getElementById('hamburger').addEventListener('click', function () {
        document.getElementById('menu').classList.toggle('show');
    });
}

function getEmployees() {
    return JSON.parse(localStorage.getItem('employees')) || [];
}

function saveEmployees(employees) {
    localStorage.setItem('employees', JSON.stringify(employees));
}