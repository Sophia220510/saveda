import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Copy, Instagram, Menu, X } from "lucide-react";

const instagram = "https://www.instagram.com/thiagosaveda.psi/";
const themes = [
  {
    label: "Identidade & pertencimento",
    number: "01",
    title: "Quem você é, além do que esperam de você?",
    text: "As expectativas dos outros podem ocupar muito espaço. Conversar sobre identidade é abrir lugar para a sua própria história, seus desejos e suas formas de estar no mundo.",
    tags: ["Vivências gays", "Masculinidades", "Pertencimento"],
    word: "ser.",
  },
  {
    label: "Linguagem & subjetividade",
    number: "02",
    title: "Às vezes, encontrar palavras já é um começo.",
    text: "O que dizemos, o que silenciamos e as histórias que contamos sobre nós. A linguagem pode ser um caminho para olhar para as experiências e construir outros sentidos.",
    tags: ["Expressão", "Narrativas pessoais", "Escuta"],
    word: "dizer.",
  },
  {
    label: "Aprendizagem & descobertas",
    number: "03",
    title: "Aprender também passa por se descobrir.",
    text: "Cada pessoa tem uma relação singular com o aprender. Um olhar psicopedagógico considera os caminhos, os desafios e os sentidos que fazem parte dessa experiência.",
    tags: ["Psicopedagogia", "Adolescências", "Aprendizagem"],
    word: "criar.",
  },
];
const posts = [
  {
    image: "/images/thiago/pequeno-principe.jpg",
    alt: "Ilustração do Pequeno Príncipe e da raposa publicada por Thiago Saveda",
    category: "LITERATURA & VÍNCULOS",
    title: "Histórias que abrem espaço para sentir.",
    href: "https://www.instagram.com/thiagosaveda.psi/p/DdCjRsiJ_Kc/",
  },
  {
    image: "/images/thiago/professor-sim.jpg",
    alt: "Publicação de Thiago sobre o livro Professora sim, tia não, de Paulo Freire",
    category: "EDUCAÇÃO & IDENTIDADE",
    title: "Quem é o professor que estamos nos tornando?",
    href: "https://www.instagram.com/thiagosaveda.psi/p/DdjLHX7TSmL/",
  },
  {
    image: "/images/thiago/marcelo-marmelo.jpg",
    alt: "Livro Marcelo, marmelo, martelo, de Ruth Rocha, em publicação de Thiago Saveda",
    category: "LINGUAGEM & DESCOBERTAS",
    title: "As palavras e os mundos que elas criam.",
    href: "https://www.instagram.com/thiagosaveda.psi/p/Dcq8yY5TEQO/",
  },
];
const questions = [
  {
    question: "Preciso saber exatamente o que quero falar?",
    answer:
      "Você pode começar com uma dúvida, uma inquietação ou a vontade de conversar. A triagem gratuita é um primeiro contato para apresentar o que você procura e perguntar sobre o atendimento.",
  },
  {
    question: "O atendimento é online?",
    answer:
      "Sim. O atendimento divulgado por Thiago é online, para adolescentes e adultos. Os detalhes sobre plataforma, horários e organização dos encontros podem ser combinados diretamente na triagem.",
  },
  {
    question: "Como solicito a triagem gratuita?",
    answer:
      "Use o botão de triagem para acessar o Instagram profissional @thiagosaveda.psi. Envie uma mensagem solicitando o primeiro contato e combine um horário diretamente com Thiago.",
  },
  {
    question: "Como saber qual atendimento faz sentido para mim?",
    answer:
      "Thiago se apresenta como psicopedagogo e psicanalista. Na conversa inicial, você pode explicar o que está buscando e conhecer a proposta de atendimento antes de decidir como seguir.",
  },
];
function Asterisk({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <path d="M40 4v72M4 40h72M14.5 14.5l51 51m0-51-51 51" stroke="currentColor" strokeWidth="9" />
    </svg>
  );
}

