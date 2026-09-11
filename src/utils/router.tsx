import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
});

export const useRouter = () => useContext(RouterContext);

function normalizePath(path: string): string {
  if (!path) return '/';
  // Remove hash if present
  let clean = path.startsWith('#') ? path.slice(1) : path;
  if (!clean.startsWith('/')) {
    clean = '/' + clean;
  }
  // Trim trailing slash unless root
  if (clean.length > 1 && clean.endsWith('/')) {
    clean = clean.slice(0, -1);
  }
  return clean || '/';
}

export const RouterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const getInitialPath = () => {
    if (typeof window === 'undefined') return '/';
    // Check hash first (e.g. #/sectors/construction)
    if (window.location.hash && window.location.hash.length > 1) {
      return normalizePath(window.location.hash);
    }
    return normalizePath(window.location.pathname);
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.hash && window.location.hash.length > 1) {
        setCurrentPath(normalizePath(window.location.hash));
      } else {
        setCurrentPath(normalizePath(window.location.pathname));
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigate = (path: string) => {
    const target = normalizePath(path);
    if (target === currentPath) return;

    try {
      window.history.pushState({}, '', target);
    } catch {
      window.location.hash = target;
    }

    setCurrentPath(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const Link: React.FC<{
  to: string;
  children: ReactNode;
  className?: string;
  id?: string;
  onClick?: () => void;
  title?: string;
}> = ({ to, children, className = '', id, onClick, title }) => {
  const { navigate, currentPath } = useRouter();
  const normalizedTarget = normalizePath(to);
  const isActive = currentPath === normalizedTarget;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's external or anchor hash within same page
    if (to.startsWith('http') || to.startsWith('tel:') || to.startsWith('mailto:') || to.startsWith('wa.me')) {
      return;
    }
    e.preventDefault();
    if (onClick) onClick();
    navigate(to);
  };

  return (
    <a
      id={id}
      href={to}
      onClick={handleClick}
      className={className}
      title={title}
      data-active={isActive ? 'true' : 'false'}
    >
      {children}
    </a>
  );
};
