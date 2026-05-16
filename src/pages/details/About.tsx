import {
  BRIDE_FIRSTNAME,
  GROOM_FIRSTNAME,
} from "../../const"
import { DetailLayout } from "./DetailLayout"

type QA = { q: string; a: string }

const groomQA: QA[] = [
  { q: "좋아하는 것", a: "사진 · 힙합 음악 · 채원" },
  { q: "잘하는 것", a: "애교" },
  {
    q: "왜 결혼을 결심했는지",
    a: "제가 가장 저다울 수 있는 안정감을 주고 저밖에 모르는 남자입니다. 그리고 제가 저점매수했습니다.",
  },
]

const brideQA: QA[] = [
  { q: "좋아하는 것", a: "요리 · 운동" },
  { q: "잘하는 것", a: "걷기" },
  { q: "왜 결혼을 결심했는지", a: "(곧 업데이트 됩니다)" },
]

const Column = ({
  who,
  interviewer,
  qa,
  tone,
}: {
  who: string
  interviewer: string
  qa: QA[]
  tone: "groom" | "bride"
}) => (
  <div className={`interview__col interview__col--${tone}`}>
    <div className="interview__mic">🎤</div>
    <p className="interview__by">{interviewer}가 들려주는</p>
    <h2 className="interview__name">{who}</h2>
    <div className="interview__qa-list">
      {qa.map((item) => (
        <div className="interview__qa" key={item.q}>
          <p className="interview__q">Q. {item.q}</p>
          <p className="interview__a">{item.a}</p>
        </div>
      ))}
    </div>
  </div>
)

export const About = () => {
  return (
    <DetailLayout
      title={`${GROOM_FIRSTNAME} & ${BRIDE_FIRSTNAME}`}
      subtitle="더 알아보기 · 서로의 인터뷰"
      accent="#a378c9"
    >
      <p className="interview__intro">
        🎙️ 서로가 서로를 가장 잘 압니다.
        <br />두 사람이 들려주는 우리 이야기.
      </p>

      <div className="interview">
        <Column
          who={GROOM_FIRSTNAME}
          interviewer={BRIDE_FIRSTNAME}
          qa={groomQA}
          tone="groom"
        />
        <Column
          who={BRIDE_FIRSTNAME}
          interviewer={GROOM_FIRSTNAME}
          qa={brideQA}
          tone="bride"
        />
      </div>
    </DetailLayout>
  )
}
