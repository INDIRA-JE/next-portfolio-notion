import Layout from "@/components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "@/config";

// Client 쪽에서 보여지는 부분
export default function Projects(projects) {
  console.log(projects);
  return (
    <>
      <Layout>
        <Head>
          <title>Portfolio</title>
          <meta name="description" content="매일 같이 빡코딩" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>총 프로젝트 : {projects.results.length}</h1>
        {/* {projects.results.map(
          (aProject) => aProject.properties.Name.title[0].plain_text
        )} */}
        {/* <h1>aProject.properties.Name.title[0].plain_text</h1> */}
      </Layout>
    </>
  );
}

// 서버 쪽에서 보여지는 부분
// 빌드 타임에 호출 - DB 땡겨오기
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 100,
      sorts: [{ property: "Name", direction: "ascending" }], // 정렬 지정
    }),
  };

  // res 변수에 담기 <- fetch("https://api.notion.com/v1/databases/database_id/query", options)
  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  // res -> json 형식으로 변형
  const projects = await res.json(); // result -> projects 변경
  // Parsing (경로 : project > properties > Name > title > plain_text(JE 01~05))
  const projectsNames = projects.results.map(
    (aProject) => aProject.properties.Name.title[0].plain_text
  );

  console.log(`projectsNames : ${projectsNames}`);

  return {
    // return : 바깥으로 Data 넘겨주고 싶을 때 -> props에 입력 -> function Projects로 빠진다
    props: { projects }, // will be passed to the page component as props
  };
}
