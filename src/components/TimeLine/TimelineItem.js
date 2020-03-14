import React from 'react'
import style from './timelineStyle.module.scss'

const TimelineItem = ({ data }) => (
    <div className={style.timeline_item}>
        <div className={style.timeline_item_content}>
            <span className={style.tag} style={{ background: data.node.frontmatter.color }}>
                {data.node.frontmatter.category}
            </span>
            <time>{data.node.frontmatter.date}</time>
            <p>{data.node.frontmatter.text}</p>
            {data.node.frontmatter.link && (
                <a
                    href={data.node.frontmatter.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.node.frontmatter.linkinfo}
                </a>
            )}
            <span className={style.circle} />
        </div>
    </div>
)

export default TimelineItem

