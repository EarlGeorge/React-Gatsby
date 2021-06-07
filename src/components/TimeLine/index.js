import React from 'react'
import style from './timelineStyle.module.scss'

/**
 * TimeLine Component
 **/

const Timeline = ({ data }) => {
  return (
    data.length > 0 && (
      <div className={style.timeline_container}>
        {data.map((data, id) => (
          <div className={style.timeline_item} key={id}>
            <div className={style.timeline_item_content}>
              <span
                className={style.tag}
                style={{ background: data.node.frontmatter.color }}
              >
                {data.node.frontmatter.category}
              </span>
              <time>{data.node.frontmatter.date}</time>
              <p>{data.node.frontmatter.text}</p>
              {data.node.frontmatter.link && (
                <a
                  href={data.node.frontmatter.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.node.frontmatter.linkinfo}
                </a>
              )}
              {data.node.frontmatter.secondLink && (
                <a
                  href={data.node.frontmatter.secondLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.node.frontmatter.secondLinkInfo}
                </a>
              )}
              <span className={style.box} />
            </div>
          </div>
        ))}
      </div>
    )
  )
}

export default Timeline
