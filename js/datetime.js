export function buildDateLabel()
{
  const now = new Date();
  const weekDay = now.toLocaleDateString('pt-BR', { weekday: 'long' });
  const date = now.toLocaleDateString('pt-BR');
  const hour = now.toLocaleTimeString('pt-BR', { hour: 'numeric', minute: 'numeric' });
  return `${weekDay} (${date}) às ${hour}`;
}