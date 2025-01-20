import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { label: "Home", href: "/doc-online" },
    { label: "About", href: "/doc-online/about-us" },
    { label: "Services", href: "/doc-online/services" },
    { label: "Contact", href: "/doc-online/contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 left-0 w-full shadow-md z-[100] bg-white">
        <div className="container mx-auto px-4 lg:px-20 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/doc-online" className="flex items-center h-10">
              <img
                src="/doc-online/assets/doc-logo.png"
                className="w-full h-full"
                alt="Logo"
              />
              <img
                src="/doc-online/assets/dinisulogoword.png"
                className="w-full h-full"
                alt="Logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={handleLinkClick}
                  className={`${
                    location.pathname === item.href
                      ? "text-primary font-bold"
                      : "text-foreground"
                  }`}
                >
                  <Button variant="ghost">{item.label}</Button>
                </Link>
              ))}
            </div>

            {/* Desktop appointment Button */}
            <div className="hidden lg:flex items-center gap-2">
              <Link to="/doc-online/booking">
                <Button className="rounded-full text-foreground bg-white hover:bg-primary/10 ring-1 ring-primary">
                  Book Appointment
                  <div className="bg-primary/80 h-6 w-6 rounded-full flex items-center justify-center ml-2">
                    <ArrowRight className="text-white h-4 w-4 -rotate-45" />
                  </div>
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 z-50 relative"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[90] transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-primary z-[500] transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-6 border-b border-primary-foreground/20">
            <h2 className="text-xl font-bold text-white">Menu</h2>
          </div>

          {/* Sidebar Content */}
          <div className="flex-1 overflow-y-auto py-6 px-4">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={handleLinkClick}
                  className={`${
                    location.pathname === item.href
                      ? "bg-white/20 text-white"
                      : "text-white/80 hover:bg-white/10"
                  } px-4 py-2 rounded-lg transition-colors duration-200`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-primary-foreground/20">
            <Link to="/doc-online/booking" onClick={handleLinkClick}>
              <Button className="w-full rounded-md bg-white hover:bg-white/90 text-primary">
                Book Appointment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;