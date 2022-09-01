import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Layout.module.css'

function Layout ({children, title}) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css" />
                <meta name="robots" content="noindex,nofollow" />
            </Head>               

            <header className='container-fluid'>
                <nav className={styles.center}>
                    <ul>
                        <li>
                            <Link href={'/'}>
                                <a>Willkommen</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/about'}>
                                <a>Über uns</a>
                            </Link>
                        </li>
                    </ul>
                </nav>

            </header>
            <main className='container'>
                <h1>{title}</h1>

                {children}
            </main>
        </>
    );
}
 
export default Layout 