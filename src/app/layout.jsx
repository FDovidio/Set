import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './componnents/NavBar'









export const metadata = {
  title: 'Set',
  description: 'DJ Set maker',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
            <NavBar />
         {children}
        
      </body>
    </html>
  );
}
