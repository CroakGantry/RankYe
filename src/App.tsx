import { useMemo, useState } from 'react';
import { Container, Theme } from './settings/types';
import { SongRankingSystem } from './components/generated/SongRankingSystem';
import { RankKanyeHome } from './components/generated/RankKanyeHome';

let theme: Theme = 'dark';
// only use 'centered' container for standalone components, never for full page apps or websites.
let container: Container = 'none';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'ranking'>('home');

  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  const generatedComponent = useMemo(() => {
    if (currentPage === 'home') {
      return <RankKanyeHome onProceed={() => setCurrentPage('ranking')} />;
    }
    return <SongRankingSystem onBack={() => setCurrentPage('home')} />; // %EXPORT_STATEMENT%
  }, [currentPage]);

  if (container === 'centered') {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center">
        {generatedComponent}
      </div>
    );
  } else {
    return generatedComponent;
  }
}

export default App;