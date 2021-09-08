import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>l.heyrajan.com</title>
        <meta name="description" content="Links!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          My socials
        </h1>

        <p className={styles.description}>
          Glad you could make it! This part of the site isn't done, but you can access my links through <code className={styles.code}>/g/[githubrepo].</code>More to come!
          <br/><br/>
					Try it out! Go to <Link href="l.heyrajan.com/g/rewrites"><u>l.heyrajan.com/g/rewrites</u></Link> for this repository!
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by NextJS Rewrites, Deployed on Vercel
        </a>
      </footer>
    </div>
  )
}
