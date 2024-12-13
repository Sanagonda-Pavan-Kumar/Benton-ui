// import React from 'react';
// import Header from '../components/navbar';
// // Import the Header component

// const App = () => {
//   return (
   
// //      <header className="sticky top-0 z-50 bg-white text-black">
// //     <div className="container py-5 cmnhed rounded-3xl">
// //       <nav className="text-nw10 rounded-3xl">
// //         <div className="flex justify-between items-center relative">
// //           <a href="../index.html" className="flex items-center gap-3">
// //             {/* <!-- <img className="w-[40px] md:w-full" src="./assets/images/main-logo.png" alt="logo"> --> */}
// //             <div className="flex items-center gap-1">
// //               <h3 className="font-bold md:hidden lg:block font-OpenSans">Design</h3>
// //               <span className="font-bold md:hidden lg:block font-OpenSans fs-three text-[#0057d6]">X</span>
// //             </div>
// //           </a>
// // {/* 
// //           <!-- MOBILE NAV ICON --> */}
// //           <div className="md:hidden block absolute top-[15%] right-0">
// //             <button aria-label="navigation" type="button"
// //               className="md:hidden text-gray-200 transition duration-300 focus:outline-none focus:text-white hover:text-white"><i
// //                 className="ph-thin ph-list text-3xl" id="bars"></i></button>
// //           </div>

// //           {/* <!-- NAVIGATION - LARGE SCREENS --> */}
// //           <div className="hidden md:flex">
// //             <ul className="hidden md:flex gap-4 lg:gap-8 xl:gap-10">
// //               <li className="cmnhed"><a href="#slider" style="text-decoration: none;"
// //                   className="text-md font-normal transition duration-300 focus:text-[#0057d6] hover:text-[#0057d6] menu-link">Our
// //                   Work</a>
// //               </li>
// //               <li className="cmnhed"><a href="#features" style="text-decoration: none;"
// //                   className="text-md font-normal transition duration-300 focus:text-[#0057d6] hover:text-[#0057d6] menu-link">Features</a>
// //               </li>
// //               <li className=""><a href="#scope" style="text-decoration: none;"
// //                   className="text-md font-normal transition duration-300 focus:text-[#0057d6] hover:text-[#0057d6] menu-link">Scope
// //                   of work</a>
// //               </li>
// //               <li className=""><a href="#plans" style="text-decoration: none;"
// //                   className="text-md font-normal transition duration-300 focus:text-[#0057d6] hover:text-[#0057d6] menu-link">Plans</a>
// //               </li>
// //               <li className=""><a href="#faqs" style="text-decoration: none;"
// //                   className="text-md font-normal transition duration-300 focus:text-[#0057d6] hover:text-[#0057d6] menu-link">FAQs</a>
// //               </li>
// //             </ul>
// //           </div>

// //           <div className="btn-area max-sm:hidden z-20 hidden md:flex duration-500">
// //             <a href="#" aria-label="Contact"
// //               className="move-btn theme-transition-4 flex items-center text-center text-secondary  duration-500">
// //               <span
// //                 className="one text-md font-medium theme-transition-4 min-h-[45px] rounded-full bg-[#0057d6] text-white px-8 py-3 border-2 duration-500">
// //                 Subscribe
// //               </span>
// //               <span
// //                 className="two d-center theme-transition-4 flex min-h-[45px] shrink-0 items-center justify-center rounded-full border-2 bg-[#0057d6] text-white p-2.5 text-center duration-500">
// //                 <i className="ph ph-arrow-up-right text-[24px]" data-icon-name="arrow-right"></i>
// //               </span>
// //             </a>
// //           </div>
// //           {/* <!-- <div className="hidden md:flex">
// //             <a href="../contact-us.html" className="flex items-center group duration-700">
// //               <span className="py-2 md:py-3 px-4 lg:px-5 bg-[#0057d6] text-nb10 rounded-2xl duration-500 font-normal">Contact
// //                 Us</span>
// //               <i
// //                 className="ph ph-arrow-up-right p-3 lg:p-[14px] bg-[#0057d6] text-nb10 rounded-2xl duration-500 font-medium group-hover:rotate-45"></i>
// //             </a>
// //           </div> --> */}
// //         </div>
// //         {/* <!-- MOBILE MENU --> */}
// //         <div id="mobileMenu" className="flex w-full mx-auto py-8 text-center show">
// //           <div className="flex flex-col justify-center items-center w-full gap-4">
// //             <a href="#slider"
// //               className="block transition duration-300 focus:text-[#0057d6] focus hover:text-[#0057d6]">Our
// //               Work</a>
// //             <a href="#features"
// //               className="block transition duration-300 focus:text-[#0057d6] focus hover:text-[#0057d6]">Features</a>
// //             <a href="#scope"
// //               className="block transition duration-300 focus:text-[#0057d6] focus hover:text-[#0057d6]">Scope
// //               of work</a>
// //             <a href="#plans"
// //               className="block transition duration-300 focus:text-[#0057d6] focus hover:text-[#0057d6]">Plans</a>
// //             <a href="#faqs"
// //               className="block transition duration-300 focus:text-[#0057d6] focus hover:text-[#0057d6]">FAQs</a>
// //             {/* <!-- <a href="../contact-us.html" className="flex items-center group duration-700">
// //               <span className="py-3 lg:py-4 px-4 lg:px-8 bg-[#0057d6] text-nb10 rounded-2xl duration-500 font-medium">Contact
// //                 Us</span>
// //               <i
// //                 className="ph ph-arrow-up-right p-[12px] lg:p-[18px] bg-[#0057d6] text-nb10 rounded-2xl duration-500 font-medium group-hover:rotate-45"></i>
// //             </a> --> */}
// //             <div className="btn-area z-20 md:flex duration-500">
// //               <a href="#" aria-label="Contact"
// //                 className="move-btn theme-transition-4 flex items-center text-center text-secondary  duration-500">
// //                 <span
// //                   className="one m-text theme-transition-4 min-h-[45px] rounded-full bg-black-4 px-8 py-3 font-light border-2 border-[#0057d6] duration-500">
// //                   Subscribe
// //                 </span>
// //                 <span
// //                   className="two d-center theme-transition-4 flex min-h-[45px] shrink-0 items-center justify-center rounded-full border-2 border-[#0057d6] bg-black-4 p-2.5 text-center duration-500">
// //                   <i className="ph ph-arrow-up-right text-[24px]" data-icon-name="arrow-right"></i>
// //                 </span>
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </nav>
// //     </div>
// //   </header>

// <div>
//     he,adri
// </div>
//   );
// };

// export default App;



import React from 'react';
import Navbar from '../components/navbar';

const App = () => (
  <div>
    <Navbar />
    <main>
      <h1>Welcome to Benton UI</h1>
    </main>
  </div>
);

export default App;
