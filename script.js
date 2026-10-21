/*
  ATELIÊ YASMIM — JavaScript sem dependências
  ---------------------------------------------------
  Personalização rápida:
  1. Edite nomes e textos em CONTENT abaixo.
  2. Troque as URLs em GALLERY para usar suas próprias fotos.
  3. As imagens podem ser locais (ex.: "assets/foto-01.jpg").
*/

'use strict';

const CONTENT = {
  name: 'Yasmim',
  sender: 'Marcelo',
  memories: [
    {
      title: 'Seu jeito de ser',
      kicker: 'UM DETALHE QUE EU ADMIRO',
      paragraphs: [
        'Existe uma beleza que não depende de fotografia, de roupa bonita ou de qualquer coisa que o mundo consiga medir. Ela aparece no jeito de tratar as pessoas, nas pequenas atitudes e na personalidade que é só sua.',
        'Eu admiro justamente isso em você: as coisas que talvez você nem perceba, mas que fazem você ser alguém impossível de resumir à aparência.',
        'Nunca deixe o mundo convencer você de que precisa ser outra pessoa para merecer coisas bonitas.'
      ]
    },
    {
      title: 'A paz que você traz',
      kicker: 'UM LUGAR BOM DE ESTAR',
      paragraphs: [
        'Tem gente que chega fazendo barulho. E tem gente que muda o clima de um lugar simplesmente por estar ali.',
        'Você tem um jeito de tornar as coisas mais leves. Às vezes, é uma conversa simples; às vezes, uma palavra ou o som da sua voz. São detalhes pequenos, mas que acabam ficando comigo muito depois.',
        'Queria que você soubesse o quanto a sua presença pode ser especial.'
      ]
    },
    {
      title: 'O que desejo a você',
      kicker: 'UM DESEJO SINCERO',
      paragraphs: [
        'Desejo que você nunca precise diminuir a própria luz para caber na expectativa de alguém. Que encontre coragem nos dias difíceis e descanso quando o mundo ficar barulhento demais.',
        'Que a vida aproxime pessoas que respeitem seu coração, valorizem suas ideias e celebrem cada parte de quem você é.',
        'E que, nos dias em que você duvidar de si mesma, consiga lembrar: você merece cuidado, respeito, paz e amor de verdade.'
      ]
    }
  ],
  letters: [
    {
      title: 'Para um dia pesado',
      kicker: 'ABRA QUANDO O DIA NÃO FOR FÁCIL',
      paragraphs: [
        'Oi, minha princesa.',
        'Se hoje estiver difícil, não sinta que precisa resolver tudo de uma vez. Respira um pouco. Você não precisa ser forte em todos os minutos, nem ter todas as respostas agora.',
        'Um dia ruim não define sua vida, e um momento complicado não diminui a pessoa incrível que você é. Seja gentil consigo mesma, do mesmo jeito que merece que o mundo seja gentil com você.',
        'Estou torcendo para que amanhã seja mais leve. E, até lá, não se esqueça de cuidar de você.'
      ]
    },
    {
      title: 'Para quando bater saudade',
      kicker: 'ABRA QUANDO QUISER SENTIR UM ABRAÇO EM PALAVRAS',
      paragraphs: [
        'Se a saudade chegou até aqui, deixa estas palavras fazerem companhia por um instante.',
        'Mesmo quando a gente não está no mesmo lugar, existem coisas boas que continuam presentes: uma lembrança, uma frase, uma música ou aquele sorriso que aparece sem pedir licença quando pensamos em alguém especial.',
        'Espero que esta pequena carta faça você sorrir nem que seja só um pouquinho. Imagine um abraço demorado, daqueles que não precisam de explicação.',
        'Com carinho, Marcelo.'
      ]
    },
    {
      title: 'Para lembrar do seu valor',
      kicker: 'ABRA QUANDO PRECISAR SE REENCONTRAR',
      paragraphs: [
        'Você é muito mais do que os seus dias difíceis, muito mais do que os erros que já cometeu e muito mais do que qualquer opinião passageira sobre você.',
        'Não precisa conquistar o mundo todos os dias para ter valor. Não precisa agradar todo mundo para ser amada. E não precisa se comparar com ninguém para reconhecer a própria beleza.',
        'Continue crescendo no seu ritmo, aprendendo, sonhando e sendo você. Há algo bonito em uma pessoa que segue em frente sem perder a delicadeza.',
        'Nunca se trate como se fosse pouco. Você importa.'
      ]
    }
  ],
  surprises: {
    message: {
      kicker: 'UMA COISA QUE QUERO QUE VOCÊ SAIBA',
      title: 'Eu presto atenção.',
      paragraphs: [
        'Talvez eu nem sempre encontre o jeito perfeito de demonstrar o que sinto, mas eu presto atenção nos detalhes que fazem você ser você.',
        'Gosto da ideia de conhecer cada vez mais a pessoa que existe por trás do sorriso — seus sonhos, suas opiniões, suas manias e até os dias em que você não está tão bem.',
        'Para mim, carinho não é só dizer coisas bonitas. É ter disposição para ouvir, respeitar, aprender e demonstrar com atitudes.'
      ]
    },
    quote: {
      kicker: 'UM LEMBRETE PARA LEVAR COM VOCÊ',
      title: 'Não diminua a sua luz.',
      paragraphs: [
        'Que você tenha coragem para escolher o que faz bem ao seu coração, sabedoria para reconhecer o que merece e tranquilidade para não precisar provar o seu valor a ninguém.',
        'Você pode crescer sem deixar de ser gentil. Pode mudar de ideia sem perder a essência. E pode recomeçar quantas vezes precisar.',
        'Vá com calma. O seu caminho não precisa ter o ritmo de mais ninguém.'
      ]
    }
  }
};

