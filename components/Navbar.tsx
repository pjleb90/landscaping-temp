'use client';

import Link from "next/link"
import Image from "next/image";
import Container from "./container";
import { NavigationMenuDropdown } from "./dropdown";


const Navbar = () => {
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <div>
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                <Image src="/logo.jpeg" alt="landscaping logo" height={60} width={60} className="h-12 w-auto mr-3" />
            </Link>
          </div>
          <div>
            <NavigationMenuDropdown />
          </div>
        </div>
      </Container>

    </div>

    );
}

export default Navbar;
