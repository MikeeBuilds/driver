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
      <body className="relative">
        <
        {children}
      </body>
    </html>
  )
}
