import React from 'react';

// Sub-components
const Logo: React.FC = () => (
  <a href="../index.html" className="flex items-center gap-3">
    <div className="flex items-center gap-1">
      <h3 className="font-bold md:hidden lg:block font-OpenSans">Design</h3>
      <span className="font-bold md:hidden lg:block font-OpenSans fs-three text-[#0057d6]">X</span>
    </div>
  </a>
);

const MobileNavIcon: React.FC = () => (
  <div className="md:hidden block absolute top-[15%] right-0">
    <button
      aria-label="navigation"
      type="button"
      className="md:hidden text-gray-200 transition duration-300 focus:outline-none focus:text-white hover:text-white"
    >
      <i className="ph-thin ph-list text-3xl" id="bars"></i>
    </button>
  </div>
);

const NavLinks: React.FC = () => {
  const links = [
    { href: '#slider', label: 'Our Work' },
    { href: '#features', label: 'Features' },
    { href: '#scope', label: 'Scope of work' },
    { href: '#plans', label: 'Plans' },
    { href: '#faqs', label: 'FAQs' },
  ];

  return (
    <ul className="hidden md:flex gap-4 lg:gap-8 xl:gap-10">
      {links.map(({ href, label }) => (
        <li key={href} className="cmnhed">
          <a
            href={href}
            style={{ textDecoration: 'none' }}
            className="text-md font-normal transition duration-300 focus:text-[#0057d6] hover:text-[#0057d6] menu-link"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};

const SubscribeButton: React.FC = () => (
  <a
    href="#"
    aria-label="Contact"
    className="move-btn theme-transition-4 flex items-center text-center text-secondary duration-500"
  >
    <span className="one text-md font-medium theme-transition-4 min-h-[45px] rounded-full bg-[#0057d6] text-white px-8 py-3 border-2 duration-500">
      Subscribe
    </span>
    <span className="two d-center theme-transition-4 flex min-h-[45px] shrink-0 items-center justify-center rounded-full border-2 bg-[#0057d6] text-white p-2.5 text-center duration-500">
      <i className="ph ph-arrow-up-right text-[24px]" data-icon-name="arrow-right"></i>
    </span>
  </a>
);

const MobileMenu: React.FC = () => {
  const links = [
    { href: '#slider', label: 'Our Work' },
    { href: '#features', label: 'Features' },
    { href: '#scope', label: 'Scope of work' },
    { href: '#plans', label: 'Plans' },
    { href: '#faqs', label: 'FAQs' },
  ];

  return (
    <div id="mobileMenu" className="flex w-full mx-auto py-8 text-center show">
      <div className="flex flex-col justify-center items-center w-full gap-4">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="block transition duration-300 focus:text-[#0057d6] hover:text-[#0057d6]"
          >
            {label}
          </a>
        ))}
        <div className="btn-area z-20 md:flex duration-500">
          <SubscribeButton />
        </div>
      </div>
    </div>
  );
};

// Main Header Component
const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white text-black">
      <div className="container py-5 cmnhed rounded-3xl">
        <nav className="text-nw10 rounded-3xl">
          <div className="flex justify-between items-center relative">
            <Logo />
            <MobileNavIcon />
            <div className="hidden md:flex">
              <NavLinks />
            </div>
            <div className="btn-area max-sm:hidden z-20 hidden md:flex duration-500">
              <SubscribeButton />
            </div>
          </div>
          <MobileMenu />
        </nav>
      </div>
    </header>
  );
};

export default Header;
