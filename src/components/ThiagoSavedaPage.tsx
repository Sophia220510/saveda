import { useEffect, useId, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Copy,
  GraduationCap,
  Globe2,
  Heart,
  Instagram,
  Menu,
  MessageCircle,
  MoveUpRight,
  Plus,
  Sparkles,
  X,
} from "lucide-react";
import { thiagoProfile, portraits, reflections } from "@/data/thiago";

const spaces = [
  {
    number: "01",
    title: "Identidade & vivências gays",
    subtitle: "Seu jeito de ser, seus afetos, sua história.",
    text: "Pertencimento, relações, sexualidade e os sentidos de viver como homem gay. Um espaço para conversar sobre suas experiências e sobre as expectativas que atravessam a sua identidade.",
    tags: ["Vivências gays", "Pertencimento", "Sexualidade"],
    icon: Heart,
    color: "pink",
  },
  {
    number: "02",
    title: "Masculinidades & relações",
    subtitle: "Outras possibilidades de sentir e se relacionar.",
    text: "O que significa ser homem para você? As cobranças, os papéis que aprendemos a ocupar e as maneiras de viver os vínculos podem encontrar lugar na conversa.",
    tags: ["Masculinidades", "Vínculos", "Afetos"],
    icon: Sparkles,
    color: "lime",
  },
  {
    number: "03",
    title: "Linguagem & subjetividade",
    subtitle: "Palavras para aquilo que ainda não ganhou nome.",
    text: "A linguagem faz parte de como nos reconhecemos e contamos nossa história. A escuta abre espaço para o que você diz, para as suas perguntas e para os sentidos que podem surgir.",
    tags: ["Expressão", "Narrativas", "Escuta"],
    icon: MessageCircle,
    color: "blue",
  },
  {
    number: "04",
    title: "Aprendizagem & descobertas",
    subtitle: "Um olhar atento para cada caminho de aprender.",
    text: "A psicopedagogia considera a relação singular de cada pessoa com a aprendizagem. O percurso inclui os desafios, o contexto e as experiências de adolescentes e adultos.",
    tags: ["Psicopedagogia", "Adolescências", "Aprendizagem"],
    icon: BookOpen,
    color: "orange",
  },
];
const questions = [
  {
    question: "Preciso saber exatamente sobre o que quero conversar?",
    answer:
      "Uma dúvida, uma inquietação ou a vontade de falar já podem ser um começo. A triagem gratuita é um primeiro contato para apresentar o que você procura e conhecer a proposta de atendimento.",
  },
  {
    question: "O atendimento é online?",
    answer:
      "Sim. Thiago divulga atendimento online para adolescentes e adultos. Os detalhes sobre plataforma, horários e organização dos encontros são combinados diretamente na conversa inicial.",
  },
  {
    question: "O espaço é voltado à comunidade LGBTQIA+?",
    answer:
      "Linguagem, masculinidades e vivências gays fazem parte do foco de trabalho apresentado por Thiago. Você pode conversar na triagem sobre sua história e sobre o tipo de acompanhamento que procura.",
  },
  {
    question: "Como funciona a triagem gratuita?",
    answer:
      "Você solicita o primeiro contato pelo Instagram profissional @thiagosaveda.psi. A conversa permite apresentar suas questões, conhecer a proposta e combinar diretamente com Thiago os próximos passos.",
  },
  {
    question: "Qual é a diferença entre os percursos de atendimento?",
    answer:
      "Thiago se apresenta como psicopedagogo e psicanalista. Na triagem, você pode contar o que está buscando e perguntar sobre cada proposta, para entender qual caminho faz sentido para sua demanda.",
  },
];

