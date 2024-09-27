export const metadata = {
    title: 'Firebase Backoffice',
    description: 'Manage your Firebase project',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
