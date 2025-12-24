export function createListItem(text, id)
{
    const li = document.createElement('li');
    const container = document.createElement('div');
    container.classList.add('lista-item-container');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = id;

    const name = document.createElement('p');
    name.innerText = text;

    container.append(checkbox, name);
    li.appendChild(container);
    return { li, checkbox, name };
}

export function createDateElement(dateText)
{
    const p = document.createElement('p');
    p.innerText = dateText;
    p.classList.add('texto-data');
    return p;
}

export function verificarListaVazia(list)
{
    const mensagemListaVazia = document.querySelector('.mensagem-lista-vazia');

    const listItems = list.querySelectorAll("li");
    if (listItems.length === 0)
    {
        mensagemListaVazia.style.display = "block";
    } else
    {
        mensagemListaVazia.style.display = "none";
    }
}
