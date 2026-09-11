import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DotGrid } from "@/components/dot-grid";
import { AGES, CONTACT_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Meet ${CONTACT_NAME}, the teacher behind Rosebud Children's Yoga in Brooklyn.`,
};

export default function AboutPage() {
  return (
    <div className="relative flex min-w-0 flex-1 flex-col pb-8 pt-8">
      <DotGrid className="top-0 right-2 hidden opacity-80 sm:grid" />

      <h1 className="reveal font-display text-4xl font-extrabold text-ink sm:text-5xl">
        About
      </h1>
      <p className="reveal reveal-delay-1 mt-3 max-w-lg text-lg leading-relaxed text-pretty text-ink/75">
        Hi, I&rsquo;m {CONTACT_NAME} &mdash; the teacher behind Rosebud
        Children&rsquo;s Yoga.
      </p>

      <div className="mt-8 grid items-start gap-7 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div className="reveal reveal-delay-2 overflow-hidden rounded-3xl shadow-[8px_10px_0_rgba(79,122,86,0.12)]">
          <Image
            src="/katie-photo.jpg"
            alt={`${CONTACT_NAME} and a friend smiling on a hike beside a turquoise mountain lake`}
            width={1024}
            height={768}
            className="h-auto w-full"
          />
        </div>

        {/* EDIT ME: swap in your own story — two short paragraphs fit nicely here */}
        <div className="reveal reveal-delay-3 flex flex-col gap-4 text-lg leading-relaxed text-pretty text-ink/75">
          <p>
            Placeholder: a few sentences about who you are and how you found
            your way to teaching yoga to little ones. What you did before this,
            where you trained, what made you want to run a class in the park
            instead of a studio.
          </p>
          <p>
            Placeholder: what a class actually feels like. The songs, the animal
            poses, the wiggling, and why {AGES.toLowerCase()} is such a fun age
            to teach. Close with a warm invitation to come try one.
          </p>
          <p className="font-display text-lg font-bold text-ink">
            <Link href="/schedule" className="text-purple">
              See upcoming classes
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
