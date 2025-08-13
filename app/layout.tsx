import { ThemeProvider } from '@/components/theme-provider'
import { Geist, Geist_Mono } from 'next/font/google'
import type React from 'react'
import './globals.css'

const geist = Geist({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-geist',
})

const geistMono = Geist_Mono({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-geist-mono',
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='uz'
			className={`${geist.variable} ${geistMono.variable} antialiased`}
			suppressHydrationWarning
		>
			<body>
				<ThemeProvider
					attribute='class'
					defaultTheme='light'
					enableSystem
					disableTransitionOnChange={false}
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}

export const metadata = {
	title: 'Yuridik Kadrlarni Qayta Tayyorlash va Malakasini Oshirish Instituti',
	description:
		'Yuridik sohaga oid mutaxassislarning bilim va ko‘nikmalarini zamonaviy metodlar asosida oshirish, qayta tayyorlash va malaka darajasini ko‘tarish bo‘yicha yetakchi institut.',
	keywords: [
		'yuridik kadrlar',
		'malaka oshirish',
		'qayta tayyorlash',
		"huquqiy ta'lim",
		'yuridik institut',
		"O'zbekiston",
	],
	icons: {
		icon: '/logo2.png',
		shortcut: '/logo2.png',
		apple: '/logo2.png',
	},
	authors: [{ name: 'Abduvoris' }],
	creator: 'Abduvoris',
	generator: 'Next.js',
	applicationName: 'YKQTMIOI',
}
