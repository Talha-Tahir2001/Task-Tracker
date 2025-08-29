export const Footer = () => {
  return (
    <footer className="w-full bg-muted text-muted-foreground py-4 mt-8 border-t">
      <div className="max-w-4xl mx-auto px-4 text-center text-sm">
        <p className="mb-2">Made with ❤️ by Talha</p>
        <p className="mb-2">Track your tasks efficiently</p>
        <p>© {new Date().getFullYear()} Task Tracker. All rights reserved.</p>
      </div>
    </footer>
  );
};
