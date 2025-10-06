// Estrutura JSON dos itens (dados fictícios) — escopo global
const ITEMS = [
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

document.addEventListener('DOMContentLoaded', () => {
  console.log('App inicializado');

  // Renderização dinâmica dos cards na home
  const cardsContainer = document.getElementById('cards-container');
  if (cardsContainer) {
    renderHomeCards(ITEMS, cardsContainer);
  }

  // Renderização da página de detalhes quando aplicável
  const detailsContainer = document.getElementById('detalhes-container');
  if (detailsContainer) {
    renderDetailsPage(detailsContainer);
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

    const link = document.createElement('a');
    link.href = `detalhes.html?id=${encodeURIComponent(item.id)}`;
    link.className = 'btn btn-outline-primary';
    link.textContent = 'Ver detalhes';

    body.appendChild(h5);
    body.appendChild(p);
    body.appendChild(link);

    card.appendChild(img);
    card.appendChild(body);

    col.appendChild(card);
    container.appendChild(col);
  });
}

function renderDetailsPage(container) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  if (!id) {
    container.innerHTML = '<div class="alert alert-warning" role="alert">Nenhum item informado na URL.</div>';
    return;
  }

  const item = ITEMS.find((i) => i.id === id);
  if (!item) {
    container.innerHTML = '<div class="alert alert-danger" role="alert">Item não encontrado.</div>';
    return;
  }

  container.innerHTML = '';

  const colImg = document.createElement('div');
  colImg.className = 'col-lg-6';
  const img = document.createElement('img');
  img.src = item.image;
  img.alt = item.title;
  img.className = 'img-fluid rounded shadow';
  colImg.appendChild(img);

  const colText = document.createElement('div');
  colText.className = 'col-lg-6 d-flex align-items-center';
  const content = document.createElement('div');
  const h1 = document.createElement('h2');
  h1.className = 'fw-bold text-primary mb-3';
  h1.textContent = item.title;
  const p = document.createElement('p');
  p.className = 'lead';
  p.textContent = item.description;
  const back = document.createElement('a');
  back.href = 'index.html';
  back.className = 'btn btn-outline-secondary mt-3';
  back.textContent = 'Voltar para a Home';
  content.appendChild(h1);
  content.appendChild(p);
  content.appendChild(back);
  colText.appendChild(content);

  container.appendChild(colImg);
  container.appendChild(colText);
}


