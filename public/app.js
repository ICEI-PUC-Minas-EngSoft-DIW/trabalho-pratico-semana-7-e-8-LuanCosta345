document.addEventListener('DOMContentLoaded', () => {
  console.log('App inicializado');

  // Estrutura JSON dos itens (dados fictícios)
  const homeItems = [
    {
      id: 'trilha-canion',
      title: 'Trilha do Cânion',
      description: 'Percurso entre rochas e leito de rio até o cânion.',
      image: './trilha.jpg'
    },
    {
      id: 'poco-cachoeira',
      title: 'Poço da Cachoeira',
      description: 'Chegada ao poço principal com vista da queda.',
      image: './poço.jpg'
    },
    {
      id: 'mirante-superior',
      title: 'Mirante Superior',
      description: 'Vista panorâmica para fotografias e contemplação.',
      image: './mirante.jpg'
    }
  ];

  // Renderização dinâmica dos cards na home
  const cardsContainer = document.getElementById('cards-container');
  if (cardsContainer) {
    renderHomeCards(homeItems, cardsContainer);
  }
});

function renderHomeCards(items, container) {
  if (!Array.isArray(items)) return;
  container.innerHTML = '';

  items.forEach((item) => {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6';

    const card = document.createElement('div');
    card.className = 'card h-100 shadow-sm border-0';

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;
    img.className = 'card-img-top';
    img.style.height = '200px';
    img.style.objectFit = 'cover';

    const body = document.createElement('div');
    body.className = 'card-body';

    const h5 = document.createElement('h5');
    h5.className = 'card-title text-primary';
    h5.textContent = item.title;

    const p = document.createElement('p');
    p.className = 'card-text';
    p.textContent = item.description;

    body.appendChild(h5);
    body.appendChild(p);

    card.appendChild(img);
    card.appendChild(body);

    col.appendChild(card);
    container.appendChild(col);
  });
}


