import Layout from "@/components/layout";
import Head from "next/head";

export default function Profile() {
  return (
    <>
      <Layout>
        <Head>
          <title>Portfolio</title>
          <meta name="description" content="매일 같이 빡코딩" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>소개</h1>
      </Layout>
    </>
  );
}
