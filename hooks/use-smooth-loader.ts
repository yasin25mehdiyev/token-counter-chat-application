import { useEffect, useState } from "react"

export function useSmoothLoader(isReady?: boolean) {
  const [showLoader, setShowLoader] = useState<boolean>(true)

  useEffect(() => {
    if (!isReady) return

    const t = window.setTimeout(() => setShowLoader(false), 250)
    return () => window.clearTimeout(t)
  }, [isReady])

  return { showLoader }
}
