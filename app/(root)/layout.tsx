import { Suspense } from 'react';

import Link from 'next/link';

import { GrupoPlanMark, PlanMark } from '@/components/layout';
import { exo, openSans } from '@/configs/fonts';
import { Filters, FiltersFallback } from '@/modules/root';

import './globals.css';

const Layout = (props: Layout.Props) => {
  const { children } = props;

  return (
    <html lang="pt-BR" className={`${exo.variable} ${openSans.variable}`}>
      <body className="relative block min-h-min w-full font-normal font-sans text-base antialiased bg-white">
        <span
          className="w-screen h-[128dvh] block fixed inset-0 overflow-hidden pointer-events-none select-none bg-linear-[50deg] from-[#F5821F] via-[#FFD565] to-[#F5821F]"
          aria-hidden
        >
          <span
            className="size-full absolute block pointer-events-none select-none z-0 bg-linear-to-b from-accent to-accent/0"
            aria-hidden
          />
        </span>
        <div
          id="__APP_ROOT"
          className="relative isolate flex h-dvh w-full flex-col z-1 text-black"
        >
          <div className="@container min-h-dvh flex flex-col space-y-5">
            <div className="w-full flex-1 relative mx-auto max-w-container px-6">
              <header className="w-full flex flex-col xl:flex-row gap-y-6 items-center justify-center md:justify-start min-h-content py-10 md:py-13">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center *:[svg]:h-12 md:*:[svg]:h-14.5"
                  aria-label="Página inicial"
                >
                  <PlanMark />
                </Link>
                <Suspense fallback={<FiltersFallback />}>
                  <Filters />
                </Suspense>
              </header>
              <main className="relative isolate flex w-full flex-col pb-14 md:pb-18">
                {children}
              </main>
            </div>
            <footer className="w-full relative isolate pt-3.5 pb-5.5 bg-black">
              <div className="w-full relative mx-auto px-6 max-w-container">
                <div className="w-full flex flex-col gap-8 md:flex-row items-center md:items-end justify-between">
                  <Link
                    href="https://www.planmkt.com.br/"
                    className="inline-flex items-center justify-center *:[svg]:h-18 md:*:[svg]:h-23"
                    rel="noreferrer"
                    target="_blank"
                    aria-label="Grupo Plan Marketing"
                  >
                    <GrupoPlanMark />
                  </Link>
                  <p className="text-xs font-bold text-white font-open-sans">
                    Grupo Plan Marketing © Todos os direitos reservados - 2025
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;

export { metadata, viewport } from '@/utils/constants';
