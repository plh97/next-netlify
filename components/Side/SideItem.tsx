import Link from "next/link";
import React from "react";

interface IProps {
  className: string;
  children: React.ReactNode;
  path: string;
  icon?: string;
}

export default function SideItem({ path, className, children, icon }: IProps) {
  return (
    <Link href={path} className={className}>
      <span>{children}</span>
    </Link>
  );
}
