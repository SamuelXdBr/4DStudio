# Site Institucional - Documentação

# Visão Geral
Este projeto consiste em um site institucional responsivo desenvolvido com HTML, CSS, JavaScript e Bootstrap 5. O site apresenta uma estrutura de página única (single-page) com navegação suave entre as seções.

# Estrutura do Projeto
├── index.html             # Página principal comentada por seção
├── styles.css             # Estilos personalizados com comentários por seção (Hero, Produtos, Contato...)
├── main.js                # Lógica principal com efeitos de rolagem, validação de formulário, contadores, etc.
├── animations.js          # Animações personalizadas (parallax, efeito de digitação, hover nos cards)
└── Documentação.txt       # Este arquivo

# Tecnologias Utilizadas
- HTML5
- CSS3 (com variáveis CSS)
- JavaScript moderno (ES6+)
- Bootstrap 5.3.0
- Font Awesome 6.4.0
- Google Fonts (Montserrat e Open Sans)
- AOS (Animate On Scroll)

# Seções do Site (e respectivos arquivos)

## 1. Navegação (`mainNav`)
- Menu responsivo
- Efeito de "encolher" ao rolar
- Comentado em: `index.html`, `main.js`, `styles.css`

## 2. Seção Hero
- Banner com imagem de fundo e overlay
- Título animado com digitação (em `animations.js`)
- Botões de ação (CTA)
- Comentado em: `index.html`, `styles.css`, `animations.js`

## 3. Produtos (`#products`)
- Cards com ícones e efeitos hover 3D
- Comentado em: `index.html`, `styles.css`, `animations.js`

## 4. Sobre Nós (`#about`)
- Imagem e texto institucional
- Contadores animados com JavaScript
- Comentado em: `index.html`, `main.js`, `styles.css`

## 5. Depoimentos (`#testimonials`)
- Carrossel Bootstrap com depoimentos e estrelas
- Comentado em: `index.html`, `styles.css`

## 6. Contato (`#contact`)
- Informativo com ícones e um formulário funcional
- Validação de campos no `main.js`
- Comentado em: `index.html`, `main.js`, `styles.css`

## 7. Rodapé (`footer`)
- Links, redes sociais, newsletter e copyright
- Comentado em: `index.html`, `styles.css`

# Recursos de Interatividade e Animação
- Scroll suave (main.js)
- Efeito Parallax (animations.js)
- Digitação no título Hero (animations.js)
- Hover nos links e cards
- AOS: animações ao rolar
- Contadores automáticos (main.js)

# Responsividade
O layout se adapta automaticamente para:
- Mobile: < 576px
- Tablet: 576px - 991px
- Desktop: > 992px

# Melhoria e Manutenção
- Comentários adicionados diretamente nos arquivos de estilo e scripts facilitam a compreensão
- Separados por seção no mesmo padrão do HTML

# Desenvolvedores
- Marcelo Castilho Da Silva - RA: 425105151
- Samuel Costa Marques - RA: 425104955
