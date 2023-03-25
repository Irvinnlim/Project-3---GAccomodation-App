import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import Dropdown from "react-bootstrap/Dropdown";

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <header className="flex justify-between">
      <Link to={"/"} className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
          />
        </svg>
        <span className="font-bold text-xl">GAccomodation</span>
      </Link>
      <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
        <div>Anywhere</div>
        <div className="border-l border-gray-300"></div>
        <div>Any week</div>
        <div className="border-l border-gray-300"></div>
        <div>Any guests</div>
        <button className="bg-primary text-white p-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4"
        >
          {/* <Link
            to={user ? "/account/" : "/login"}
            className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4"
          > */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 relative top-1"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {!!user && <div>{user.name}</div>}
          {/* </Link> */}

          <Dropdown.Menu className="flex flex-col w-32 gap-1 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 ">
            <Dropdown.Item className="w-32 hover:bg-gray-200">
              <Link to={"/register"}>Signup</Link>
            </Dropdown.Item>
            <Dropdown.Item className="w-32 hover:bg-gray-200">
              <Link to={"/login"}>Login</Link>
            </Dropdown.Item>
            <Dropdown.Item className="w-32 hover:bg-gray-200">
              <Link to={"/account/"}>Account</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Toggle>
      </Dropdown>
    </header>
  );
}

// import { Link } from "react-router-dom";
// import { useContext, useState } from "react";
// import { UserContext } from "./UserContext";
// import Dropdown from "react-bootstrap/Dropdown";

// export default function Header() {
//   const { user } = useContext(UserContext);

//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="flex justify-between">
//       <Link to={"/"} className="flex items-center gap-1">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="w-8 h-8"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
//           />
//         </svg>
//         <span className="font-bold text-xl">GAccomodation</span>
//       </Link>
//       <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
//         <div>Anywhere</div>
//         <div className="border-l border-gray-300"></div>
//         <div>Any week</div>
//         <div className="border-l border-gray-300"></div>
//         <div>Any guests</div>
//         <button className="bg-primary text-white p-1 rounded-full">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="w-4 h-4"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
//             />
//           </svg>
//         </button>
//       </div>
//       <div>
//         <button
//           onClick={() => setIsOpen((prev) => !prev)}
//           className="flex items-center gap-2 bg-white border border-gray-300 rounded-full py-2 px-4"
//         >
//           {/* <Link
//             to={user ? "/account/" : "/login"}
//             className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4"
//           > */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//             />
//           </svg>
//           <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="w-6 h-6 relative top-1"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </div>
//           {!!user && <div>{user.name}</div>}
//           {/* </Link> */}
//           {!isOpen ? <AiOutLineCaretDown /> : <AiOutLineCaretUp />}

//           {isOpen && <div className="bg-gray-200 absoulute"></div>}

//           <Dropdown.Menu className="flex flex-col w-32 gap-1 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 ">
//             <Dropdown.Item className="w-32 hover:bg-gray-200">
//               <Link to={"/register"}>Signup</Link>
//             </Dropdown.Item>
//             <Dropdown.Item className="w-32 hover:bg-gray-200">
//               <Link to={"/login"}>Login</Link>
//             </Dropdown.Item>
//             <Dropdown.Item className="w-32 hover:bg-gray-200">
//               <Link to={"/account/"}>Account</Link>
//             </Dropdown.Item>
//           </Dropdown.Menu>
//         </button>
//       </div>
//     </header>
//   );
// }