export function ThiagoSavedaPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(0);
  const [contactOpen, setContactOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const theme = themes[activeTheme]!;
  const message =
    "Olá, Thiago! Conheci seu site e gostaria de agendar uma triagem gratuita. Como podemos combinar?";

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;
    if (contactOpen && !dialog.open) dialog.showModal();
    if (!contactOpen && dialog.open) dialog.close();
    if (contactOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
    return undefined;
  }, [contactOpen]);
  useEffect(() => {
    if (!pageRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    pageRef.current.querySelectorAll("[data-reveal]").forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight)
        element.classList.add("reveal-ready");
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  function openContact() {
    setMenuOpen(false);
    setCopied(false);
    setCopyFailed(false);
    setContactOpen(true);
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
  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % themes.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp")
      next = (index + themes.length - 1) % themes.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = themes.length - 1;
    else return;
    event.preventDefault();
    setActiveTheme(next);
    document.getElementById(`theme-tab-${next}`)?.focus();
  }

  return (
    <div className="saveda-site" ref={pageRef} id="inicio">
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#inicio" aria-label="Thiago Saveda — início">
            <span className="wordmark-symbol">
              ts<span>↗</span>
            </span>
            <span className="wordmark-name">
              thiago
              <br />
              saveda
            </span>
          </a>
          <nav
            className={`main-nav ${menuOpen ? "is-open" : ""}`}
            id="main-nav"
            aria-label="Navegação principal"
          >
            <a href="#sobre" onClick={() => setMenuOpen(false)}>
              Quem escuta
            </a>
            <a href="#escuta" onClick={() => setMenuOpen(false)}>
              Espaços de escuta
            </a>
            <a href="#palavras" onClick={() => setMenuOpen(false)}>
              Entre palavras
            </a>
            <button className="button button-small mobile-nav-cta" onClick={openContact}>
              Vamos conversar <ArrowUpRight size={16} />
            </button>
          </nav>
          <button className="button button-small header-cta" onClick={openContact}>
            Vamos conversar <ArrowUpRight size={16} />
          </button>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="conteudo">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-eyebrow">
            <span className="status-dot" /> PSICANÁLISE & PSICOPEDAGOGIA{" "}
            <span className="eyebrow-divider">/</span> ONLINE
          </div>
          <div className="hero-layout">
            <div className="hero-copy">
              <h1 id="hero-title">
                Sua história
                <br />
                merece{" "}
                <span className="listening-word">
                  escuta.
                  <svg viewBox="0 0 480 32" fill="none" aria-hidden="true">
                    <path
                      d="M5 21C112 1 295 2 471 13M30 29C154 15 298 13 422 22"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
              <p>
                Um espaço para colocar em palavras o que você sente.
                <br className="desktop-break" /> E descobrir outras formas de ser você.
              </p>
              <div className="hero-actions">
                <button className="button" onClick={openContact}>
                  Agendar triagem gratuita <ArrowUpRight size={19} />
                </button>
                <span className="hero-note">
                  O primeiro passo pode
                  <br />
                  ser uma conversa.
                </span>
              </div>
            </div>
            <div className="hero-art" aria-label="Apresentação de Thiago Saveda">
              <div className="art-orbit orbit-one" />
              <div className="art-orbit orbit-two" />
              <Asterisk className="hero-star" />
              <span className="art-label">CADA HISTÓRIA, UM UNIVERSO.</span>
              <figure className="portrait-card">
                <img
                  src="/images/thiago/retrato-instagram.jpg"
                  width="150"
                  height="150"
                  fetchPriority="high"
                  alt="Thiago Saveda, sorrindo, de blazer claro e camiseta preta"
                />
                <figcaption>
                  <span>Prazer, Thiago.</span>
                  <ArrowUpRight size={23} />
                </figcaption>
              </figure>
              <span className="handwritten hero-handwritten">
                A gente começa
                <br />
                pelo encontro.
              </span>
              <svg className="hand-arrow" viewBox="0 0 120 70" fill="none" aria-hidden="true">
                <path
                  d="M108 7C106 44 66 65 16 51m15-15L13 51l21 10"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="hero-bottom">
            <span>ADOLESCENTES & ADULTOS</span>
            <span>LINGUAGEM. IDENTIDADE. POSSIBILIDADES.</span>
            <a href="#sobre" aria-label="Conhecer Thiago">
              Um pouco mais de perto <ArrowDown size={16} />
            </a>
          </div>
        </section>
        <div className="manifesto-strip" aria-hidden="true">
          <div>
            <span>menos rótulos</span>
            <Asterisk />
            <span>mais possibilidades</span>
            <Asterisk />
            <span>o seu tempo</span>
            <Asterisk />
            <span>a sua história</span>
            <Asterisk />
          </div>
        </div>

        <section
          className="about-section container section-space"
          id="sobre"
          aria-labelledby="about-title"
        >
          <div className="section-kicker" data-reveal>
            <span>01 / QUEM ESCUTA</span>
            <span>UM ENCONTRO ENTRE HISTÓRIAS</span>
          </div>
          <div className="about-grid" data-reveal>
            <div className="about-art">
              <span className="about-big-name">
                Thiago
                <br />
                <em>Saveda.</em>
              </span>
              <div className="about-photo">
                <img
                  src="/images/thiago/retrato-instagram.jpg"
                  width="150"
                  height="150"
                  loading="lazy"
                  alt="Retrato de Thiago Saveda em seu Instagram profissional"
                />
                <span>
                  Psicopedagogo
                  <br />& Psicanalista
                </span>
              </div>
              <div className="about-art-footer">
                <span>PALAVRAS QUE APROXIMAM.</span>
                <Asterisk />
              </div>
            </div>
            <div className="about-copy">
              <h2 id="about-title">
                Antes de qualquer
                <br />
                rótulo, <em>uma pessoa.</em>
              </h2>
              <p className="lead">
                Somos feitos de histórias. Algumas conseguimos contar. Outras ainda estão procurando
                palavras.
              </p>
              <p>
                Sou Thiago Saveda, psicopedagogo e psicanalista. Linguagem, masculinidades e
                vivências gays são temas que atravessam meu trabalho e as conversas que proponho.
              </p>
              <p>
                Este espaço é um convite para olhar para a sua história com tempo e atenção —
                incluindo as perguntas, os afetos e as possibilidades que fazem parte dela.
              </p>
              <div className="about-signature">
                <span className="handwritten">Thiago Saveda</span>
                <a
                  className="text-link"
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Conhecer o Instagram profissional de Thiago"
                >
                  Me encontre no Instagram <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="listening-section" id="escuta" aria-labelledby="listening-title">
          <div className="container section-space">
            <div className="section-kicker" data-reveal>
              <span>02 / ESPAÇOS DE ESCUTA</span>
              <span>O QUE PODE VIRAR CONVERSA?</span>
            </div>
            <div className="section-heading" data-reveal>
              <h2 id="listening-title">
                Há muitas formas
                <br />
                de <em>se encontrar.</em>
              </h2>
              <p>
                Não é preciso caber em uma definição.
                <br />
                Você pode começar por aquilo que te atravessa.
              </p>
            </div>
            <div className="theme-tabs" role="tablist" aria-label="Temas de escuta" data-reveal>
              {themes.map((item, index) => (
                <button
                  key={item.number}
                  role="tab"
                  id={`theme-tab-${index}`}
                  aria-selected={activeTheme === index}
                  aria-controls="theme-panel"
                  tabIndex={activeTheme === index ? 0 : -1}
                  className={activeTheme === index ? "active" : ""}
                  onClick={() => setActiveTheme(index)}
                  onKeyDown={(event) => onTabKeyDown(event, index)}
                >
                  <span>{item.number}</span>
                  {item.label}
                  <ArrowUpRight size={18} />
                </button>
              ))}
            </div>
            <div
              className="theme-panel"
              role="tabpanel"
              id="theme-panel"
              aria-labelledby={`theme-tab-${activeTheme}`}
              tabIndex={0}
              data-reveal
            >
              <div className={`theme-visual theme-visual-${activeTheme}`} aria-hidden="true">
                <div className="theme-circle circle-a" />
                <div className="theme-circle circle-b" />
                <span className="theme-word" key={theme.word}>
                  {theme.word}
                </span>
                <span className="theme-visual-caption">UM ESPAÇO PARA AS SUAS POSSIBILIDADES</span>
                <Asterisk />
              </div>
              <div className="theme-content" key={theme.number}>
                <span className="mini-label">CADA EXPERIÊNCIA É SINGULAR.</span>
                <h3>{theme.title}</h3>
                <p>{theme.text}</p>
                <div className="theme-tags">
                  {theme.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <button className="text-link" onClick={openContact}>
                  Vamos falar sobre isso <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
            <p className="listening-footnote">
              Estes são pontos de partida. A sua história não precisa se limitar a eles.
            </p>
          </div>
        </section>

        <section className="journey-section" id="atendimento" aria-labelledby="journey-title">
          <div className="container section-space">
            <div className="section-kicker" data-reveal>
              <span>03 / O PRIMEIRO PASSO</span>
              <span>DO SEU LUGAR, NO SEU TEMPO</span>
            </div>
            <div className="journey-heading" data-reveal>
              <h2 id="journey-title">
                Não precisa ter
                <br />
                todas as <em>respostas.</em>
              </h2>
              <div>
                <Asterisk />
                <p>
                  A conversa pode
                  <br />
                  começar com uma pergunta.
                </p>
              </div>
            </div>
            <div className="journey-steps" data-reveal>
              <article>
                <span className="step-number">
                  01 <ArrowRight size={21} />
                </span>
                <h3>Um primeiro contato.</h3>
                <p>Envie uma mensagem pelo Instagram e solicite sua triagem gratuita.</p>
              </article>
              <article>
                <span className="step-number">
                  02 <ArrowRight size={21} />
                </span>
                <h3>Uma conversa inicial.</h3>
                <p>Conte o que está buscando e conheça a proposta de atendimento.</p>
              </article>
              <article>
                <span className="step-number">
                  03 <span className="step-dot" />
                </span>
                <h3>Um caminho possível.</h3>
                <p>Conversem sobre os próximos passos e os detalhes dos encontros online.</p>
              </article>
            </div>
            <div className="journey-bottom" data-reveal>
              <span>
                <span className="status-dot" /> Atendimento online para adolescentes e adultos
              </span>
              <button className="button button-yellow" onClick={openContact}>
                Quero dar o primeiro passo <ArrowUpRight size={19} />
              </button>
            </div>
          </div>
        </section>

        <section
          className="words-section container section-space"
          id="palavras"
          aria-labelledby="words-title"
        >
          <div className="section-kicker" data-reveal>
            <span>04 / ENTRE PALAVRAS</span>
            <span>PARA LEVAR A CONVERSA ADIANTE</span>
          </div>
          <div className="section-heading" data-reveal>
            <h2 id="words-title">
              Algumas ideias
              <br />
              pedem <em>mais espaço.</em>
            </h2>
            <a className="text-link" href={instagram} target="_blank" rel="noopener noreferrer">
              Acompanhe no Instagram <ArrowUpRight size={19} />
            </a>
          </div>
          <div className="posts-grid" data-reveal>
            {posts.map((post) => (
              <a
                className="post-card"
                key={post.href}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="post-image">
                  <img src={post.image} width="640" height="640" loading="lazy" alt={post.alt} />
                  <span className="post-open">
                    <ArrowUpRight size={23} />
                  </span>
                </div>
                <span className="mini-label">{post.category}</span>
                <h3>{post.title}</h3>
                <span className="post-read">
                  Ver publicação original <ArrowUpRight size={15} />
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="faq-section container section-space" aria-labelledby="faq-title">
          <div className="faq-intro" data-reveal>
            <span className="mini-label">ANTES DE COMEÇAR</span>
            <h2 id="faq-title">
              Pode
              <br />
              <em>perguntar.</em>
            </h2>
            <p>
              Algumas dúvidas cabem aqui.
              <br />
              As outras, a gente conversa.
            </p>
            <svg className="faq-doodle" viewBox="0 0 130 85" fill="none" aria-hidden="true">
              <path
                d="M8 16c36-12 77-5 70 25-5 24-28 12-15-6 17-20 32 10 40 25m-18-3 19 8 12-16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="faq-list" data-reveal>
            {questions.map((item) => (
              <details key={item.question}>
                <summary>
                  {item.question}
                  <span className="faq-plus" aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contato" aria-labelledby="contact-title">
          <div className="container contact-inner" data-reveal>
            <div>
              <span className="mini-label">UMA CONVERSA. UM COMEÇO.</span>
              <h2 id="contact-title">
                Vamos abrir espaço
                <br />
                para <em>a sua história?</em>
              </h2>
              <p>Você não precisa encontrar as palavras sozinho.</p>
            </div>
            <button className="contact-circle" onClick={openContact}>
              <ArrowUpRight size={46} strokeWidth={1.2} />
              <span>
                Agendar triagem
                <br />
                <strong>gratuita</strong>
              </span>
            </button>
            <Asterisk className="contact-star" />
          </div>
        </section>
      </main>
      <footer className="site-footer container">
        <div className="footer-top">
          <a className="wordmark" href="#inicio" aria-label="Thiago Saveda — voltar ao início">
            <span className="wordmark-symbol">
              ts<span>↗</span>
            </span>
            <span className="wordmark-name">
              thiago
              <br />
              saveda
            </span>
          </a>
          <span>
            Psicopedagogo & Psicanalista
            <br />
            <span className="footer-muted">Online · Adolescentes e adultos</span>
          </span>
          <a
            className="footer-instagram"
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={18} /> @thiagosaveda.psi <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Thiago Saveda. Cada história importa.</span>
          <span>Feito para encontros.</span>
          <a href="#inicio" aria-label="Voltar ao início">
            <ArrowUpRight size={17} />
          </a>
        </div>
      </footer>

      <dialog
        ref={dialogRef}
        className="contact-dialog"
        aria-labelledby="dialog-title"
        onCancel={(event) => {
          event.preventDefault();
          setContactOpen(false);
        }}
        onClose={() => setContactOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setContactOpen(false);
        }}
      >
        <div className="dialog-content">
          <button
            className="dialog-close"
            onClick={() => setContactOpen(false)}
            aria-label="Fechar conversa"
          >
            <X size={23} />
          </button>
          <Asterisk className="dialog-star" />
          <span className="mini-label">O PRIMEIRO PASSO</span>
          <h2 id="dialog-title">
            Começa com
            <br />
            <em>um olá.</em>
          </h2>
          <p>
            Solicite sua triagem gratuita pelo Instagram profissional do Thiago. Vocês combinam o
            horário diretamente por mensagem.
          </p>
          <div className="message-preview">
            <span className="mini-label">UMA SUGESTÃO PARA COMEÇAR</span>
            <p>{message}</p>
            <button className="text-link" onClick={copyMessage}>
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Mensagem copiada" : "Copiar mensagem"}
            </button>
            <span className="copy-feedback" role="status">
              {copyFailed
                ? "Selecione o texto acima e copie para enviar no Instagram."
                : copied
                  ? "Agora é só colar na conversa do Instagram."
                  : ""}
            </span>
          </div>
          <a className="button" href={instagram} target="_blank" rel="noopener noreferrer">
            <Instagram size={18} /> Abrir Instagram do Thiago <ArrowUpRight size={18} />
          </a>
          <small>
            A solicitação será feita no Instagram. O horário é confirmado diretamente com Thiago.
          </small>
        </div>
      </dialog>
    </div>
  );
}
