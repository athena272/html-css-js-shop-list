const inputItem = document.getElementById('input-item');
let contador = 0;

export function createListItem()
{
    if (!inputItem.value)
    {
        alert('Por favor, insira um item!');
        return;
    }

    const li = document.createElement('li');
    const container = document.createElement('div');
    container.classList.add('lista-item-container');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `checkbox-${++contador}`;

    const name = document.createElement('p');
    name.innerText = inputItem.value;

    container.append(checkbox, name);
    li.appendChild(container);

    checkbox.addEventListener('click', () =>
    {
        name.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    });

    return { li };
}

export function createDateElement(dateText)
{
    const p = document.createElement('p');
    p.innerText = dateText;
    p.classList.add('texto-data');
    return p;
}
