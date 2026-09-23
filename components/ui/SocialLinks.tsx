import { socialLinks } from "@/lib/socialLinks";

export default function SocialLinks({ locale, labels = false, className = "" }: {
  locale: string;
  labels?: boolean;
  className?: string;
}) {
  const links = [
    { name: "YouTube", href: socialLinks.youtube, path: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" },
    { name: "LinkedIn", href: socialLinks.linkedin, path: "M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42ZM19.02 18.75h-2.95V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.78V9.2h2.83v1.3h.04c.39-.75 1.36-1.55 2.8-1.55 2.99 0 3.57 1.97 3.57 4.53v5.27Z" },
  ].filter((link) => link.href);
  if (!links.length) return null;
  return <div className={`flex flex-wrap items-center gap-2 ${className}`}>
    {links.map(({ name, href, path }) => <a
      key={name} href={href} target="_blank" rel="noopener noreferrer"
      aria-label={locale === "ko" ? `리파인 공식 ${name} (새 창)` : `Refind official ${name} (opens in a new tab)`}
      title={locale === "ko" ? `리파인 공식 ${name}` : `Refind official ${name}`}
      className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-lg px-2 opacity-75 transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden="true"><path d={path} /></svg>
      {labels && <span className="text-sm font-medium">{name}</span>}
    </a>)}
  </div>;
}
