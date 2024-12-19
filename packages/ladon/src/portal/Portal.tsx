import React, { useRef } from 'react'
import { useUnMount} from '@lec/hooks'
import { createPortal } from 'react-dom'

export default function Portal({children}) {
  let containerRef = useRef<HTMLDivElement | null>(null)

  if (!containerRef.current) {
    containerRef.current = document.createElement('div')
    containerRef.current.setAttribute('id', 'portal-container')
    document.body.appendChild(containerRef.current)
  }

  useUnMount(() => {
    if(containerRef.current) {
      document.body.removeChild(containerRef.current)
      containerRef.current = null
    }
  })

  return createPortal(children, containerRef.current)
}
