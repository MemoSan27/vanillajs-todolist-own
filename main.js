const input = document.querySelector('.header__text-box');
const addBtn = document.querySelector('.header__btn');
const ul = document.querySelector('.li-container__ul');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const text = input.value;

    if(text !== ""){
        const li = document.createElement('li');
        const p = document.createElement('p');
        const btn = document.createElement('button');
        p.textContent = text;
    
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);
    
        input.value = "";
    }

});
    
const addDeleteBtn = () => {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'btn-delete';

    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        /* console.log(item); */
        ul.removeChild(item);
        });

        return deleteBtn;
    }
