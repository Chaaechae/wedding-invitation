import { useEffect, useRef, useState } from "react"
import {
  BRIDE_FIRSTNAME,
  GROOM_FIRSTNAME,
  WEDDING_DATE,
} from "../const"

type Card = {
  title: string
  subtitle?: string
  emoji: string
  bg: string
  href: string
}

const weddingInfoCards: Card[] = [
  {
    title: "예식장 정보",
    subtitle: "Venue & Time",
    emoji: "💒",
    bg: "linear-gradient(135deg, #ffd6e1 0%, #f4a5b8 100%)",
    href: "#/venue",
  },
  {
    title: "예식장 메뉴",
    subtitle: "Menu",
    emoji: "🍽️",
    bg: "linear-gradient(135deg, #fde2dc 0%, #ffb4a2 100%)",
    href: "#/menu",
  },
]

const peopleCards: Card[] = [
  {
    title: "Our Story",
    subtitle: "우리 이야기",
    emoji: "💗",
    bg: "linear-gradient(135deg, #e8d8f0 0%, #c5a8d8 100%)",
    href: "#/story",
  },
  {
    title: "Contact",
    subtitle: "연락처",
    emoji: "📞",
    bg: "linear-gradient(135deg, #ffeef3 0%, #ffc8d8 100%)",
    href: "#/contact",
  },
]

const useDotIndex = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.clientWidth)
      setActive(idx)
    }
    el.addEventListener("scroll", onScroll, { passive: true })
    return () => el.removeEventListener("scroll", onScroll)
  }, [])

  return { ref, active }
}

const Section = ({ title, cards }: { title: string; cards: Card[] }) => {
  const { ref, active } = useDotIndex()

  return (
    <section className="hub__section">
      <h2 className="hub__section-title">{title}</h2>
      <div className="hub__scroller" ref={ref}>
        {cards.map((card) => (
          <a
            key={card.href}
            href={card.href}
            className="hub__card"
            style={{ background: card.bg }}
          >
            <div className="hub__card-art">
              <span className="hub__card-emoji">{card.emoji}</span>
            </div>
            <div className="hub__card-body">
              <p className="hub__card-title">{card.title}</p>
              {card.subtitle && (
                <p className="hub__card-subtitle">{card.subtitle}</p>
              )}
            </div>
          </a>
        ))}
      </div>
      <div className="hub__dots">
        {cards.map((_, i) => (
          <span
            key={i}
            className={`hub__dot${i === active ? " hub__dot--active" : ""}`}
          />
        ))}
      </div>
    </section>
  )
}

export const Hub = () => {
  return (
    <div className="app-shell hub">
      <header className="hub__header">
        <button
          className="hub__back"
          onClick={() => {
            window.location.hash = "#/"
          }}
          aria-label="back"
        >
          ←
        </button>
        <div className="hub__title">
          <p className="hub__title-script script">
            {GROOM_FIRSTNAME} &amp; {BRIDE_FIRSTNAME}
          </p>
          <p className="hub__title-date">
            {WEDDING_DATE.format("YYYY. MM. DD")}
          </p>
        </div>
        <div className="hub__back hub__back--ghost" />
      </header>

      <Section title="Wedding Info" cards={weddingInfoCards} />
      <Section title="Bride & Groom" cards={peopleCards} />

      <footer className="hub__footer">
        <p>with love</p>
      </footer>
    </div>
  )
}
