import { CONTACT_NAME, PHONE_DISPLAY, SMS_HREF } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-auto px-2 pb-4 pt-10 text-center">
      <p className="font-display text-xl font-bold leading-snug text-ink sm:text-2xl">
        To sign up, text {CONTACT_NAME} at
        <br />
        <a
          href={SMS_HREF}
          className="text-purple no-underline decoration-purple/30 underline-offset-4 hover:underline"
        >
          {PHONE_DISPLAY}
        </a>
      </p>
    </footer>
  );
}
