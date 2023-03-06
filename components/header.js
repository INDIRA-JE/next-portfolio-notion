import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";

export default function Header({ children }) {
  return (
    <>
      <header className="body-font">
        {/* div className : text-gray-900 dark:text-slate-100 삭제(globals.css 통합) */}
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium Link-hover items-center mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">JE Portfolio</span>
          </Link>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 Link-hover">
              Home(홈)
            </Link>
            <Link href="/" className="mr-5 Link-hover">
              Profile(프로필)
            </Link>
            <Link href="/projects" className="mr-5 Link-hover">
              Project(프로젝트)
            </Link>
            <Link
              href="https://open.kakao.com/o/sSZEjx7e"
              className="mr-5 Link-hover"
            >
              Contact(연락처)
            </Link>
          </nav>

          {/* Button : 다크모드 토글 버튼 작업해야 함 */}
          <DarkModeToggleButton />
        </div>
      </header>
    </>
  );
}
