import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../LanguageContext';
import './PWAInstaller.css';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const PWAInstaller: React.FC = () => {
  const { t } = useLanguage();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isInWebAppiOS = (window.navigator as any).standalone === true;
    setIsInstalled(isStandalone || isInWebAppiOS);

    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }

    // Clear the deferredPrompt so it can only be used once
    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  // Don't show anything if app is already installed
  if (isInstalled) return null;

  // Don't show if not installable
  if (!isInstallable || !deferredPrompt) return null;

  return (
    <div className="pwa-installer">
      <div className="pwa-installer-content">
        <div className="pwa-installer-icon">📱</div>
        <div className="pwa-installer-text">
          <h4>{t.pwa.title}</h4>
          <p>{t.pwa.description}</p>
        </div>
        <div className="pwa-installer-actions">
          <button 
            className="install-button"
            onClick={handleInstallClick}
          >
            {t.pwa.install}
          </button>
          <button 
            className="dismiss-button"
            onClick={() => setIsInstallable(false)}
          >
            {t.pwa.dismiss}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstaller;
