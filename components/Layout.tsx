import Head from 'next/head';

import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import { ReactNode } from 'react';
import { PageMeta } from '../types';

interface Props {
    children: ReactNode;
    meta?: PageMeta;
}
export default function Layout({ children, meta: PageMeta }: Props) {
    const meta = {
        title: 'T Camp Collection',
        description: 'Exclusive Cuts & Design | Premium Brand',
    }

  return (
    <>
        <Head>
            <title>{meta.title}</title>
            <meta name="robots" content="follow, index" />
            <link href="/favicon.ico" rel="shortcut icon" />
            <meta content={meta.description} name="description" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:title" content={meta.title} />
        </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}