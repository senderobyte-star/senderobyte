import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers' // El archivo que creamos para el Dark Mode
import { Analytics } from "@vercel/analytics/react" // Importación de analíticas

export const metadata: Metadata = {
  title: 'SenderoByte | Siempre Listos',
  description: 'Arquitectura de Datos, Soporte L3 y el Sendero hacia Python/SQL.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Agregamos suppressHydrationWarning para evitar errores de consola con los temas
    <html lang="es" suppressHydrationWarning> 
      <body>
        <Providers>
          {children}
          {/* Esta es la variable/componente que rastrea tus visitas */}
          <Analytics /> 
        </Providers>
      </body>
    </html>
  )
}
