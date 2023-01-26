import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header>
      <div className="my-2 text-center">
        <Link href="/">
          <span className="font-bold text-3xl">
            MY<span className="text-[#3898d8]">PROFILE</span>
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
