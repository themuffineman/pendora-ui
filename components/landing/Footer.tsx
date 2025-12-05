import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center w-full p-4 text-xs justify-between border-t border-border">
      <div className="font-mono">©2025 Pendora UI. All rights reserved.</div>
      <div className="font-mono">
        Made with ❤️ by{" "}
        <a
          className="underline font-bold"
          target="_blank"
          href="https://github.com/themuffineman"
        >
          themuffineman
        </a>
      </div>
    </div>
  );
};

export default Footer;
