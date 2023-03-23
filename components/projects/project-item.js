import Image from "next/image";

export default function ProjectItem({ data }) {
  const Title = data.properties.Name.title[0].plain_text;
  const github = data.properties.Github.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgScr = data.cover.external.url;

  return (
    <div className="flex flex-col p-6 m-3 bg-slate-700 rounded-md">
      <Image src={imgScr} width="100" height="60" />
      <h1>{Title}</h1>
      <h3>{description}</h3>
      <a href={github}>Github 링크 바로가기</a>
    </div>
  );
}
