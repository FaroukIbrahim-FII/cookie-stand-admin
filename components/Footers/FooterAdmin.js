import React from "react";

export default function FooterAdmin() {
  return (
    <>
      <footer className="block py-4">
        <div className="container px-4 mx-auto">
          <hr className="mb-4 border-b-1 border-blueGray-200" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full px-4 md:w-4/12">
              <div className="py-1 text-sm font-semibold text-center text-blueGray-500 md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.creative-tim.com?ref=nnjs-footer-admin"
                  className="py-1 text-sm font-semibold text-blueGray-500 hover:text-blueGray-700"
                >
                  Node21
                </a>
              </div>
            </div>
            <div className="w-full px-4 md:w-8/12">
              <ul className="flex flex-wrap justify-center list-none md:justify-end">
                <li>
                  <a
                    href="https://www.creative-tim.com?ref=nnjs-footer-admin"
                    className="block px-3 py-1 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                  >
                    Student Registration System
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=nnjs-footer-admin"
                    className="block px-3 py-1 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                  >
                    About Us
                  </a>
                </li>
              
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
