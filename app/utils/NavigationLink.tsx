"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "../data/navigation-items";

export default function NavigationLink({ href, label }: NavItem) {
    const pathname = usePathname();

    const isActive =
        pathname === href ||
        (href !== "/" && pathname.startsWith(`${href}/`));

    console.log(`[NavigationLink] href: ${href} | pathname: ${pathname} | isActive: ${isActive}`);

    const className = `
        whitespace-nowrap
        rounded-md
        px-2
        py-1
        transition-colors
        ${isActive
            ? "bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-200"
            : "hover:text-cyan-600 dark:hover:text-cyan-400"
        }
    `;

    return <Link href={href} className={className}>{label}</Link>;
}
