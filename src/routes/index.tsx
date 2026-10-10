import { createFileRoute } from "@tanstack/react-router";
import { ThiagoSavedaPage } from "@/components/ThiagoSavedaPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thiago Saveda — Sua história. Todas as suas cores." },
      {
        name: "description",
        content:
          "Psicanálise e psicopedagogia online com Thiago Saveda. Linguagem, masculinidades e vivências gays. Adolescentes e adultos. Solicite sua triagem gratuita.",
      },
      { property: "og:title", content: "Thiago Saveda — Sua história. Todas as suas cores." },
      {
        property: "og:description",
        content:
          "Um espaço para ser, por inteiro. Psicanálise e psicopedagogia online. Linguagem, masculinidades e vivências gays.",
      },
    ],
  }),
  component: ThiagoSavedaPage,
});
