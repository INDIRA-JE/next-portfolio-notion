import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>JE Study Coding</title>
        <meta name="description" content="매일 같이 빡코딩" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-30xl font-bold underline">~~~~~~Home~~~~~~</h1>
    </Layout>
  );
}
