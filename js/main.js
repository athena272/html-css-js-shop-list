import { createDateElement, createListItem, verificarListaVazia } from './dom.js';
import { buildDateLabel } from './datetime.js';

const inputItem = document.getElementById('input-item');
const shopList = document.getElementById('lista-de-compras');
// const addButton = document.getElementById('adicionar-item');
const formShopList = document.getElementById('form-shoplist');

let contador = 0;

formShopList.addEventListener('submit', (event) =>
{
    event.preventDefault();
    if (!inputItem.value)
    {
        alert('Por favor, insira um item!');
        return;
    }

    const { li, checkbox, name } = createListItem(inputItem.value, `checkbox-${++contador}`);
    shopList.appendChild(li);

    checkbox.addEventListener('click', () =>
    {
        name.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    });

    const dataElement = createDateElement(buildDateLabel());
    li.appendChild(dataElement);

    verificarListaVazia(shopList);
});

verificarListaVazia(shopList);
