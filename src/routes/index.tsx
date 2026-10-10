import { createFileRoute } from "@tanstack/react-router";
import { ThiagoSavedaPage } from "@/components/ThiagoSavedaPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thiago Saveda — Sua história merece escuta" },
      {
        name: "description",
        content:
          "Psicanálise e psicopedagogia online com Thiago Saveda. Linguagem, masculinidades e vivências gays. Adolescentes e adultos. Solicite sua triagem gratuita.",
      },
      { property: "og:title", content: "Thiago Saveda — Sua história merece escuta" },
      {
        property: "og:description",
        content:
          "Um espaço para colocar em palavras o que você sente. Psicanálise e psicopedagogia online para adolescentes e adultos.",
      },
    ],
  }),
  component: ThiagoSavedaPage,
});
