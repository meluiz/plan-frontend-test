import { exo, openSans } from '@/configs/fonts';

import './globals.css';

const Layout = (props: Layout.Props) => {
  const { children } = props;

  return (
    <html lang="pt-BR" className={`${exo.variable} ${openSans.variable}`}>
      <body className="relative block min-h-min w-full font-normal font-sans text-base antialiased">
        <div
          id="__APP_ROOT"
          className="relative isolate flex h-dvh w-full flex-col z-1 text-black bg-white"
        >
          {children}
        </div>
      </body>
    </html>
  );
};

export default Layout;

export { metadata, viewport } from '@/utils/constants';
