# Thiago Saveda — Ser você. Por inteiro.

Site profissional de Thiago Saveda, psicopedagogo e psicanalista. Identidade visual com verde-lima, fundo escuro, retratos reais em alta resolução e bandeira Progress Pride. Inclui apresentação, espaços de escuta, formação, trajetória docente, pesquisa, reflexões e triagem por Instagram.

## Executar

```sh
git clone https://github.com/Sophia220510/saveda.git
cd saveda
npm ci
npm run dev
```

`npm run build` gera a versão de produção com TanStack Start e Nitro. `vercel.json` e `vite.config.ts` mantêm a configuração de publicação existente.

## Editar a formação e a experiência

Abra **[`src/data/thiago.ts`](src/data/thiago.ts)**. Esse arquivo reúne:

- Formação, instituições e anos de conclusão.
- Experiência em escolas e faculdades, períodos e duração.
- Links de contato e da pesquisa na USP.
- Imagens e links das publicações.

Substitua `Instituição X`, `Escola X`, `Faculdade X`, `XXXX — XXXX`, `Conclusão: XXXX` e `X anos` pelos dados corretos. Esses campos estão reservados para edição; os períodos não foram inventados.

A graduação em Letras pela UEM e o mestrado em Estudos Culturais pela USP foram confirmados em fontes públicas. A documentação das fontes e dos retratos está em [`docs/thiago-saveda.md`](docs/thiago-saveda.md).

## Arquivos principais

- `src/components/ThiagoSavedaPage.tsx`: página, galeria, conteúdos expansíveis e janela de contato.
- `src/data/thiago.ts`: dados editáveis.
- `src/styles.css`: identidade visual e comportamento responsivo.
- `src/routes/__root.tsx` e `src/routes/index.tsx`: shell e metadados.
- `public/images/thiago/`: retratos responsivos e publicações do Instagram.
- `public/fonts/`: fontes locais e suas licenças.

## Validação da reformulação

Build de produção, TypeScript e ESLint dos arquivos alterados aprovados. Verificação no navegador em dez larguras entre 320 e 1440 pixels, sem rolagem lateral ou imagens quebradas. Galeria, navegação por teclado, menu móvel, perguntas frequentes, temas de escuta e cópia da mensagem de triagem conferidos.

O contato abre o Instagram profissional. O site não coleta dados, não envia mensagens automaticamente e não confirma horários.
