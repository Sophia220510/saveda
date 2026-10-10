import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <main className="fallback-page">
      <span>404</span>
      <h1>Essa página não está por aqui.</h1>
      <p>Você pode voltar ao início e continuar a conversa.</p>
      <Link to="/" className="button">
        Voltar ao início
      </Link>
    </main>
  );
}
function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  return (
    <main className="fallback-page">
      <h1>Vamos tentar de novo?</h1>
      <p>A página não carregou. Tente novamente em um instante.</p>
      <button
        className="button"
        onClick={() => {
          router.invalidate();
          reset();
        }}
      >
        Tentar novamente
      </button>
    </main>
  );
}
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Thiago Saveda — Ser você. Por inteiro." },
      {
        name: "description",
        content:
          "Psicanálise e psicopedagogia online com Thiago Saveda. Linguagem, masculinidades e vivências gays. Adolescentes e adultos. Agende sua triagem gratuita.",
      },
      { name: "author", content: "Thiago Saveda" },
      { property: "og:site_name", content: "Thiago Saveda" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#191f1b" },
    ],
    links: [
      { rel: "stylesheet", href: "/fonts/manrope.css" },
      { rel: "stylesheet", href: "/fonts/instrument-serif.css" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon-saveda.svg" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});
function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
