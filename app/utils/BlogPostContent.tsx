import Link from "next/link";
import { BlogPost } from "../types/blog";

export default function BlogPostContent({ slug, title, excerpt, date, category }: BlogPost) {
    return (
        <article className="flex flex-col gap-3 rounded-lg border border-zinc-200 bg-white p-6 transition duration-200 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-950/10">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-700">{category}</p>
            <h3 className="text-lg font-bold text-emerald-950">{title}</h3>
            <p className="text-sm leading-6 text-zinc-600">{excerpt}</p>
            <div className="mt-auto flex items-center justify-between pt-4">
                <time className="text-xs text-zinc-400">{date}</time>
                <Link href={`/blog/${slug}`} className="text-sm font-semibold text-emerald-700 hover:text-emerald-900">
                    Leer más <span aria-hidden="true">&rarr;</span>
                </Link>
            </div>
        </article>
    );
}
