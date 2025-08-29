import { Link } from "react-router-dom";
import { GithubIcon, InfoIcon } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full bg-muted text-muted-foreground shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / App name */}
        <Link to="/" className="text-xl font-semibold cursor-pointer px-3 py-2 rounded-md hover:bg-primary/70 hover:text-primary-foreground">
          Task Tracker
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-2 text-sm">            
            <li>
              <Link
                to="/about"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary hover:text-primary-foreground transition"
              >
                <InfoIcon className="h-5 w-5" />
                <span>About</span>
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/Talha-Tahir2001/Task-Tracker"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary hover:text-primary-foreground transition"
              >
                <GithubIcon className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
