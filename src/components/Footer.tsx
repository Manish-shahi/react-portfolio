export const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Manish Shahi.
        </p>
        <a
          href="#"
          className="font-display text-xl font-bold text-foreground hover:text-primary transition-colors"
        >
          MS<span className="text-primary">.</span>
        </a>
      </div>
    </footer>
  );
};
