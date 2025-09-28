export function Footer({ name }: { name: string }) {
  return (
    <footer className="border-t pt-6 text-center text-xs text-foreground/60">
      © {new Date().getFullYear()} {name}
    </footer>
  );
}
