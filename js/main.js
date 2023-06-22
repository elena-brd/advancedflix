const categoryItem = document.querySelectorAll('.category-item');
const categoryContentItems = document.querySelectorAll('.category-content-item');
const formInput = document.getElementById('form-input');
const btnSubmit = document.getElementById('btn-submit');


function selectCategory() {
    removeShow();
    const categoryContentItem = document.querySelector(`#${this.id}-content`)
    categoryContentItem.classList.add('show');
}

function removeShow() {
    categoryContentItems.forEach(item => item.classList.remove('show'))
}

categoryItem.forEach(item => item.addEventListener('click', selectCategory))


function onclick(e) {
    e.preventDefault();

    formInput.textContent = 'Thank you!'
}
formInput.addEventListener('submit', onclick);