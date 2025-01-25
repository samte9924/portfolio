import { Languages } from "lucide-react";
import ThemeSelector from "./ThemeSelector";

function NavBar() {
  return (
    <nav>
      <button>
        <Languages />
      </button>
      <ThemeSelector />
    </nav>
  );
}

export default NavBar;
