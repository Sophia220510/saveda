# Thiago Saveda — Sua história. Todas as suas cores.

Reformulação editorial em creme, vinho e lavanda, com retrato principal diante dos livros, cinco fotografias diferentes, colagens, manifesto, bandeira Progress Pride, biografia, espaços de escuta, percursos com abas, formação, experiência docente, pesquisa, reflexões e contato.

## Como editar os dados

O arquivo **`src/data/thiago.ts`** reúne os links, as imagens, a formação e a trajetória.

- Em `thiagoProfile.education`, substitua `Instituição X`, `XXXX — XXXX` e `Conclusão: XXXX` pelos dados reais.
- Em `thiagoProfile.experience`, substitua `Escola X`, `Faculdade X`, os períodos e `X anos`.
- Os campos com X são espaços reservados, incluídos a pedido do usuário. Não são dados profissionais verificados.
- As instituições de formação em Psicanálise e Psicopedagogia ainda precisam ser preenchidas. Não foi acrescentado CRP nem uma graduação em Psicologia.

## Dados confirmados

| Informação                                                                                                               | Fonte                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| Psicopedagogo e psicanalista; atendimento online para adolescentes e adultos; linguagem, masculinidades e vivências gays | [Instagram profissional](https://www.instagram.com/thiagosaveda.psi/)                                         |
| Graduação em Letras pela UEM; experiência como professor no ensino superior; escritor                                    | [Apresentação de autoria de Thiago na Colors DJ Magazine](https://colorsdj.com/equipe-thiago-saveda/)         |
| Mestrado no Programa de Estudos Culturais da USP, com defesa em 2022; pesquisa sobre masculinidades e vivências gays     | [Biblioteca Digital da USP](https://teses.usp.br/teses/disponiveis/100/100135/tde-22072022-125402/pt-br.html) |

A experiência em escolas foi incluída conforme a informação fornecida pelo usuário. Nomes e períodos permanecem editáveis. Não foi inferido um vínculo de emprego apenas a partir de afiliações em artigos.

## Imagens

As cinco fotografias são retratos públicos do próprio Thiago, obtidos nas fontes abaixo. Nenhum rosto ou fotografia foi gerado por IA. As versões WebP têm 640 e 1024 pixels e uma versão maior de até 1600 pixels, limitada à resolução original. O navegador escolhe a versão adequada. Os enquadramentos são feitos em CSS. Cada fotografia aparece uma única vez na página; a galeria oferece ampliação das mesmas imagens.

| Arquivo                    | Original e procedência                                                                                                                                                                              |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `thiago-arco-iris-*.webp`  | [Retrato original, 1969 × 1969](https://colorsdj.com/wp-content/uploads/2020/11/release_equipe_thiagosaveda.jpg), na apresentação pessoal de Thiago na Colors DJ Magazine                           |
| `thiago-retrato-*.webp`    | Retrato do perfil de autoria do [Palavriado](https://palavriadoo.blogspot.com/), disponível em 1600 × 1600                                                                                          |
| `thiago-livros-*.webp`     | [Retrato com livro diante da estante](https://colorsdj.com/wp-content/uploads/2021/10/Para-coluna-nova.jpg), 1041 × 1388, acervo público de Thiago na Colors DJ Magazine; imagem de abertura        |
| `thiago-biblioteca-*.webp` | [Retrato com blusa floral](https://colorsdj.com/wp-content/uploads/2022/09/saveda_209367159_619494902352897_2496929665710293139_n.jpg), 1440 × 1440, acervo público de Thiago na Colors DJ Magazine |
| `thiago-cotidiano-*.webp`  | [Retrato sentado no sofá](https://colorsdj.com/wp-content/uploads/2021/03/thiago-saveda-2-min.jpg), 2208 × 2208, acervo público de Thiago na Colors DJ Magazine                                     |
| `pequeno-principe.jpg`     | [Publicação original](https://www.instagram.com/thiagosaveda.psi/p/DdCjRsiJ_Kc/)                                                                                                                    |
| `professor-sim.jpg`        | [Publicação original](https://www.instagram.com/thiagosaveda.psi/p/DdjLHX7TSmL/)                                                                                                                    |
| `marcelo-marmelo.jpg`      | [Publicação original](https://www.instagram.com/thiagosaveda.psi/p/Dcq8yY5TEQO/)                                                                                                                    |

O perfil pessoal `@saveda` abriu uma tela de login. Os novos retratos vieram do acervo público da Colors DJ Magazine, identificado com o nome Thiago Saveda. Não se afirma que o perfil pessoal foi acessado. A galeria permite ampliar os cinco retratos e acessar sua procedência. A pequena imagem `retrato-instagram.jpg` foi mantida no acervo, mas deixou de aparecer no layout.

## Funcionalidades

- Menu responsivo com navegação por âncoras, item atual destacado e `aria-current`.
- Indicador fixo de seção com “Você está em” e link para a próxima etapa. Seções com nomes diretos e numeração de 01 a 08.
- Textos de leitura em 16 px e rótulos a partir de 12 px. Formação em duas colunas no computador e uma coluna no celular; credenciais em linhas no celular; cartões com quebras de texto e espaçamentos revisados.
- Faixa tipográfica em dois grupos idênticos, cada um com três sequências e largura mínima equivalente à tela, sem espaço vazio no ciclo.
- Retratos ampliáveis, com controles e navegação por teclado.
- Espaços de escuta expansíveis e perguntas frequentes.
- Percursos de Psicanálise e Psicopedagogia com abas acessíveis por teclado.
- Triagem por Instagram com mensagem copiável e alternativa quando a área de transferência não está disponível.
- Janelas nativas com foco contido, fechamento por Escape e retorno ao botão de origem.
- Entrada com sequência de títulos, retrato e elementos de colagem; revelações com intervalos entre cartões; paralaxe suave na imagem principal; faixa tipográfica em movimento; bandeira com oscilação sutil; microinterações e barra de progresso da leitura. A renderização inicial permanece visível antes do JavaScript.
- Animações respeitam a preferência por movimento reduzido, inclusive quando alterada durante a visita; o conteúdo permanece legível sem JavaScript.
- Fontes locais Manrope e Instrument Serif, com licenças na pasta `public/fonts`.

O site não coleta dados nem confirma horários. A triagem é solicitada diretamente a Thiago pelo Instagram.

## Desenvolvimento

`npm run dev` inicia o projeto. `npm run build` gera a versão de produção. O componente principal está em `src/components/ThiagoSavedaPage.tsx`; os estilos, em `src/styles.css`. O histórico Git deve ser preservado com commits normais.
