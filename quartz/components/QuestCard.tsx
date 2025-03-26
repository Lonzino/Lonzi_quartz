import { QuartzComponent, QuartzComponentProps } from "./types"
import { Component as TagList } from "./TagList"
import { Component as Content } from "./Content"

interface QuestCardProps extends QuartzComponentProps {
  title: string
  status: string
  propositions: string[]
  difference: string
  careerImpact: string
  content: string
}

export const QuestCard: QuartzComponent<QuestCardProps> = ({
  title,
  status,
  propositions,
  difference,
  careerImpact,
  content,
  ...props
}) => {
  return (
    <div className={`quest-card ${status}`}>
      <header>
        <h1>{title}</h1>
        <div className="meta">
          <span className="status">{status}</span>
          <span className="difference">차이: {difference}</span>
          <span className="career-impact">영향: {careerImpact}</span>
        </div>
      </header>
      <div className="propositions">
        <h2>관련 명제</h2>
        <ul>
          {propositions.map((prop) => (
            <li>
              <a href={prop}>{prop}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <Content value={content} />
      </div>
      <footer>
        <div className="progress">
          <div className="progress-bar" style={{ width: "0%" }} />
        </div>
      </footer>
    </div>
  )
} 