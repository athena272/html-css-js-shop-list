import { createDateElement, createListItem } from './dom.js';
import buildDateLabel from './datetime.js';
import checkEmptyList from './checkEmptyList.js';

const shopList = document.getElementById('lista-de-compras');
const formShopList = document.getElementById('form-shoplist');

formShopList.addEventListener('submit', (event) =>
{
    event.preventDefault();
    const dataElement = createDateElement(buildDateLabel());

    const { li } = createListItem();
    li.appendChild(dataElement);

    shopList.appendChild(li);

    checkEmptyList(shopList);
});
