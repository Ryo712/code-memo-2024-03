// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import Sidebar from '../components/Sidebar';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps, router = useRouter() }: AppProps) {
  return (
    <div className="flex min-h-screen">
      {!['/login', '/register'].includes(router.pathname) && <Sidebar />}
      <div className="flex-1 flex flex-col">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
//useRouterを使って現在のパスを取得。そのパスが /login または /register である場合はサイドバーを非表示にする
export default MyApp;

