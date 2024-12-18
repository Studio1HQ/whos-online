'use client'

import { VeltProvider as BaseVeltProvider } from "@veltdev/react"

export function VeltProvider({ children }: { children: React.ReactNode }) {
  return (
    <BaseVeltProvider apiKey={process.env.NEXT_PUBLIC_VELT_API_KEY!}>
      {children}
    </BaseVeltProvider>
  )
}
