import { useTheme } from "next-themes";

export default function DarkModeToggleButton() {
  /* HTML 요소들이 들어감(바꿔주는 작업)
      - theme     : 현재 값 가져오기  (getter)
      - setTheme  : 현재 값 바꾸기    (setter)  */
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        className="
        inline-flex items-center 
        border-0 py-1 px-3 rounded text-base mt-4 md:mt-0
        focus:outline-none 
        bg-gray-200 
        hover:bg-gray-300
        hover:text-red-500
        dark:bg-slate-600
        dark:text-slate-300
        dark:hover:bg-slate-700
        dark:hover:text-yellow-300
        "
        // button 으로 지정
        type="button"
        // button 에 기능 설정
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {/* Button : Light Mode - sun */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="visible dark:invisible w-6 h-6 dark:w-0 dark:h-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
        {/* Button : Dark Mode - Moon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="invisible dark:visible w-0 h-0 dark:w-6 dark:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>

        {/* 기존 Button Name, 화살표 모양(→) 제거 */}
        {/* button
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg> */}
      </button>
    </>
  );
}
