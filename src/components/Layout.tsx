import { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'dashboard', label: 'Рабочий стол', path: '/' },
    { id: 'contacts', label: 'Контакты', path: '/contacts' },
    { id: 'calendar', label: 'Календарь', path: '/calendar' },
    { id: 'documents', label: 'Документы', path: '/documents' },
    { id: 'help', label: 'Помощь коллегам', path: '/help' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm">
              КА
            </div>
            <h1 className="text-lg font-semibold text-foreground">Кабинет адвоката</h1>
          </div>
          
          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => navigate(item.path)}
                className={`text-sm ${
                  location.pathname === item.path
                    ? 'text-foreground font-semibold'
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <Icon name="User" size={16} className="text-muted-foreground" />
            </div>
            <span className="text-sm font-medium">Адвокат</span>
          </div>
          <Button variant="ghost" size="icon">
            <Icon name="Settings" size={20} />
          </Button>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
