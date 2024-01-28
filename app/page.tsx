import Image from "next/image";
import McHacks from "../public/mchacks.png"
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen max-h-screen flex-col items-center justify-between p-24">
      <div className="text-white z-10 max-w-5xl max-h-screen w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="p-4 text-white fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-slate-900 lg:p-4 lg:dark:bg-zinc-800/30">
          Plan your trips and vacation using the power of&nbsp;AI
        </p>
        <div className="fixed mb-4 bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Image
            src={McHacks}
            alt="McHacks Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </div>
      </div>

      <h1 className="text-white te text-5xl font-bold text-center leading-snug">Path Planner 🚀</h1>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <Link
          href="/planner"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-slate-900 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl text-white font-semibold`}>
            Get Started 🪄{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`text-white m-0 max-w-[50ch] text-sm opacity-50`}>
            Answer a few basic questions and add additional information to plan your vacation, from start to finish
          </p>
        </Link>

        <Link
          href="/about"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-slate-900 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`text-white mb-3 text-2xl font-semibold`}>
            About ❓{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`text-white m-0 max-w-[50ch] text-sm opacity-50`}>
            Learn about how this site was made and the team of developers at McHacks 2024 who brought the code base to life
          </p>
        </Link>
      </div>
    </main>
  );
}
