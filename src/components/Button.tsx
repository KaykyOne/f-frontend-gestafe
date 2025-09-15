import React, { ReactNode } from "react";

type TiposButton = {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
};

export default function Button({ children, className = "", icon }: TiposButton) {
  return (
    <button
      className={`bg-primary/50 rounded-lg w-full max-w-[400px] text-dark-primary hover:opacity-80 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer shadow hover:shadow-xl/5 overflow-hidden ${className}`}
    >
      <div className="flex w-full h-full items-center font-semibold p-4 text-center gap-3 justify-center">
        <a className="flex text-center justify-center items-center">{children}</a>
        {icon && icon}
      </div>
    </button>
  );
}
