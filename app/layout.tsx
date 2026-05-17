// app/layout.tsx — Javari Whiskey
import type { Metadata } from 'next'
import './globals.css'
export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  title: 'Javari Whiskey | Javari by CR AudioViz AI',
  description: 'Whiskey tracker',
}
import AppShell from '@/components/AppShell'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body style={{ margin: 0, padding: 0 }}><AppShell appName="Javari Whiskey" appColor="#92400e" appEmoji="🥃" appDesc="Whiskey tracker">{children}</AppShell></body></html>)
}
