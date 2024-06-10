'use client'

import { Suspense, useEffect, useState } from 'react'

function useHydration() {
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => {
    setHydrated(true)
  }, [])
  return hydrated
}

export function LocalTime({ date }: { date: Date }) {
  const hydrated = useHydration()
  return (
    <Suspense key={hydrated ? 'local' : 'utc'}>
      <p>
        {date.toLocaleDateString() + " " + date.toLocaleTimeString()}
        {hydrated ? '' : ' (UTC)'}
      </p>
    </Suspense>
  )
}