import { Footer, NavBar } from '@/components'
import './globals.css'




export const metadata = {
  title: 'Driver',
  description: 'Rental car app created by Algo Hussle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link />
      <body className="relative">
        <NavBar />
        <Footer />
        {children}
      </body>
    </html>
  )
}
