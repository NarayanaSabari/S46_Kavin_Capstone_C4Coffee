import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-backGround2 p-4 text-sm md:px-10 md:py-4">
      <div className="grid grid-flow-col md:grid-cols-3">
        <div className="justify-self-center">
          <div className="font-bold text-text2">C4Coffee</div>
          <div className="mt-4 font-semibold text-text1 md:leading-loose">
            By a coffee lover, <br /> To a coffee lover, <br /> For a coffee
            lover
          </div>
        </div>
        <div className="hidden justify-self-center md:block">
          <div className="mb-2 font-bold text-text2">Quick Links:</div>
          <ul className="mx-6 font-semibold text-text1">
            <li className="my-2 cursor-pointer">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="my-2 cursor-pointer">
              <Link to={"/coffeetypes"}>Coffee types</Link>
            </li>
            <li className="my-2 cursor-pointer">
              <Link to={"/shopreview"}>Shop review</Link>
            </li>
          </ul>
        </div>
        <div className="mb-2 justify-self-center font-bold text-text2">
          Connect with Me:
          <div className="my-2 flex gap-2">
            <div>
              <a
                href="https://www.linkedin.com/in/kavin-mathivanan-577b772a5/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 50 50"
                  className="h-8 w-8"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/__.calyx.__/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 30 30"
                  className="h-8 w-8"
                >
                  <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-xs font-semibold text-text2">
        Copyright © 2024 C4Coffee. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
