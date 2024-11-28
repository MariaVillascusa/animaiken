import { Navbar } from '@/components/common'
import { ModalUI } from '@/components/common/ModalUI'
import SidebarUI from '@/components/common/SidebarUI/SidebarUI'
import AppThemeProvider from '@/components/ui/theme'
import { fetchNavbar } from '@/lib/api/api'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Head from 'next/head'
import { cookies } from 'next/headers'

const geistSans = localFont({
  src: '../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: '../public/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Animaiken App',
  description: 'La tienda de animales más guay',
}

export const revalidate = 60

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const navbar = await fetchNavbar()
  const theme = cookies().get('__theme__')?.value || 'system'
  const links = navbar.categories?.map((category) => ({
    href: `/${category.slug}`,
    label: category.name,
  }))
  return (
    <html
      lang='es'
      data-theme={theme}
      style={theme !== 'system' ? { colorScheme: theme } : {}}
    >
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppThemeProvider defaultTheme={theme} enableSystem>
          <Navbar links={links} />
          <div className='max-w-8xl m-auto'>{children}</div>
          <ModalUI />
          <SidebarUI links={links} />
        </AppThemeProvider>
      </body>
    </html>
  )
}
