import './globals.css'
import Navbar from '@/components/navbar/Navbar'

export const metadata = {
  title: 'Croton Auto Repair',
  description: 'Croton Auto Repair is Now An Official New York State Inspection Station',
  icons: {
    icon: '/Logo2.1.3.png'

  },
}


const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="ic" href="/Logo2.1.3.png" />
      </head>
      
      <body>
        <Navbar />

        {children}

      </body>

    </html>
  )
}

export default RootLayout;