const GALLERY = [
  {
    src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1800&q=90',
    alt: 'Casal em um momento tranquilo',
    caption: '01 / PRESENÇA'
  },
  {
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1800&q=90',
    alt: 'Duas pessoas compartilhando um momento especial',
    caption: '02 / CONEXÃO'
  },
  {
    src: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1400&q=90',
    alt: 'Flores delicadas sob luz suave',
    caption: '03 / DELICADEZA'
  },
  {
    src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1600&q=90',
    alt: 'Flores em tons suaves',
    caption: '04 / LEVEZA'
  },
  {
    src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=90',
    alt: 'Retrato feminino em luz natural',
    caption: '05 / LUZ PRÓPRIA'
  },
  {
    src: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1800&q=90',
    alt: 'Flores em uma composição romântica',
    caption: '06 / AQUILO QUE FICA'
  }
];

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) =>
  Array.from(scope.querySelectorAll(selector));

// Mobile navigation
const menuToggle = $('#menu-toggle');
const mainNav = $('#main-nav');

function closeMenu() {
  if (!menuToggle || !mainNav) return;

  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menu');
  mainNav.classList.remove('is-open');
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';

    menuToggle.setAttribute('aria-expanded', String(!expanded));
    menuToggle.setAttribute(
      'aria-label',
      expanded ? 'Abrir menu' : 'Fechar menu'
    );

    mainNav.classList.toggle('is-open', !expanded);
  });

  $$('#main-nav a').forEach((link) =>
    link.addEventListener('click', closeMenu)
  );

  document.addEventListener('click', (event) => {
    if (
      !mainNav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 640) closeMenu();
  });
}

// Reading progress
const progressFill = $('#scroll-progress-fill');
let progressTicking = false;

function updateProgress() {
  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;

  const percentage =
    maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;

  if (progressFill) {
    progressFill.style.width =
      `${Math.min(100, Math.max(0, percentage))}%`;
  }

  progressTicking = false;
}

window.addEventListener('scroll', () => {
  if (!progressTicking) {
    window.requestAnimationFrame(updateProgress);
    progressTicking = true;
  }
}, { passive: true });

updateProgress();

// Reveal elements as they enter the viewport
const revealElements = $$('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -32px 0px'
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) =>
    element.classList.add('is-visible')
  );
}

// Gentle parallax on the hero photo
// Disabled for reduced-motion devices
const heroImage = $('.hero-image');
const reducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
);

let parallaxTicking = false;

function updateParallax() {
  if (
    heroImage &&
    !reducedMotion.matches &&
    window.innerWidth > 640
  ) {
    const offset = Math.min(window.scrollY * 0.12, 120);

    heroImage.style.transform =
      `scale(1.04) translate3d(0, ${offset}px, 0)`;
  }

  parallaxTicking = false;
}

