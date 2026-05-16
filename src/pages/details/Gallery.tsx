import { DetailLayout } from "./DetailLayout"

const BASE = import.meta.env.BASE_URL

type Photo = { src: string; caption: string }

const photos: Photo[] = [
  { src: `${BASE}gallery/shanghai_1.jpeg`, caption: "Shanghai" },
  { src: `${BASE}gallery/shanghai_2.jpeg`, caption: "Shanghai" },
]

export const Gallery = () => {
  return (
    <DetailLayout
      title="Wedding Gallery"
      subtitle="PHOTOS"
      accent="var(--sky-deep)"
    >
      <section className="detail__hero">
        <div className="detail__hero-emoji">📷</div>
        <p className="detail__hero-text">우리의 순간들</p>
      </section>

      <div className="gallery-grid">
        {photos.map((p, i) => (
          <div key={i} className="gallery-grid__cell">
            <img src={p.src} alt={p.caption} />
          </div>
        ))}
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={`ph-${i}`} className="gallery-grid__cell">
            <span className="gallery-grid__placeholder">+</span>
          </div>
        ))}
      </div>

      <p className="detail__placeholder">
        🖼️ 사진은 계속 추가될 예정입니다.
      </p>
    </DetailLayout>
  )
}
