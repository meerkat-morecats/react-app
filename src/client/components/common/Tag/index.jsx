import React from 'react'
import './style.scss'

function Tag({ children }) {
  return <div className="tag-wrapper">
    <span className="tag-wrapper__symbol">[</span>
    <span className="tag-wrapper__content">{children}</span>
    <span className="tag-wrapper__symbol">]</span>
  </div>
}

export { Tag }