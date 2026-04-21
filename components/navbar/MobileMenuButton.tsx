"use client"

import Link from 'next/link';
import { links } from '@/utils/Links';
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SignInButton, SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';
import UserIcon from './UserIcon';
import SignOutLink from './SignOutLink';

function MobileMenuButton() {
  const { user } = useUser();
  const isAdminUser = user?.id === process.env.NEXT_PUBLIC_ADMIN_USER_ID;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleMenu} 
        className="p-2 text-2xl relative z-[200] flex items-center gap-2"
      >
        {isOpen ? <IoClose className="text-2xl" /> : <CgMenuLeftAlt className="text-2xl" />}
        <UserIcon />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-[80vw] h-screen bg-[#FFF3E3] shadow-lg z-[150]"
          >
            <div className="pt-20 px-6 space-y-6">
              <SignedOut>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <SignInButton mode="modal">
                    <button className="w-full text-left text-[#503C3C] text-lg font-medium p-2 hover:bg-[#C5A178] rounded-md">
                      Login
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className="w-full text-left text-[#503C3C] text-lg font-medium p-2 hover:bg-[#C5A178] rounded-md">
                      Register
                    </button>
                  </SignUpButton>
                </motion.div>
              </SignedOut>

              <SignedIn>
                {links.map((link, index) => {
                  if (link.label === 'dashboard' && !isAdminUser) return null;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link 
                        href={link.href}
                        className="block text-lg font-medium text-[#503C3C] hover:bg-[#C5A178] p-2 rounded-md capitalize"
                        onClick={toggleMenu}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: links.length * 0.1 }}
                >
                  <SignOutLink />
                </motion.div>
              </SignedIn>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
            className="fixed inset-0 bg-black z-[90]"
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileMenuButton;