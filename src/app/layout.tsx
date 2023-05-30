'use client'
import { QueryClient, QueryClientProvider } from "react-query"
import './globals.css'

const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnMount: false } } })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <QueryClientProvider client={queryClient}>
        <body>{children}</body>
      </QueryClientProvider>
    </html>
  )
}
