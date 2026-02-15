'use client'

import Link from 'next/link'

const ErrorBoundary = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-8 px-6">
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold text-black/90">
          Algo deu errado
        </h1>
        <p className="text-black/50 max-w-md">
          Tivemos um problema ao carregar esta página. Você pode tentar
          novamente ou voltar para a página inicial.
        </p>
      </div>

      <Link
        href="/"
        className="rounded-md text-black/50 hover:text-black/80 underline">
        Voltar para início
      </Link>
    </div>
  )
}

export default ErrorBoundary
