const inputItem = document.getElementById('input-item');
const formShopList = document.getElementById('form-shoplist');
const shopList = document.getElementById('lista-de-compras');
const addButton = document.getElementById('adicionar-item');
let contador = 0;


addButton.addEventListener('click', (event) =>
{
    event.preventDefault();
    if (inputItem.value === "")
    {
        alert("Por favor, insira um item!");
        return
    }

    const listItem = document.createElement('li');
    const listItemContainer = document.createElement('div')
    listItemContainer.classList.add('lista-item-container');
    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.id = `checkbox-${++contador}`;
    const itemName = document.createElement('p');
    itemName.innerText = inputItem.value;

    listItemContainer.appendChild(inputCheckbox);
    listItemContainer.appendChild(itemName);

    listItem.appendChild(listItemContainer);
    shopList.appendChild(listItem);

    inputCheckbox.addEventListener("click", () =>
    {
        if (inputCheckbox.checked)
        {
            itemName.style.textDecoration = "line-through";
            return
        }

        itemName.style.textDecoration = "none"
    })

    const weekDay = new Date().toLocaleDateString("pt-BR", {
        weekday: "long"
    });

    const date = new Date().toLocaleDateString("pt-BR")
    const hour = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        minute: "numeric"
    })
    const fullDate = `${weekDay} (${date}) às ${hour}`
    const itemDate = document.createElement('p');
    itemDate.innerText = fullDate;
    itemDate.classList.add("texto-data");
    listItem.appendChild(itemDate);
});