function PrideFlag({ className = "" }: { className?: string }) {
  const titleId = useId();
  return (
    <svg className={className} viewBox="0 0 300 180" role="img" aria-labelledby={titleId}>
      <title id={titleId}>Bandeira do orgulho LGBTQIA+ Progress Pride</title>
      <path fill="#e84d54" d="M0 0h300v30H0z" />
      <path fill="#f29a48" d="M0 30h300v30H0z" />
      <path fill="#f6d568" d="M0 60h300v30H0z" />
      <path fill="#59a77a" d="M0 90h300v30H0z" />
      <path fill="#568cca" d="M0 120h300v30H0z" />
      <path fill="#8b62b0" d="M0 150h300v30H0z" />
      <path fill="#262629" d="M0 0h25l100 90-100 90H0z" />
      <path fill="#945d42" d="M0 0h5l100 90L5 180H0z" />
      <path fill="#80c5db" d="M0 14l84 76L0 166z" />
      <path fill="#eab8c7" d="M0 33l63 57L0 147z" />
      <path fill="#fff7ef" d="M0 52l42 38L0 128z" />
    </svg>
  );
}
function Star({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <path
        d="m50 0 8 31 27-16-16 27 31 8-31 8 16 27-27-16-8 31-8-31-27 16 16-27L0 50l31-8-16-27 27 16Z"
        fill="currentColor"
      />
    </svg>
  );
}
function Portrait({
  index,
  className = "",
  eager = false,
}: {
  index: number;
  className?: string;
  eager?: boolean;
}) {
  const portrait = portraits[index]!;
  const width = "width" in portrait ? portrait.width : 1600;
  const height = "height" in portrait ? portrait.height : 1600;
  const largest = Math.min(width, 1600);
  return (
    <img
      className={className}
      src={`/images/thiago/${portrait.name}-1024.webp`}
      srcSet={`/images/thiago/${portrait.name}-640.webp 640w, /images/thiago/${portrait.name}-1024.webp 1024w, /images/thiago/${portrait.name}-${largest}.webp ${largest}w`}
      sizes="(max-width: 600px) 100vw, (max-width: 1000px) 55vw, 640px"
      width={width}
      height={height}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      alt={portrait.alt}
    />
  );
}
function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      href="#inicio"
      className={`brand ${footer ? "brand-footer" : ""}`}
      aria-label="Thiago Saveda — início"
    >
      <span className="brand-mark">
        ts
        <span />
      </span>
      <span className="brand-name">
        thiago saveda<span>PSICANÁLISE & PSICOPEDAGOGIA</span>
      </span>
    </a>
  );
}