window.addEventListener('scroll', () => {
  if (!parallaxTicking) {
    window.requestAnimationFrame(updateParallax);
    parallaxTicking = true;
  }
}, { passive: true });

// Accessible text modal
const modal = $('#site-modal');
const modalPanel = $('.modal-panel', modal);
const modalKicker = $('#modal-kicker');
const modalTitle = $('#modal-title');
const modalBody = $('#modal-body');

let previousFocus = null;

function appendParagraphs(container, paragraphs) {
  container.replaceChildren();

  paragraphs.forEach((text, index) => {
    const p = document.createElement('p');
    p.textContent = text;

    if (
      index === paragraphs.length - 1 &&
      /importa\.|você é especial\.|merece coisas bonitas\./i.test(text)
    ) {
      p.classList.add('modal-highlight');
    }

    container.appendChild(p);
  });
}

function openModal({
  kicker = 'UMA MENSAGEM PARA VOCÊ',
  title = 'Um detalhe especial.',
  paragraphs = [],
  image = null
}) {
  if (!modal) return;

  previousFocus = document.activeElement;

  modalKicker.textContent = kicker;
  modalTitle.textContent = title;
  modalBody.replaceChildren();

  if (image) {
    const img = document.createElement('img');

    img.src = image.src;
    img.alt = image.alt || '';
    img.loading = 'eager';

    modalBody.appendChild(img);
  }

  const paragraphsWrap = document.createElement('div');

  appendParagraphs(paragraphsWrap, paragraphs);
  modalBody.appendChild(paragraphsWrap);

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  window.setTimeout(() => modalPanel?.focus(), 30);
}

function closeModal() {
  if (!modal || !modal.classList.contains('is-open')) return;

  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');

  if (previousFocus instanceof HTMLElement) {
    previousFocus.focus({ preventScroll: true });
  }
}

$$('[data-close-modal]').forEach((button) =>
  button.addEventListener('click', closeModal)
);

// Memory cards open their own message
$$('[data-memory]').forEach((card) => {
  card.addEventListener('click', () => {
    const memory = CONTENT.memories[Number(card.dataset.memory)];

    if (!memory) return;

    card.setAttribute('aria-expanded', 'true');

    openModal({
      kicker: memory.kicker,
      title: memory.title,
      paragraphs: memory.paragraphs
    });
  });
});

// Letter cards open a reading modal
$$('[data-letter]').forEach((card) => {
  card.addEventListener('click', () => {
    const letter = CONTENT.letters[Number(card.dataset.letter)];

    if (!letter) return;

    openModal({
      kicker: letter.kicker,
      title: letter.title,
      paragraphs: letter.paragraphs
    });
  });
});

// Gallery lightbox with previous/next and keyboard support
const lightbox = $('#lightbox');
const lightboxImage = $('#lightbox-image');
const lightboxCaption = $('#lightbox-caption');
const lightboxClose = $('.lightbox-close');

let activeGalleryIndex = 0;
let lightboxPreviousFocus = null;

function renderGalleryImage(index) {
  activeGalleryIndex = (index + GALLERY.length) % GALLERY.length;

  const item = GALLERY[activeGalleryIndex];

  if (!item || !lightboxImage || !lightboxCaption) return;

  lightboxImage.src = item.src;
  lightboxImage.alt = item.alt;
  lightboxCaption.textContent = item.caption;
}

function openLightbox(index) {
  if (!lightbox) return;

  lightboxPreviousFocus = document.activeElement;

  renderGalleryImage(index);

  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  lightboxClose?.focus({ preventScroll: true });
}

function closeLightbox() {
  if (!lightbox || !lightbox.classList.contains('is-open')) return;

  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');

  if (lightboxPreviousFocus instanceof HTMLElement) {
    lightboxPreviousFocus.focus({ preventScroll: true });
  }
}

$$('[data-gallery]').forEach((button) => {
  button.addEventListener('click', () => {
    openLightbox(Number(button.dataset.gallery));
  });
});

lightboxClose?.addEventListener('click', closeLightbox);

$('.lightbox-prev')?.addEventListener('click', () => {
  renderGalleryImage(activeGalleryIndex - 1);
});

$('.lightbox-next')?.addEventListener('click', () => {
  renderGalleryImage(activeGalleryIndex + 1);
});

lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});

