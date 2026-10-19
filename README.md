# Site da Auzên

Site institucional estático da Auzên — Espaço para Animais, em Sorocaba/SP.

## Estrutura

- `index.html`: página principal.
- `clinica-veterinaria.html`: página da clínica veterinária (cães e gatos, Vila Carvalho, sábados sob agendamento), com FAQ e dados estruturados `VeterinaryCare`. Está no menu, no card "Atendimento veterinário" e no sitemap.
- `depoimentos.html`: página provisória, com `noindex`, até a publicação de relatos reais.
- `assets/css/styles.css`: identidade visual e responsividade.
- `assets/js/main.js`: menu móvel, animações, galeria e eventos de CTA.
- `assets/images/`: imagens WebP otimizadas usadas no site. As fotos originais (JPEG) não ficam no repositório; adicione apenas versões otimizadas que forem de fato usadas nas páginas.

## Visualização local

Abra `index.html` no navegador ou inicie um servidor estático na raiz do projeto.

## Pendências antes da publicação definitiva

1. Confirmar CEP e horários oficiais (inclusive o horário da clínica em dias úteis e o que vale para os sábados sob agendamento) e manter os mesmos dados no site, no JSON-LD de `index.html` e `clinica-veterinaria.html` e no Perfil da Empresa no Google.
2. Conectar Google Analytics ou Tag Manager. Os cliques já geram o evento `auzen_cta_click` no `dataLayer`.
3. Substituir a página provisória de depoimentos apenas por relatos reais e autorizados; depois remover o `noindex` e incluí-la no sitemap.
4. Cadastrar `https://auzenpet.com.br/sitemap.xml` no Google Search Console.
5. Confirmar com a responsável técnica outros serviços da clínica (por exemplo vacinação, exames realizados no local, coleta de material, cirurgias, castração, atendimento de urgência, microchipagem, atestados de saúde para viagem) antes de incluí-los em `clinica-veterinaria.html`. Hoje a página lista só consultas, orientações de saúde, receitas e pedidos de exames.

## Conteúdo e SEO local

Priorizar conteúdo útil e original sobre creche, hotel e bem-estar de cães de pequeno porte em Sorocaba. Evitar páginas repetitivas ou depoimentos não verificáveis.
