import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { title: 'Активные дела', value: '24', change: '+3', icon: 'Briefcase', color: 'text-amber-500' },
    { title: 'Клиентов', value: '68', change: '+12', icon: 'Users', color: 'text-blue-500' },
    { title: 'Выручка', value: '₽2.4М', change: '+18%', icon: 'TrendingUp', color: 'text-green-500' },
    { title: 'Заседаний', value: '7', change: 'на неделю', icon: 'Calendar', color: 'text-purple-500' },
  ];

  const cases = [
    { id: 1, name: 'ООО "ТехИнвест" vs Налоговая', client: 'ООО ТехИнвест', status: 'urgent', deadline: '2 дня', progress: 85 },
    { id: 2, name: 'Банкротство "СтройГрупп"', client: 'ООО СтройГрупп', status: 'active', deadline: '14 дней', progress: 60 },
    { id: 3, name: 'Трудовой спор Иванов А.П.', client: 'Иванов Андрей', status: 'active', deadline: '7 дней', progress: 40 },
    { id: 4, name: 'Договор поставки "МегаОпт"', client: 'ИП МегаОпт', status: 'review', deadline: '21 день', progress: 30 },
  ];

  const clients = [
    { id: 1, name: 'ООО ТехИнвест', contact: '+7 (495) 123-45-67', cases: 3, revenue: '₽420К', status: 'active' },
    { id: 2, name: 'ООО СтройГрупп', contact: '+7 (495) 234-56-78', cases: 2, revenue: '₽680К', status: 'active' },
    { id: 3, name: 'Иванов Андрей', contact: '+7 (916) 345-67-89', cases: 1, revenue: '₽120К', status: 'active' },
    { id: 4, name: 'ИП МегаОпт', contact: '+7 (495) 456-78-90', cases: 1, revenue: '₽85К', status: 'pending' },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Заседание по делу ТехИнвест', date: '24 дек, 10:00', type: 'court', urgent: true },
    { id: 2, title: 'Встреча с клиентом СтройГрупп', date: '25 дек, 14:00', type: 'meeting', urgent: false },
    { id: 3, title: 'Подача документов Иванов', date: '26 дек, 12:00', type: 'deadline', urgent: false },
    { id: 4, title: 'Арбитраж МегаОпт', date: '27 дек, 11:00', type: 'court', urgent: false },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'urgent': return 'bg-red-500';
      case 'active': return 'bg-green-500';
      case 'review': return 'bg-yellow-500';
      case 'pending': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'urgent': return 'Срочно';
      case 'active': return 'В работе';
      case 'review': return 'На проверке';
      case 'pending': return 'Ожидает';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <aside className="w-64 min-h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
          <div className="p-6 border-b border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Icon name="Scale" size={24} className="text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">LegalCRM</h1>
                <p className="text-xs text-sidebar-foreground/70">Адвокатская практика</p>
              </div>
            </div>
          </div>

          <nav className="p-4 space-y-2">
            {[
              { id: 'dashboard', label: 'Дашборд', icon: 'LayoutDashboard' },
              { id: 'cases', label: 'Дела', icon: 'Briefcase' },
              { id: 'clients', label: 'Клиенты', icon: 'Users' },
              { id: 'calendar', label: 'Календарь', icon: 'Calendar' },
              { id: 'finance', label: 'Финансы', icon: 'Wallet' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === item.id
                    ? 'bg-sidebar-accent text-accent font-semibold'
                    : 'text-sidebar-foreground/80 hover:bg-sidebar-accent/50'
                }`}
              >
                <Icon name={item.icon} size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="absolute bottom-6 left-4 right-4">
            <Card className="bg-sidebar-accent border-sidebar-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Avatar>
                    <AvatarFallback className="bg-accent text-accent-foreground font-semibold">
                      АП
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm text-sidebar-foreground">Александр Петров</p>
                    <p className="text-xs text-sidebar-foreground/70">Старший партнёр</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </aside>

        <main className="flex-1 p-8">
          {activeTab === 'dashboard' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold text-foreground">Добро пожаловать, Александр</h2>
                  <p className="text-muted-foreground mt-1">У вас 3 важных события на сегодня</p>
                </div>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Новое дело
                </Button>
              </div>

              <div className="grid grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <Card key={stat.title} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </CardTitle>
                      <Icon name={stat.icon} size={20} className={stat.color} />
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                      <p className="text-xs text-green-600 font-medium mt-2">{stat.change}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-6">
                <Card className="col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Активные дела</span>
                      <Button variant="ghost" size="sm">
                        Все дела
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {cases.map((caseItem) => (
                      <div
                        key={caseItem.id}
                        className="p-4 border rounded-lg hover:border-accent transition-colors cursor-pointer"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground mb-1">{caseItem.name}</h4>
                            <p className="text-sm text-muted-foreground">{caseItem.client}</p>
                          </div>
                          <Badge className={`${getStatusColor(caseItem.status)} text-white`}>
                            {getStatusText(caseItem.status)}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Прогресс</span>
                            <span className="font-semibold">{caseItem.progress}%</span>
                          </div>
                          <Progress value={caseItem.progress} className="h-2" />
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Icon name="Clock" size={14} />
                            <span>Осталось {caseItem.deadline}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Предстоящие события</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {upcomingEvents.map((event) => (
                      <div
                        key={event.id}
                        className={`p-3 rounded-lg border ${
                          event.urgent ? 'border-red-200 bg-red-50' : 'border-border'
                        } hover:shadow-md transition-shadow cursor-pointer`}
                      >
                        <div className="flex gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            event.type === 'court' ? 'bg-purple-100 text-purple-600' :
                            event.type === 'meeting' ? 'bg-blue-100 text-blue-600' :
                            'bg-orange-100 text-orange-600'
                          }`}>
                            <Icon 
                              name={event.type === 'court' ? 'Scale' : event.type === 'meeting' ? 'Users' : 'FileText'} 
                              size={20} 
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="font-semibold text-sm text-foreground truncate">
                              {event.title}
                            </h5>
                            <p className="text-xs text-muted-foreground mt-1">{event.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'cases' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">Управление делами</h2>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Новое дело
                </Button>
              </div>

              <div className="grid gap-4">
                {cases.map((caseItem) => (
                  <Card key={caseItem.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold">{caseItem.name}</h3>
                            <Badge className={`${getStatusColor(caseItem.status)} text-white`}>
                              {getStatusText(caseItem.status)}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-4">{caseItem.client}</p>
                          <div className="flex items-center gap-6 text-sm">
                            <div className="flex items-center gap-2">
                              <Icon name="Clock" size={16} className="text-muted-foreground" />
                              <span>Осталось {caseItem.deadline}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Icon name="TrendingUp" size={16} className="text-muted-foreground" />
                              <span>Прогресс {caseItem.progress}%</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Icon name="Eye" size={16} />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Icon name="Edit" size={16} />
                          </Button>
                        </div>
                      </div>
                      <Progress value={caseItem.progress} className="h-2 mt-4" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'clients' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">База клиентов</h2>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Добавить клиента
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {clients.map((client) => (
                  <Card key={client.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-accent text-accent-foreground font-semibold text-lg">
                              {client.name.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-lg">{client.name}</h3>
                            <p className="text-sm text-muted-foreground">{client.contact}</p>
                          </div>
                        </div>
                        <Badge className={`${getStatusColor(client.status)} text-white`}>
                          {client.status === 'active' ? 'Активен' : 'Ожидает'}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                        <div>
                          <p className="text-sm text-muted-foreground">Дел</p>
                          <p className="text-2xl font-bold">{client.cases}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Выручка</p>
                          <p className="text-2xl font-bold">{client.revenue}</p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        <Icon name="Phone" size={16} className="mr-2" />
                        Связаться
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'calendar' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">Календарь заседаний</h2>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Добавить событие
                </Button>
              </div>

              <div className="grid gap-4">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className={`hover:shadow-lg transition-shadow ${
                    event.urgent ? 'border-red-500 border-2' : ''
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                          event.type === 'court' ? 'bg-purple-100 text-purple-600' :
                          event.type === 'meeting' ? 'bg-blue-100 text-blue-600' :
                          'bg-orange-100 text-orange-600'
                        }`}>
                          <Icon 
                            name={event.type === 'court' ? 'Scale' : event.type === 'meeting' ? 'Users' : 'FileText'} 
                            size={28} 
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-lg font-semibold">{event.title}</h3>
                            {event.urgent && (
                              <Badge className="bg-red-500 text-white">Срочно</Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground">{event.date}</p>
                        </div>
                        <Button variant="outline">
                          <Icon name="Bell" size={16} className="mr-2" />
                          Напомнить
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'finance' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">Финансы</h2>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Новый счёт
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Выручка за месяц
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-foreground">₽2.4М</div>
                    <p className="text-sm text-green-600 font-medium mt-2">+18% к прошлому месяцу</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Ожидается оплата
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-foreground">₽680К</div>
                    <p className="text-sm text-muted-foreground mt-2">По 8 счетам</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Средний чек
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-foreground">₽156К</div>
                    <p className="text-sm text-blue-600 font-medium mt-2">+12% к прошлому месяцу</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Последние транзакции</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { client: 'ООО ТехИнвест', amount: '₽420,000', date: '20 дек 2024', status: 'paid' },
                      { client: 'ООО СтройГрупп', amount: '₽680,000', date: '18 дек 2024', status: 'pending' },
                      { client: 'Иванов Андрей', amount: '₽120,000', date: '15 дек 2024', status: 'paid' },
                      { client: 'ИП МегаОпт', amount: '₽85,000', date: '12 дек 2024', status: 'overdue' },
                    ].map((transaction, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarFallback className="bg-accent text-accent-foreground font-semibold">
                              {transaction.client.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{transaction.client}</p>
                            <p className="text-sm text-muted-foreground">{transaction.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <p className="text-xl font-bold">{transaction.amount}</p>
                          <Badge className={
                            transaction.status === 'paid' ? 'bg-green-500 text-white' :
                            transaction.status === 'pending' ? 'bg-yellow-500 text-white' :
                            'bg-red-500 text-white'
                          }>
                            {transaction.status === 'paid' ? 'Оплачено' :
                             transaction.status === 'pending' ? 'Ожидает' : 'Просрочено'}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;
