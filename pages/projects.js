/* eslint-disable react/jsx-key */
import Layout from "@/components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "@/config";
import ProjectItem from "@/components/projects/project-item";

// Client(Browser) 쪽에서 보여지는 부분
export default function Projects({ projects }) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-6 ">
        <Head>
          <title>Portfolio</title>
          <meta name="description" content="첫번째 포트폴리오" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-3xl font-bold sm:text-4xl">
          총 프로젝트 :
          <span className="pl-4 text-blue-500">{projects.results.length}</span>
        </h1>
        {/* React에서 로직 처리를 할 경우 : {}중괄호 입력 */}
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8 w-full">
          {projects.results.map((aProject) => (
            <ProjectItem key={aProject.id} data={aProject} />
          ))}
        </div>
      </div>
    </Layout>
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
      page_size: 100, // 100page까지 가져와라
      sorts: [{ property: "Name", direction: "ascending" }], // 정렬 지정
    }),
  };

  // DB - 가공
  // 1. DB → res 변수에 담기 <- fetch("https://api.notion.com/v1/databases/database_id/query", options)
  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  // 2. JSON 형식 → 변형
  const projects = await res.json(); // result -> projects 변경
  // Parsing (경로 : project > properties > Name > title > plain_text(JE 01~05))
  // 3. Map 형식 → 변환
  const projectsNames = projects.results.map(
    (aProject) => aProject.properties.Name.title[0].plain_text
  );

  return {
    // return : 바깥으로 Data 넘겨주고 싶을 때 -> props에 입력 -> function Projects로 빠진다
    props: { projects }, // will be passed to the page component as props
  };
}
