import { SVGProps } from "react";

export function TwotoneFullscreenExit(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="2.5em"
      height="2.5em"
      className="transition-transform duration-200 hover:scale-85 cursor-pointer"
      {...props}
    >
      <path
        fill="#62748e"
        d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"
      ></path>
    </svg>
  )
}
