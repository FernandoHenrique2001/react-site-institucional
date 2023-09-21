// import Image from "next/image";
// import githubSVG from "../public/github.svg";

// export default function Footer() {
//   return (
//     <div className="w-full bg-purple-800 text-white sticky top-0">
//       <div className="flex flex-col justify-center items-center py-12 px-20 gap-8">
//         <h1 className="title-footer">Fernando Henrique</h1>
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book.
//         </p>
//       </div>
//     </div>
//   );
// }

import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 flex flex-col justify-center items-center gap-8 text-white py-4 absolute bottom-0">
      <div className="container mx-auto flex justify-center">
        <a
          href="https://www.linkedin.com/in/fernandohenrique2001/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 mx-4"
        >
          Linkedin
        </a>
        <a
          href="https://www.linkedin.com/in/fernandohenrique2001/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 mx-4"
        >
          Facebook
        </a>
        <a
          href="https://github.com/FernandoHenrique2001"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 mx-4"
        >
          GitHub
        </a>
      </div>
      <h2>Terms of Use • Privacy Policy</h2>
    </footer>
  );
};

export default Footer;
