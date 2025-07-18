import { ThemeToggle } from '@/shared/components/ThemeToggle';

export default function Home() {
  return (
    <div className="grid min-h-dvh place-content-center">
      <main className="mx-auto max-w-md rounded-lg border p-4 shadow-md">
        <div>Hello from Demo Front-end Template</div>
        <ThemeToggle />
      </main>
    </div>
  );
}
