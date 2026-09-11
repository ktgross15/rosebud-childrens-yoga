import { EMAIL, EMAIL_HREF } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-auto px-2 pb-4 pt-10 text-center">
      <p className="font-display text-xl font-bold leading-snug text-ink sm:text-2xl">
        To sign up, email us at
        <br />
        <a
          href={EMAIL_HREF}
          className="break-all text-purple no-underline decoration-purple/30 underline-offset-4 hover:underline"
        >
          {EMAIL}
        </a>
      </p>
    </footer>
  );
}
