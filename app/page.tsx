import styles from "./Card.module.css";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-zinc-50 dark:bg-black font-sans">
      <main className="flex flex-col items-center gap-8">
        <div className={styles.card}>
          <h2 className={styles.title}>Welcome to Your App</h2>
          <p className={styles.description}>
            This is a simple card component styled with Vanilla CSS modules. 
            It's responsive, supports dark mode, and has a subtle hover effect.
          </p>
        </div>
        
        <div className="flex gap-4">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read docs
          </a>
        </div>
      </main>
    </div>
  );
}
