# Thiago Saveda — Ser você. Por inteiro.

Reformulação completa com fundo escuro, verde-lima, retratos grandes, bandeira Progress Pride, biografia, espaços de escuta, formação, experiência docente, pesquisa, reflexões e contato.

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

As duas novas fotografias são retratos públicos do próprio Thiago, obtidos nas fontes abaixo. Nenhum rosto ou fotografia foi gerado por IA. As versões WebP têm 640, 1024 e 1600 pixels, com escolha responsiva pelo navegador. Os enquadramentos são feitos em CSS, preservando os arquivos e a identidade.

| Arquivo                   | Original e procedência                                                                                                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `thiago-arco-iris-*.webp` | [Retrato original, 1969 × 1969](https://colorsdj.com/wp-content/uploads/2020/11/release_equipe_thiagosaveda.jpg), na apresentação pessoal de Thiago na Colors DJ Magazine |
| `thiago-retrato-*.webp`   | Retrato do perfil de autoria do [Palavriado](https://palavriadoo.blogspot.com/), disponível em 1600 × 1600                                                                |
| `retrato-instagram.jpg`   | Foto do [Instagram profissional](https://www.instagram.com/thiagosaveda.psi/), 150 × 150; usada apenas como avatar pequeno                                                |
| `pequeno-principe.jpg`    | [Publicação original](https://www.instagram.com/thiagosaveda.psi/p/DdCjRsiJ_Kc/)                                                                                          |
| `professor-sim.jpg`       | [Publicação original](https://www.instagram.com/thiagosaveda.psi/p/DdjLHX7TSmL/)                                                                                          |
| `marcelo-marmelo.jpg`     | [Publicação original](https://www.instagram.com/thiagosaveda.psi/p/Dcq8yY5TEQO/)                                                                                          |

O perfil pessoal `@saveda` exige login e confirmação de idade. Os novos retratos vieram das fontes públicas identificadas acima, para obter fotografias de alta resolução. A galeria permite ampliar os dois retratos e acessar sua procedência.

## Funcionalidades

- Menu responsivo com navegação por âncoras.
- Retratos ampliáveis, com controles e navegação por teclado.
- Espaços de escuta expansíveis e perguntas frequentes.
- Triagem por Instagram com mensagem copiável e alternativa quando a área de transferência não está disponível.
- Janelas nativas com foco contido, fechamento por Escape e retorno ao botão de origem.
- Animações respeitam a preferência por movimento reduzido; o conteúdo permanece legível sem JavaScript.
- Fontes locais Manrope e Instrument Serif, com licenças na pasta `public/fonts`.

O site não coleta dados nem confirma horários. A triagem é solicitada diretamente a Thiago pelo Instagram.

## Desenvolvimento

`npm run dev` inicia o projeto. `npm run build` gera a versão de produção. O componente principal está em `src/components/ThiagoSavedaPage.tsx`; os estilos, em `src/styles.css`. O histórico Git deve ser preservado com commits normais.
