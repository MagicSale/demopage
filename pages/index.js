import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Demo Project</title>
        <meta name="description" content="This is just a demo project." />
      </Head>

      <Layout title="Demo Project">
        <p>
          Labore id sit occaecat esse sunt minim sint dolore Lorem enim. Reprehenderit non duis pariatur reprehenderit Lorem non consequat sunt nostrud tempor nostrud nisi. Cupidatat aute excepteur voluptate nisi et in id pariatur. Velit ad cupidatat id non. Fugiat enim commodo veniam et incididunt cillum aliquip velit voluptate dolore. Sit ipsum ea elit reprehenderit proident in sit tempor minim.
        </p>
      </Layout>
    </>
  )
}
