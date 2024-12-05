import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaDiscord, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blackLight border-t border-white text-white py-4">
      <div className="container mx-auto w-full flex justify-between items-center">
        <div className="flex space-x-4 ml-10">
          <Link href="#" passHref>
            <FaTwitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
          </Link>
          <Link href="#" passHref>
            <FaDiscord className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
          </Link>
          <Link href="#" passHref>
            <FaInstagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
          </Link>
        </div>
        <div className="text-center mr-10">
          <p className="text-lg font-semibold">Bizinc Assessment</p>
          <p className="text-sm">COPYRIGHT © 2024 ALL RIGHTS RESERVED</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="#" passHref>
              <span className="text-gray-400 hover:text-white cursor-pointer">Privacy</span>
            </Link>
            <Link href="#" passHref>
              <span className="text-gray-400 hover:text-white cursor-pointer">Terms of Use</span>
            </Link>
            <Link href="#" passHref>
              <span className="text-gray-400 hover:text-white cursor-pointer">License</span>
            </Link>
          </div>
        </div>
        <div className="flex-shrink-0 -mr-20">
          <Image src="/bizinc.png" alt="bizinc logo" width={100} height={100} />
        </div>
      </div>
    </footer>
  );
}