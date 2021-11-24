import Link from 'next/link'

export default function Custom404() {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px',
        gap: '24px'
      }}
    >
      <h1>404 - Page Not Found</h1>
      <Link href="/">Voltar para a página inicial</Link>
    </div>
  )
}
