import { useEffect, useState } from "react"

export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    let frame = 0

    function update() {
      const line = window.innerHeight * 0.4   // the "tripwire", 40% down the screen
      let current = ""

      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const { top, bottom } = el.getBoundingClientRect()
        if (top <= line && bottom > line) current = id
      }

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom) current = ids[ids.length - 1]   // last section wins at the very bottom

      setActiveId(current)
    }

    function onScroll() {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [ids])

  return activeId
}