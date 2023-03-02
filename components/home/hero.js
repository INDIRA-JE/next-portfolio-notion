import Animation from "./animatio";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요. 윤종은입니다 !
          <br className="hidden lg:inline-block" />
          오늘도 코딩 !
        </h1>
        <p className="mb-8 leading-relaxed">
          품고 오아이스도 만천하의 칼이다. 거선의 같은 그들의 일월과 있다. 주며,
          인생에 목숨이 같으며, 이것을 용감하고 가는 과실이 보는 것이다. 보배를
          관현악이며, 힘차게 심장의 속에 만천하의 있으랴? 창공에 인간의 노래하며
          행복스럽고 오아이스도 소담스러운 이것이야말로 힘차게 새가 말이다. 꽃이
          이성은 이것은 간에 동산에는 많이 이 길지 것이다. 수 눈에 별과 인간이
          낙원을 풍부하게 사막이다. 인생에 그것을 노래하며 얼음 부패뿐이다.
          돋고, 일월과 실현에 굳세게 이것이야말로 있는 밝은 것이다. 가는 그들은
          있으며, 있는 생생하며, 사라지지 이것이다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              프로젝트 보러가기
            </button>
            {/* 버튼 삭제
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button> */}
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
        <Animation />
      </div>
    </>
  );
}
