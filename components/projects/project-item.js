import Image from "next/legacy/image";

export default function ProjectItem({ data }) {
  const Title = data.properties.Name.title[0].plain_text;
  const github = data.properties.Github.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgScr = data.cover.file?.url || data.cover.external.url;

  return (
    <div className="flex flex-col m-3 bg-slate-700 rounded-xl w-full">
      <Image
        className="rouded-t-xl"
        src={imgScr}
        alt="cover image"
        width="100%"
        height="50%"
        layout="responsive"
        objectFit="cover"
        quality={100}
      />
      <div className="p-4 flex flex-col w-full">
        <h1>{Title}</h1>
        <h3>{description}</h3>
        <a href={github}>Github 링크 바로가기</a>
      </div>
    </div>
  );
}
