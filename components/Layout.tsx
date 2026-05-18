
import React from 'react';
import { Button } from './UI';
import { User, UserRole } from '../types';
import { useLanguage } from '../LanguageContext';

interface HeaderProps {
  user: User | null;
  onLogout: () => void;
  onLoginClick: () => void;
  onRegisterClick: () => void;
  onDashboardClick: () => void;
  onHomeClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  onLogout,
  onLoginClick,
  onRegisterClick,
  onDashboardClick,
  onHomeClick
}) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="bg-white border-b-4 border-gov-accent shadow-sm sticky top-0 z-40">
      <div className="bg-gov-dark text-white text-xs py-1 px-4 flex justify-between items-center">
        <div className="flex gap-4">
          <span>{t('governmentOfHaryana')}</span>
          <span className="hidden sm:inline">{t('janSamvadPlatform')}</span>
        </div>
        <div className="flex gap-4 items-center">
          <button className="hover:underline" aria-label="Decrease font size">A-</button>
          <button className="hover:underline" aria-label="Reset font size">A</button>
          <button className="hover:underline" aria-label="Increase font size">A+</button>
          <span className="mx-2">|</span>
          <button
            onClick={() => setLanguage('en')}
            className={`hover:underline ${language === 'en' ? 'font-bold' : ''}`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('hi')}
            className={`hover:underline ${language === 'hi' ? 'font-bold' : ''}`}
          >
            HI
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={onHomeClick}>
          <div className="flex flex-col border-l-4 border-gov-accent pl-3">
            <h1 className="text-xl font-bold text-gov-blue leading-tight">{t('haryanGrievancePortal')}</h1>
            <span className="text-xs text-gray-600 font-medium uppercase tracking-wider">{t('janSamvadJanSamadhan')}</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-4">
          <Button variant="ghost" onClick={onHomeClick}>{t('home')}</Button>

          <div className="h-6 w-px bg-gray-300 mx-2"></div>

          {user ? (
            <div className="flex items-center gap-3 ml-2">
              <span className="text-sm font-semibold text-gray-700 hidden lg:inline">{t('hello')}, {user.name}</span>
              <Button variant="primary" size="sm" onClick={onDashboardClick}>{t('dashboard')}</Button>
              <Button variant="outline" size="sm" onClick={onLogout}>{t('logout')}</Button>
            </div>
          ) : (
            <div className="flex items-center gap-2 ml-2">
              <Button variant="outline" size="sm" onClick={onLoginClick}>{t('login')}</Button>
              <Button variant="primary" size="sm" onClick={onRegisterClick}>{t('register')}</Button>
            </div>
          )}
        </nav>

        {/* Mobile Menu Button Placeholder */}
        <div className="md:hidden flex items-center gap-2">
          {user && <span className="text-xs font-semibold text-gray-700 truncate max-w-[80px]">{user.name}</span>}
          <Button variant="ghost" aria-label="Menu" onClick={user ? onDashboardClick : onLoginClick}>
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gov-dark text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="font-bold text-lg mb-3">{t('haryanaGrievancePortalDesc')}</h3>
            <p className="text-sm text-gray-400">{t('officialPublicGrievanceRedressal')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">{t('quickLinks')}</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">{t('aboutHaryanaGovernment')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('privacyPolicy')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('accessibility')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('contactSupport')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">{t('contact')}</h4>
            <p className="text-sm text-gray-400">
              Haryana Civil Secretariat<br />
              Chandigarh - 160001<br />
              {t('helpline')}
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {t('copyrightText')}</p>
          <p className="mt-2 md:mt-0">{t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};
