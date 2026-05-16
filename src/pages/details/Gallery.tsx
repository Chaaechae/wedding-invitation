import { DetailLayout } from "./DetailLayout"

export const Gallery = () => {
  return (
    <DetailLayout title="Wedding Gallery" subtitle="PHOTOS" accent="#a378c9">
      <section className="detail__hero">
        <div className="detail__hero-emoji">📷</div>
        <p className="detail__hero-text">우리의 순간들</p>
      </section>

      <div className="gallery-grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="gallery-grid__cell">
            <span className="gallery-grid__placeholder">사진 {i + 1}</span>
          </div>
        ))}
      </div>

      <p className="detail__placeholder">
        🖼️ 실제 사진은 추후 업로드 예정입니다.
      </p>
    </DetailLayout>
  )
}