export function ThiagoSavedaPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSpace, setActiveSpace] = useState<number | null>(0);
  const [approach, setApproach] = useState(0);
  const [dialog, setDialog] = useState<"contact" | "portrait" | null>(null);
  const [portraitIndex, setPortraitIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const message =
    "Olá, Thiago! Conheci seu site e gostaria de agendar uma triagem gratuita. Como podemos combinar?";
  useEffect(() => {
    const element = dialogRef.current;
    if (!element) return undefined;
    if (dialog && !element.open) element.showModal();
    if (!dialog && element.open) element.close();
    if (!dialog) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [dialog]);
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    root.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" },
    );
    root.querySelectorAll("[data-reveal]").forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight - 30)
        element.classList.add("reveal-pending");
      observer.observe(element);
    });
    let frame = 0;
    const update = () => {
      frame = 0;
      const scroll = window.scrollY;
      const range = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty("--scroll-progress", String(range > 0 ? scroll / range : 0));
      root.style.setProperty("--hero-shift", `${Math.min(scroll * 0.09, 70)}px`);
      root.classList.toggle("has-scrolled", scroll > 30);
      root.classList.toggle("past-intro", scroll > 900);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onPreferenceChange = () => {
      root.classList.toggle("motion-ready", !media.matches);
      if (media.matches)
        root.querySelectorAll(".reveal-pending").forEach((e) => e.classList.add("revealed"));
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    media.addEventListener("change", onPreferenceChange);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      media.removeEventListener("change", onPreferenceChange);
      root.classList.remove("motion-ready");
    };
  }, []);
  function openContact() {
    setMenuOpen(false);
    setCopied(false);
    setCopyFailed(false);
    setDialog("contact");
  }
  function openPortrait(index: number) {
    setPortraitIndex(index);
    setDialog("portrait");
  }
  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setCopyFailed(false);
    } catch {
      setCopyFailed(true);
    }
  }

  return (
    <div className="saveda" ref={rootRef} id="inicio">
      <a href="#conteudo" className="skip-link">
        Ir para o conteúdo
      </a>
      <div className="rainbow-edge" aria-hidden="true" />
      <div className="reading-progress" aria-hidden="true" />
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav
            id="main-nav"
            className={`main-nav ${menuOpen ? "is-open" : ""}`}
            aria-label="Navegação principal"
          >
            {[
              ["#sobre", "Thiago"],
              ["#escuta", "A escuta"],
              ["#trajetoria", "Trajetória"],
              ["#palavras", "Reflexões"],
            ].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <button className="button nav-mobile-contact" onClick={openContact}>
              Vamos conversar <ArrowUpRight size={18} />
            </button>
          </nav>
          <button className="button button-small header-contact" onClick={openContact}>
            Vamos conversar <ArrowUpRight size={17} />
          </button>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-wash" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="pride-pill">
                <PrideFlag /> TODAS AS SUAS CORES CABEM AQUI.
              </div>
              <span className="eyebrow hero-eyebrow">
                THIAGO SAVEDA · PSICANALISTA & PSICOPEDAGOGO
              </span>
              <h1 id="hero-title">
                Sua história.
                <br />
                Todas as
                <br />
                suas <em>cores.</em>
              </h1>
              <p>
                Um espaço de escuta para as suas histórias,
                <br className="desktop-break" /> os seus afetos e tudo o que faz de você, você.
              </p>
              <div className="hero-actions">
                <button className="button" onClick={openContact}>
                  Agendar triagem gratuita <ArrowUpRight size={21} />
                </button>
                <span>
                  Online. No seu tempo.
                  <br />
                  Adolescentes e adultos.
                </span>
              </div>
              <div className="hero-person">
                <span className="hero-person-mark">
                  <MessageCircle size={23} strokeWidth={1.3} />
                </span>
                <div>
                  Prazer, Thiago.<span>Entre a educação, a pesquisa e a escuta.</span>
                </div>
                <svg viewBox="0 0 80 35" fill="none" aria-hidden="true">
                  <path
                    d="M4 10c20-12 50 15 68 11M58 7l16 13-17 9"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-orbit" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="photo-index">LINGUAGEM · MASCULINIDADES · VIVÊNCIAS GAYS</span>
              <button
                className="hero-photo portrait-button"
                onClick={() => openPortrait(2)}
                aria-label="Ampliar retrato de Thiago Saveda com um livro"
              >
                <Portrait index={2} eager />
                <span className="photo-expand">
                  <Plus size={19} />
                </span>
              </button>
              <div className="photo-name">
                Thiago <span>Saveda</span>
              </div>
              <div className="hero-pride-card">
                <PrideFlag />
                <span>
                  Existir também
                  <br />é pertencer.
                </span>
              </div>
              <div className="hero-sticker">
                <Star />
                <span>
                  ESCUTA
                  <br />
                  <strong>sem moldes.</strong>
                </span>
              </div>
              <div className="photo-caption">
                <span>ESCUTA. PRESENÇA. POSSIBILIDADES.</span>
                <ArrowDown size={18} />
              </div>
            </div>
          </div>
          <div className="container hero-bottom">
            <a href="#sobre">
              Conheça quem escuta <ArrowDown size={17} />
            </a>
            <span>
              <span className="status-dot" /> ATENDIMENTO ONLINE
            </span>
            <a href="#diversidade">
              <PrideFlag /> UM ESPAÇO LGBTQIA+ <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        <div className="credential-bar">
          <div className="container">
            <span>
              <GraduationCap />
              <span>
                <strong>Letras · UEM</strong>Linguagem como ponto de partida
              </span>
            </span>
            <span>
              <BookOpen />
              <span>
                <strong>Estudos Culturais · USP</strong>Pesquisa sobre masculinidades
              </span>
            </span>
            <span>
              <Globe2 />
              <span>
                <strong>Encontros online</strong>Um espaço que chega até você
              </span>
            </span>
          </div>
        </div>

        <div className="moving-ribbon" aria-hidden="true">
          <div>
            {[0, 1].map((i) => (
              <span key={i}>
                ESCUTA <Star /> IDENTIDADE <Star /> PERTENCIMENTO <Star /> LIBERDADE DE SER{" "}
                <Star />{" "}
              </span>
            ))}
          </div>
        </div>

        <section className="manifesto container section-space" aria-labelledby="manifesto-title">
          <div className="manifesto-meta" data-reveal>
            <span className="eyebrow">UM CONVITE PARA CHEGAR.</span>
            <span>SEM UM ROTEIRO PRONTO.</span>
          </div>
          <h2 id="manifesto-title" data-reveal>
            Você não precisa ter
            <br />
            todas as respostas para
            <br />
            <em>começar a se escutar.</em>
            <Star />
          </h2>
          <div className="manifesto-bottom" data-reveal>
            <PrideFlag />
            <p>
              Às vezes, o começo é uma pergunta. Às vezes, é algo que você ainda não consegue
              nomear. Há espaço para chegar assim também.
            </p>
            <a className="round-link" href="#escuta" aria-label="Conheça os espaços de escuta">
              <ArrowDown />
            </a>
          </div>
        </section>

        <section
          className="about-section container section-space"
          id="sobre"
          aria-labelledby="about-title"
        >
          <div className="section-label" data-reveal>
            <span>01 — QUEM ESTÁ DO OUTRO LADO</span>
            <span>UMA PESSOA. MUITAS HISTÓRIAS.</span>
          </div>
          <div className="about-grid">
            <div className="about-collage" data-reveal>
              <span className="vertical-caption">EDUCADOR · PESQUISADOR · PSICANALISTA</span>
              <button
                className="about-main-photo portrait-button"
                onClick={() => openPortrait(0)}
                aria-label="Ampliar retrato de Thiago Saveda com moletom arco-íris"
              >
                <Portrait index={0} />
                <span className="photo-expand">
                  <Plus size={19} />
                </span>
              </button>
              <button
                className="about-small-photo portrait-button"
                onClick={() => openPortrait(4)}
                aria-label="Ampliar retrato de Thiago Saveda no cotidiano"
              >
                <Portrait index={4} />
                <span>
                  Histórias que
                  <br />
                  se encontram.
                </span>
              </button>
              <div className="collage-stamp">
                <PrideFlag />
                <span>
                  EXISTIR
                  <br />
                  COM ORGULHO.
                </span>
              </div>
              <span className="collage-note">Prazer, de verdade.</span>
            </div>
            <div className="about-copy" data-reveal>
              <span className="eyebrow">SOU THIAGO SAVEDA.</span>
              <h2 id="about-title">
                A escuta começa
                <br />
                com um <em>encontro.</em>
              </h2>
              <p className="lead">
                A minha história passa pela sala de aula, pela literatura e pelas perguntas sobre
                quem somos.
              </p>
              <p>
                Sou psicopedagogo e psicanalista, formado em Letras pela UEM e mestre em Estudos
                Culturais pela USP. Meu trabalho aproxima linguagem, masculinidades e vivências
                gays.
              </p>
              <p>
                Como professor em escolas e no ensino superior, estive em contato com diferentes
                formas de aprender e contar o mundo. Como pesquisador, voltei o olhar para as
                narrativas e identidades de homens gays.
              </p>
              <p>
                Hoje, esses caminhos se encontram em uma proposta de escuta que dá lugar à sua
                singularidade: aos afetos, às perguntas e às possibilidades da sua história.
              </p>
              <div className="identity-tags">
                <span>Psicanálise</span>
                <span>Psicopedagogia</span>
                <span>Educação</span>
                <span>Diversidade</span>
              </div>
              <div className="about-details">
                <div>
                  <span>01 / EDUCAR</span>
                  <p>Entender os caminhos de cada pessoa.</p>
                </div>
                <div>
                  <span>02 / PESQUISAR</span>
                  <p>Fazer perguntas sobre quem somos.</p>
                </div>
                <div>
                  <span>03 / ESCUTAR</span>
                  <p>Dar lugar às suas próprias palavras.</p>
                </div>
              </div>
              <div className="about-sign">
                <span>Thiago Saveda</span>
                <a
                  className="text-link"
                  href={thiagoProfile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Me encontre no Instagram <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className="pride-section dark-section"
          id="diversidade"
          aria-labelledby="pride-title"
        >
          <div className="container pride-grid">
            <div className="pride-copy" data-reveal>
              <span className="eyebrow">
                <span className="status-dot" /> IDENTIDADE TEM LUGAR AQUI.
              </span>
              <h2 id="pride-title">
                Todas as cores.
                <br />
                Todos os jeitos
                <br />
                de <em>ser.</em>
              </h2>
              <p>
                Masculinidades, afetos e vivências gays têm espaço na conversa. Sua história pode
                ser escutada com atenção àquilo que faz parte de você.
              </p>
              <a className="text-link" href="#escuta">
                Conheça os espaços de escuta <ArrowUpRight size={20} />
              </a>
            </div>
            <div className="pride-art" data-reveal>
              <div className="pride-art-lines" aria-hidden="true" />
              <PrideFlag className="large-pride-flag" />
              <Star className="pride-star" />
              <div className="pride-art-caption">
                <span>LGBTQIA+</span>
                <span>
                  PERTENCER.
                  <br />
                  SENTIR.
                  <br />
                  EXISTIR.
                </span>
              </div>
              <span className="pride-note">
                O seu lugar no mundo
                <br />
                também se constrói por dentro.
              </span>
            </div>
          </div>
          <div className="pride-values container">
            <span>IDENTIDADE</span>
            <Star />
            <span>PERTENCIMENTO</span>
            <Star />
            <span>AFETO</span>
            <Star />
            <span>LIBERDADE DE SER</span>
          </div>
        </section>

        <section
          className="spaces-section container section-space"
          id="escuta"
          aria-labelledby="spaces-title"
        >
          <div className="section-label" data-reveal>
            <span>02 — ESPAÇOS DE ESCUTA</span>
            <span>A SUA HISTÓRIA PODE COMEÇAR POR AQUI.</span>
          </div>
          <div className="section-heading" data-reveal>
            <h2 id="spaces-title">
              O que você gostaria
              <br />
              de colocar em <em>palavras?</em>
            </h2>
            <p>
              Alguns caminhos para começar.
              <br />A conversa pode ir muito além deles.
            </p>
          </div>
          <div className="spaces-grid">
            <div className="spaces-portrait" data-reveal>
              <Portrait index={1} />
              <div>
                <span className="eyebrow">UM ESPAÇO PARA SE ESCUTAR</span>
                <span>
                  O que você sente
                  <br />
                  merece <em>atenção.</em>
                </span>
              </div>
              <Star />
            </div>
            <div className="spaces-list" data-reveal>
              {spaces.map((space, index) => {
                const Icon = space.icon;
                return (
                  <article
                    className={`space-card ${space.color} ${activeSpace === index ? "active" : ""}`}
                    key={space.number}
                  >
                    <button
                      onClick={() => setActiveSpace(activeSpace === index ? null : index)}
                      aria-expanded={activeSpace === index}
                      aria-controls={`space-content-${index}`}
                    >
                      <span className="space-icon">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span>
                        <small>{space.number} / UM CAMINHO POSSÍVEL</small>
                        <strong>{space.title}</strong>
                      </span>
                      <Plus className="space-plus" size={21} />
                    </button>
                    <div
                      id={`space-content-${index}`}
                      className="space-content"
                      hidden={activeSpace !== index}
                    >
                      <h3>{space.subtitle}</h3>
                      <p>{space.text}</p>
                      <div className="space-tags">
                        {space.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <button className="text-link" onClick={openContact}>
                        Vamos conversar sobre isso <ArrowUpRight size={18} />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="approach-notebook" data-reveal>
            <div className="approach-intro">
              <span className="eyebrow">DOIS OLHARES. A SUA SINGULARIDADE.</span>
              <h3>
                Há mais de um jeito
                <br />
                de abrir <em>a conversa.</em>
              </h3>
              <p>
                Conheça os percursos que fazem parte da apresentação profissional do Thiago. A
                triagem é o momento de conversar sobre o que você procura.
              </p>
              <span className="notebook-note">O ponto de partida é você.</span>
            </div>
            <div className="approach-pages">
              <div role="tablist" aria-label="Percursos de atendimento" className="approach-tabs">
                {["Psicanálise", "Psicopedagogia"].map((label, index) => (
                  <button
                    key={label}
                    id={`approach-tab-${index}`}
                    role="tab"
                    aria-selected={approach === index}
                    aria-controls={`approach-panel-${index}`}
                    tabIndex={approach === index ? 0 : -1}
                    onClick={() => setApproach(index)}
                    onKeyDown={(event) => {
                      if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
                        event.preventDefault();
                        const next = event.key === "Home" ? 0 : event.key === "End" ? 1 : 1 - index;
                        setApproach(next);
                        document.getElementById(`approach-tab-${next}`)?.focus();
                      }
                    }}
                  >
                    {label}
                    <ArrowUpRight size={17} />
                  </button>
                ))}
              </div>
              {[
                {
                  label: "01 / PALAVRA & SUBJETIVIDADE",
                  title: "Um lugar para a sua história ganhar palavras.",
                  description:
                    "Afetos, relações, identidade e os sentidos que você dá às suas experiências podem encontrar lugar na conversa. Você pode começar pelo que está vivendo agora.",
                  questions: [
                    "Como eu conto minha própria história?",
                    "Que expectativas atravessam meus vínculos?",
                    "O que eu gostaria de conseguir dizer?",
                  ],
                },
                {
                  label: "02 / APRENDIZAGEM & LINGUAGEM",
                  title: "Cada forma de aprender carrega uma história.",
                  description:
                    "O olhar psicopedagógico se volta à relação de cada pessoa com a aprendizagem. Na triagem, há espaço para apresentar suas perguntas, seu contexto e os desafios que deseja conversar.",
                  questions: [
                    "Como me relaciono com a aprendizagem?",
                    "Que desafios encontro nesse percurso?",
                    "Como minha história aparece no aprender?",
                  ],
                },
              ].map((item, index) => (
                <div
                  key={item.label}
                  id={`approach-panel-${index}`}
                  role="tabpanel"
                  aria-labelledby={`approach-tab-${index}`}
                  tabIndex={0}
                  hidden={approach !== index}
                  className="approach-panel"
                >
                  <span className="eyebrow">{item.label}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <span className="approach-question-label">
                    PERGUNTAS QUE PODEM ABRIR CAMINHOS
                  </span>
                  <ul>
                    {item.questions.map((question) => (
                      <li key={question}>
                        <span>↳</span>
                        {question}
                      </li>
                    ))}
                  </ul>
                  <button className="text-link" onClick={openContact}>
                    Conhecer a proposta na triagem <ArrowUpRight size={17} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="education-section" id="trajetoria" aria-labelledby="education-title">
          <div className="container section-space">
            <div className="section-label" data-reveal>
              <span>03 — FORMAÇÃO & TRAJETÓRIA</span>
              <span>CONHECIMENTO QUE ENCONTRA A VIDA.</span>
            </div>
            <div className="section-heading" data-reveal>
              <h2 id="education-title">
                Uma trajetória feita
                <br />
                de <em>encontros.</em>
              </h2>
              <p>
                Educação, cultura, linguagem.
                <br />
                Caminhos que se aproximam na escuta.
              </p>
            </div>
            <div className="education-cards" data-stagger>
              {thiagoProfile.education.map((item, index) => (
                <article className="education-card" key={item.title} data-reveal>
                  <div className="education-card-top">
                    <span>{item.label}</span>
                    {index < 2 ? (
                      <GraduationCap size={26} strokeWidth={1.3} />
                    ) : (
                      <BookOpen size={25} strokeWidth={1.3} />
                    )}
                  </div>
                  <span className="education-period">{item.period}</span>
                  <h3>{item.title}</h3>
                  <span className="education-institution">{item.institution}</span>
                  <p>{item.description}</p>
                  {item.source && (
                    <a
                      href={item.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="education-source"
                      aria-label={`Consultar fonte da formação: ${item.title}`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </article>
              ))}
            </div>
            <div className="career-heading" data-reveal>
              <span className="eyebrow">DA SALA DE AULA À ESCUTA.</span>
              <h3>
                A experiência de quem
                <br />
                também esteve <em>ensinando.</em>
              </h3>
            </div>
            <div className="career-list" data-stagger>
              {thiagoProfile.experience.map((item, index) => (
                <article key={item.role} data-reveal>
                  <div className="career-date">
                    <span>0{index + 1}</span>
                    <strong>{item.period}</strong>
                    {item.duration && <small>{item.duration} de experiência</small>}
                  </div>
                  <div className="career-body">
                    <h4>{item.role}</h4>
                    <span>{item.institution}</span>
                    <p>{item.description}</p>
                  </div>
                  <span className="career-marker">
                    <ArrowUpRight size={23} />
                  </span>
                </article>
              ))}
            </div>
            <article className="research-feature" data-reveal>
              <div className="research-symbol">
                <span>USP</span>
                <span>2022</span>
                <GraduationCap size={34} strokeWidth={1.3} />
              </div>
              <div className="research-copy">
                <span className="eyebrow">PESQUISA · MESTRADO EM ESTUDOS CULTURAIS</span>
                <h3>{thiagoProfile.researchTitle}</h3>
                <p>
                  Uma investigação sobre identidade, corpo e masculinidades nas narrativas de homens
                  gays.
                </p>
                <a
                  className="text-link"
                  href={thiagoProfile.research}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Conheça a pesquisa na USP <ArrowUpRight size={19} />
                </a>
              </div>
              <div className="research-tags">
                <span>Corpo</span>
                <span>Gênero</span>
                <span>Masculinidades</span>
                <span>Vivências gays</span>
              </div>
            </article>
          </div>
        </section>

        <section
          className="words-section container section-space"
          id="palavras"
          aria-labelledby="words-title"
        >
          <div className="section-label" data-reveal>
            <span>04 — PARA CONTINUAR PENSANDO</span>
            <span>IDEIAS QUE PEDEM MAIS ESPAÇO.</span>
          </div>
          <div className="section-heading" data-reveal>
            <h2 id="words-title">
              Entre palavras,
              <br />a vida <em>acontece.</em>
            </h2>
            <a
              className="text-link"
              href={thiagoProfile.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={18} /> Acompanhe as reflexões <ArrowUpRight size={19} />
            </a>
          </div>
          <div className="reflections-grid" data-stagger>
            {reflections.map((post, index) => (
              <a
                className="reflection-card"
                href={post.href}
                key={post.href}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal
              >
                <div className="reflection-image">
                  <img src={post.image} width="640" height="640" loading="lazy" alt={post.alt} />
                  <span>0{index + 1}</span>
                  <span className="reflection-arrow">
                    <ArrowUpRight size={25} />
                  </span>
                </div>
                <span className="eyebrow">{post.tag}</span>
                <h3>{post.title}</h3>
                <span className="reflection-link">
                  Ver publicação original <ArrowUpRight size={16} />
                </span>
              </a>
            ))}
          </div>
          <div className="writer-note" data-reveal>
            <BookOpen size={25} strokeWidth={1.4} />
            <p>
              As palavras também fazem parte da minha história como escritor.
              <br />
              <span>Conheça outros textos, ideias e conversas no Palavriado.</span>
            </p>
            <a
              className="text-link"
              href={thiagoProfile.blog}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visite o blog <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        <section
          className="first-step-section dark-section"
          id="atendimento"
          aria-labelledby="first-step-title"
        >
          <div className="container section-space">
            <div className="section-label" data-reveal>
              <span>05 — DO SEU LUGAR. NO SEU TEMPO.</span>
              <span>ATENDIMENTO ONLINE.</span>
            </div>
            <div className="first-step-heading" data-reveal>
              <h2 id="first-step-title">
                O primeiro passo
                <br />
                pode ser <em>uma conversa.</em>
              </h2>
              <PrideFlag />
            </div>
            <div className="steps-grid" data-stagger>
              {[
                {
                  title: "Um olá.",
                  description:
                    "Envie uma mensagem no Instagram profissional e solicite a triagem gratuita.",
                },
                {
                  title: "Um encontro.",
                  description:
                    "Conte o que está buscando, faça suas perguntas e conheça a proposta de atendimento.",
                },
                {
                  title: "Um caminho.",
                  description:
                    "Conversem sobre a continuidade, os horários e os detalhes dos encontros online.",
                },
              ].map((step, index) => (
                <article key={step.title} data-reveal>
                  <div>
                    <span>0{index + 1}</span>
                    {index < 2 ? <ArrowRight size={24} /> : <Check size={22} />}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
            <div className="first-step-bottom" data-reveal>
              <span>
                <Globe2 size={18} /> Para adolescentes e adultos, de onde você estiver.
              </span>
              <button className="button" onClick={openContact}>
                Quero dar o primeiro passo <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        </section>

        <section className="faq-section container section-space" aria-labelledby="faq-title">
          <div className="faq-intro" data-reveal>
            <span className="eyebrow">TODA PERGUNTA TEM SEU LUGAR.</span>
            <h2 id="faq-title">
              Antes do
              <br />
              <em>primeiro olá.</em>
            </h2>
            <p>
              Algumas dúvidas cabem aqui.
              <br />
              As outras, a gente conversa.
            </p>
            <Star />
          </div>
          <div className="faq-list" data-reveal>
            {questions.map((item) => (
              <details key={item.question}>
                <summary>
                  {item.question}
                  <Plus size={20} />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="closing-section" aria-labelledby="closing-title">
          <div className="container closing-grid">
            <div className="closing-copy" data-reveal>
              <span className="eyebrow">A SUA HISTÓRIA CONTINUA.</span>
              <h2 id="closing-title">
                Vamos escrever
                <br />o próximo
                <br />
                <em>começo?</em>
              </h2>
              <p>
                Você pode chegar com perguntas.
                <br />A gente começa pelo encontro.
              </p>
              <button className="button button-dark" onClick={openContact}>
                Agendar triagem gratuita <ArrowUpRight size={22} />
              </button>
            </div>
            <div className="closing-photo" data-reveal>
              <Portrait index={3} />
              <div className="closing-photo-note">
                <span>Prazer, Thiago.</span>
                <PrideFlag />
              </div>
              <Star />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer dark-section">
        <div className="container">
          <div className="footer-top">
            <Brand footer />
            <div>
              <span>PSICOPEDAGOGO & PSICANALISTA</span>
              <span>Online · Adolescentes e adultos</span>
            </div>
            <a href={thiagoProfile.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram size={21} /> @thiagosaveda.psi <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="footer-large" aria-hidden="true">
            THIAGO SAVEDA<span>↗</span>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Thiago Saveda. Cada história importa.</span>
            <span>
              <PrideFlag /> Um espaço para ser, por inteiro.
            </span>
            <a href="#inicio" aria-label="Voltar ao início">
              <MoveUpRight size={21} />
            </a>
          </div>
        </div>
        <div className="rainbow-edge" aria-hidden="true" />
      </footer>

      <button
        className="floating-contact"
        onClick={openContact}
        aria-label="Conversar com Thiago sobre a triagem gratuita"
      >
        <MessageCircle size={21} />
        <span>Vamos conversar</span>
        <ArrowUpRight size={18} />
      </button>

      <dialog
        ref={dialogRef}
        className={`site-dialog ${dialog === "portrait" ? "portrait-dialog" : "contact-dialog"}`}
        aria-labelledby={dialog === "portrait" ? "portrait-dialog-title" : "contact-dialog-title"}
        onCancel={(event) => {
          event.preventDefault();
          setDialog(null);
        }}
        onClose={() => setDialog(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setDialog(null);
        }}
        onKeyDown={(event) => {
          if (dialog !== "portrait") return;
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            const direction = event.key === "ArrowRight" ? 1 : -1;
            setPortraitIndex((index) => (index + direction + portraits.length) % portraits.length);
          }
        }}
      >
        <button className="dialog-close" onClick={() => setDialog(null)} aria-label="Fechar janela">
          <X size={24} />
        </button>
        {dialog === "portrait" ? (
          <div className="portrait-dialog-content">
            <Portrait index={portraitIndex} eager />
            <div className="portrait-dialog-footer">
              <div>
                <h2 id="portrait-dialog-title">{portraits[portraitIndex]!.caption}</h2>
                <a
                  href={portraits[portraitIndex]!.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {portraits[portraitIndex]!.origin} <ArrowUpRight size={15} />
                </a>
              </div>
              <div className="gallery-controls">
                <button
                  aria-label="Retrato anterior"
                  onClick={() =>
                    setPortraitIndex((index) => (index - 1 + portraits.length) % portraits.length)
                  }
                >
                  <ArrowLeft size={20} />
                </button>
                <span>
                  {portraitIndex + 1} / {portraits.length}
                </span>
                <button
                  aria-label="Próximo retrato"
                  onClick={() => setPortraitIndex((index) => (index + 1) % portraits.length)}
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="contact-dialog-content">
            <PrideFlag />
            <span className="eyebrow">UMA CONVERSA. UM COMEÇO.</span>
            <h2 id="contact-dialog-title">
              Começa com
              <br />
              <em>um olá.</em>
            </h2>
            <p>
              Solicite sua triagem gratuita pelo Instagram profissional do Thiago. Vocês combinam o
              horário diretamente por mensagem.
            </p>
            <div className="message-preview">
              <span className="eyebrow">UMA SUGESTÃO PARA COMEÇAR</span>
              <p>{message}</p>
              <button className="text-link" onClick={copyMessage}>
                {copied ? <Check size={17} /> : <Copy size={17} />}
                {copied ? "Mensagem copiada" : "Copiar mensagem"}
              </button>
              <span role="status">
                {copyFailed
                  ? "Selecione a mensagem acima e copie para enviar no Instagram."
                  : copied
                    ? "Agora é só colar na conversa do Instagram."
                    : ""}
              </span>
            </div>
            <a
              className="button button-dark"
              href={thiagoProfile.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={19} /> Abrir Instagram do Thiago <ArrowUpRight size={19} />
            </a>
            <small>O horário é confirmado diretamente com Thiago.</small>
          </div>
        )}
      </dialog>
    </div>
  );
}