// Surprises: each control performs a specific action
$$('[data-surprise]').forEach((button) => {
  button.addEventListener('click', () => {
    const type = button.dataset.surprise;

    if (type === 'message' || type === 'quote') {
      const surprise = CONTENT.surprises[type];

      openModal({
        kicker: surprise.kicker,
        title: surprise.title,
        paragraphs: surprise.paragraphs
      });

      return;
    }

    if (type === 'photo') {
      openModal({
        kicker: 'UM INSTANTE BONITO PARA GUARDAR',
        title: 'Um pouco de beleza, só para você.',
        image: GALLERY[4],
        paragraphs: [
          'Troque esta imagem por uma foto especial de vocês. Às vezes, uma imagem consegue guardar um sentimento inteiro sem precisar explicar muita coisa.'
        ]
      });
    }
  });
});

// Keyboard support for overlays
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
    closeLightbox();
    closeMenu();
  }

  if (lightbox?.classList.contains('is-open')) {
    if (event.key === 'ArrowLeft') {
      renderGalleryImage(activeGalleryIndex - 1);
    }

    if (event.key === 'ArrowRight') {
      renderGalleryImage(activeGalleryIndex + 1);
    }
  }
});

// Decorative particle field in the final section
const canvas = $('#particle-canvas');
const finalSection = $('.final-section');

if (canvas && finalSection) {
  const context = canvas.getContext('2d');

  let particles = [];
  let canvasWidth = 0;
  let canvasHeight = 0;
  let animationId = null;

  const particleCount = window.innerWidth < 640 ? 26 : 54;

  function resizeCanvas() {
    const rect = finalSection.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);

    canvasWidth = rect.width;
    canvasHeight = rect.height;

    canvas.width = Math.floor(canvasWidth * ratio);
    canvas.height = Math.floor(canvasHeight * ratio);

    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;

    context?.setTransform(ratio, 0, 0, ratio, 0, 0);

    particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight,
      radius: Math.random() * 1.25 + 0.35,
      speed: Math.random() * 0.22 + 0.05,
      drift: (Math.random() - 0.5) * 0.12,
      alpha: Math.random() * 0.55 + 0.12,
      phase: Math.random() * Math.PI * 2
    }));
  }

  function drawParticles(time = 0) {
    if (!context || reducedMotion.matches) return;

    context.clearRect(0, 0, canvasWidth, canvasHeight);

    particles.forEach((particle) => {
      particle.y -= particle.speed;
      particle.x += particle.drift;

      if (particle.y < -5) {
        particle.y = canvasHeight + 5;
        particle.x = Math.random() * canvasWidth;
      }

      if (particle.x < -5) particle.x = canvasWidth + 5;
      if (particle.x > canvasWidth + 5) particle.x = -5;

      const pulse = .7 + Math.sin(time * .0007 + particle.phase) * .3;

      context.beginPath();
      context.arc(
        particle.x,
        particle.y,
        particle.radius,
        0,
        Math.PI * 2
      );

      context.fillStyle =
        `rgba(255, ${150 + Math.round(pulse * 45)}, ${205 + Math.round(pulse * 35)}, ${particle.alpha * pulse})`;

      context.shadowColor = 'rgba(255,105,180,.45)';
      context.shadowBlur = particle.radius > 1 ? 8 : 3;

      context.fill();
    });

    context.shadowBlur = 0;

    animationId = window.requestAnimationFrame(drawParticles);
  }

  if (context) {
    resizeCanvas();

    if (!reducedMotion.matches) {
      animationId = window.requestAnimationFrame(drawParticles);
    }

    window.addEventListener('resize', resizeCanvas, { passive: true });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden && animationId) {
        window.cancelAnimationFrame(animationId);
        animationId = null;
      } else if (
        !document.hidden &&
        !reducedMotion.matches &&
        !animationId
      ) {
        animationId = window.requestAnimationFrame(drawParticles);
      }
    });

    reducedMotion.addEventListener?.('change', () => {
      if (reducedMotion.matches && animationId) {
        window.cancelAnimationFrame(animationId);
        animationId = null;

        context.clearRect(0, 0, canvasWidth, canvasHeight);
      } else if (!reducedMotion.matches && !animationId) {
        animationId = window.requestAnimationFrame(drawParticles);
      }
    });
  }
}