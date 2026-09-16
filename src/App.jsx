import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ExplorerPage from "./components/ExplorerPage";
import ButtonDetailPage from "./components/ButtonDetailPage";
import InstallationPage from "./components/InstallationPage";
import DocsPage from "./components/DocsPage";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const [selectedButton, setSelectedButton] =
    useState(null);

  const [theme, setTheme] = useState("dark");

  const [searchQuery, setSearchQuery] = useState("");
  
  const [showSplash, setShowSplash] = useState(true);
  
  const navigate = (page) => {
    setCurrentPage(page);

    if (page !== "explorer") {
      setSelectedButton(null);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSelectButton = (button) => {
    setSelectedButton(button);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleToggleTheme = () => {
    setTheme((prev) => {
      const next =
        prev === "dark"
          ? "light"
          : "dark";

      document.documentElement.classList.toggle(
        "light",
        next === "light"
      );

      return next;
    });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const renderPage = () => {

    if (selectedButton) {
      return (
        <ButtonDetailPage
          button={selectedButton}
          onBack={() => {
            setSelectedButton(null);
            setCurrentPage("explorer");
          }}
          onSelect={handleSelectButton}
        />
      );
    }

    switch (currentPage) {
      case "home":
        return (
          <HomePage
            onNavigate={navigate}
          />
        );

      case "explorer":
        return (
          <ExplorerPage
            initialSearch={searchQuery}
            onSelectButton={handleSelectButton}
          />
        );

      case "installation":
        return <InstallationPage />;

      case "docs":
        return (
          <DocsPage
            onNavigate={navigate}
          />
        );

      default:
        return (
          <HomePage
            onNavigate={navigate}
          />
        );
    }
  };

const showFooter =
  !selectedButton &&
  currentPage !== "docs";

return (
  <>
    {showSplash && (
      <SplashScreen
        onComplete={() => {
          setShowSplash(false);
        }}
      />
    )}

    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "var(--bg-base)",
        color: "var(--text-primary)",
      }}
    >
      <Navbar
        currentPage={currentPage}
        onNavigate={navigate}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onSearch={handleSearch}
      />

      <main className="flex-1">
        {renderPage()}
      </main>

      {showFooter && (
        <Footer
          onNavigate={navigate}
        />
      )}
    </div>
  </>
);
}