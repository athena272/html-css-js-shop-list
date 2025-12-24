export default function checkEmptyList(list)
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
