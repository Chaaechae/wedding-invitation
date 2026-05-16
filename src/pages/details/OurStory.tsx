import { useState } from "react"
import { BRIDE_FIRSTNAME, GROOM_FIRSTNAME } from "../../const"
import { DetailLayout } from "./DetailLayout"

const timeline = [
  { date: "2021. 06. 16", label: "시작" },
  { date: "2025. 06. 09", label: "프로포즈" },
  { date: "2026. 09. 12", label: "결혼" },
]

type City = { id: string; name: string; emoji: string }

const pastTrips: City[] = [
  { id: "tokyo", name: "도쿄", emoji: "🗼" },
  { id: "shanghai", name: "상하이", emoji: "🏙️" },
  { id: "newyork", name: "뉴욕", emoji: "🗽" },
]

const futureTrips = ["칠레 🇨🇱", "덴마크 🇩🇰", "터키 🇹🇷", "그리고 전세계 어디든"]

export const OurStory = () => {
  const [openCity, setOpenCity] = useState<string | null>(null)

  return (
    <DetailLayout title="Our Story" subtitle="우리 이야기" accent="#a378c9">
      <section className="detail__hero">
        <div className="detail__hero-emoji">💗</div>
        <p className="detail__hero-text">
          {GROOM_FIRSTNAME} &amp; {BRIDE_FIRSTNAME}
        </p>
      </section>

      <p className="detail__section-label">Timeline</p>
      <div className="timeline">
        {timeline.map((item, i) => (
          <div className="timeline__item" key={item.date}>
            <div className="timeline__dot" data-last={i === timeline.length - 1}>
              <span>{i + 1}</span>
            </div>
            <div className="timeline__content">
              <p className="timeline__date">{item.date}</p>
              <p className="timeline__label">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      <a href="#/about" className="link-card">
        <div className="link-card__icon">🎤</div>
        <div className="link-card__body">
          <p className="link-card__title">
            {GROOM_FIRSTNAME}과 {BRIDE_FIRSTNAME}에 대해 더 알아보기
          </p>
          <p className="link-card__subtitle">서로가 서로를 인터뷰합니다</p>
        </div>
        <span className="link-card__chevron">→</span>
      </a>

      <p className="detail__section-label">우리가 함께 좋아하는 것</p>
      <div className="travel-card">
        <p className="travel-card__headline">단연코, 여행 ✈️</p>
        <p className="travel-card__desc">
          저희는 함께 도쿄, 상하이, 뉴욕을 여행했어요.
          <br />
          도시를 눌러보세요.
        </p>

        <div className="travel-chips">
          {pastTrips.map((city) => (
            <button
              key={city.id}
              className={`travel-chip${openCity === city.id ? " travel-chip--active" : ""}`}
              onClick={() =>
                setOpenCity(openCity === city.id ? null : city.id)
              }
            >
              <span className="travel-chip__emoji">{city.emoji}</span>
              <span>{city.name}</span>
            </button>
          ))}
        </div>

        {openCity && (
          <div className="travel-photos">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="travel-photos__cell">
                <span>{pastTrips.find((c) => c.id === openCity)?.emoji}</span>
              </div>
            ))}
            <p className="travel-photos__note">
              사진은 곧 업로드 됩니다 📷
            </p>
          </div>
        )}
      </div>

      <div className="travel-card travel-card--accent">
        <p className="travel-card__headline">신혼여행 🇮🇹</p>
        <p className="travel-card__desc">이탈리아로 떠납니다.</p>
      </div>

      <div className="travel-card">
        <p className="travel-card__headline">앞으로 함께 가고 싶은 곳</p>
        <div className="travel-list">
          {futureTrips.map((t) => (
            <span key={t} className="travel-list__item">
              {t}
            </span>
          ))}
        </div>
      </div>
    </DetailLayout>
  )
}
