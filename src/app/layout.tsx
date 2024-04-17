import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import '@/styles/variables.module.scss';
import Hotjar from '@hotjar/browser';
import Script from 'next/script';
import NavigationProvider from '../contexts/navegationContext'

const inter = Inter({ subsets: ['latin'] });

const siteId = 3852209;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Função que retorna o script Hotjar como uma string
  const hotjarScript = `
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3852209,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  `;

  return (
    <html lang="pt-br">
      <head>
        <title>MarcaNutri</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Jomhuria&family=Nunito+Sans:opsz,wght@6..12,300;6..12,400;6..12,600;6..12,700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
        <link rel="icon" type="image/x-icon" href="./favicon.ico"/>
      </head>
      <body className={inter.className}>
        <NavigationProvider>
        {children}
        </NavigationProvider>

        {/* Usando Script do Next.js com dangerouslySetInnerHTML */}
        <Script
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: hotjarScript,
          }}
        />

      </body>
    </html>
  );
}
