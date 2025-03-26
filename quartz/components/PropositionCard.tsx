import { QuartzComponent, QuartzComponentProps } from "./types"
import { Component as TagList } from "./TagList"
import { Component as Content } from "./Content"

interface PropositionCardProps extends QuartzComponentProps {
  title: string
  type: string
  content: string
  tags: string[]
  createdAt: string
}

export const PropositionCard: QuartzComponent<PropositionCardProps> = ({
  title,
  type,
  content,
  tags,
  createdAt,
  ...props
}) => {
  return (
    <div className="proposition-card">
      <header>
        <h1>{title}</h1>
        <div className="meta">
          <span className="type">{type}</span>
          <span className="date">{createdAt}</span>
        </div>
      </header>
      <div className="content">
        <Content value={content} />
      </div>
      <footer>
        <TagList tags={tags} />
      </footer>
    </div>
  )
} 