// import './globals.css'
import './styles/computer.css'
import './styles/home.css'
import './styles/globals.css'
export const metadata = {
  title: 'Charlytoc awesome portfolio',
  description: 'Here you will to know me better than my mother',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Signika&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@500&family=Press+Start+2P&display=swap" rel="stylesheet"/>

      <script src="https://kit.fontawesome.com/8ea552d239.js" async></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
