import { PageLayout, SharedLayout } from "./cfg"
import { FullSlug, resolveRelative } from "../util/path"
import { QuartzPluginComponent } from "./types"
import { Title } from "./Title"
import { Content } from "./Content"
import { JSX } from "preact"
import { Body, Header, Links, Meta, Nav, Search, Sidebar, ThemeToggle } from "./shared"
import { ProcessedContent } from "../vfile"
import { FileNode } from "../tree"
import { FullContentLayout } from "./FullContentLayout"
import { Component as PropositionCard } from "./PropositionCard"
import { Component as QuestCard } from "./QuestCard"

interface LayoutProps {
  file: ProcessedContent
  fileTree: FileNode<QuartzPluginComponent["ComponentProps"]>
  allFiles: FullSlug[]
  cfg: PageLayout
  children: JSX.Element | JSX.Element[]
}

export const Layout: QuartzPluginComponent<LayoutProps> = ({
  file,
  fileTree,
  allFiles,
  cfg,
  children,
}) => {
  const { data, content } = file
  const { frontmatter, title, tags } = data

  // 명제나 Quest 페이지인 경우 특별한 레이아웃 적용
  if (frontmatter?.type === "proposition" || frontmatter?.type === "quest") {
    return (
      <FullContentLayout file={file} allFiles={allFiles} cfg={cfg}>
        <div className="prose-content">
          {frontmatter?.type === "proposition" && (
            <PropositionCard
              title={title}
              type={frontmatter.category}
              content={content}
              tags={tags}
              createdAt={frontmatter.created}
            />
          )}
          {frontmatter?.type === "quest" && (
            <QuestCard
              title={title}
              status={frontmatter.status}
              propositions={frontmatter.propositions}
              difference={frontmatter.difference}
              careerImpact={frontmatter.career_impact}
              content={content}
            />
          )}
        </div>
      </FullContentLayout>
    )
  }

  // 기본 레이아웃
  return (
    <article class={`popover ${cfg.layout === "page" ? "full" : ""}`}>
      <header>
        <div class="title">
          <Title title={title} />
        </div>
        <div class="meta">
          <Meta tags={tags} />
        </div>
      </header>
      <div class="content">
        <Content file={file} />
      </div>
    </article>
  )
} 