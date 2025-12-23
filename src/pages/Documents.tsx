import { useState } from 'react';
import Layout from '@/components/Layout';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';

interface DocumentTemplate {
  id: string;
  name: string;
}

interface Subcategory {
  name: string;
  documents: DocumentTemplate[];
}

interface Category {
  name: string;
  subcategories: Subcategory[];
}

const Documents = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});
  const [openSubcategories, setOpenSubcategories] = useState<Record<string, boolean>>({});

  const categories: Category[] = [
    {
      name: 'Гражданские дела',
      subcategories: [
        {
          name: 'Имущественные',
          documents: [
            { id: '1', name: 'Иск о взыскании долга по договору займа (общая юрисдикция)' },
            { id: '2', name: 'Иск о взыскании долга по договору займа (арбитражный суд)' },
            { id: '3', name: 'Иск о взыскании задолженности по договору кредита' },
            { id: '4', name: 'Иск о взыскании неустойки по договору подряда' },
            { id: '5', name: 'Иск о взыскании задолженности по договору поставки' },
          ],
        },
        {
          name: 'Семейные',
          documents: [
            { id: '6', name: 'Исковое заявление о расторжении брака' },
            { id: '7', name: 'Исковое заявление о взыскании алиментов на несовершеннолетних детей' },
            { id: '8', name: 'Исковое заявление о разделе совместно нажитого имущества' },
            { id: '9', name: 'Исковое заявление об определении места жительства ребенка' },
          ],
        },
        {
          name: 'Особое производство',
          documents: [
            { id: '10', name: 'Заявление об установлении факта родственных отношений' },
            { id: '11', name: 'Заявление об установлении факта принятия наследства' },
            { id: '12', name: 'Заявление об усыновлении ребенка' },
            { id: '13', name: 'Заявление о признании гражданина безвестно отсутствующим' },
            { id: '14', name: 'Заявление об объявлении гражданина умершим' },
          ],
        },
      ],
    },
    {
      name: 'Административные дела',
      subcategories: [
        {
          name: 'Налоговые',
          documents: [
            { id: '15', name: 'Заявление об оспаривании решения налогового органа' },
            { id: '16', name: 'Заявление о признании недействительным решения о привлечении к ответственности' },
            { id: '17', name: 'Иск о взыскании налогов и пени' },
            { id: '18', name: 'Иск о взыскании страховых взносов' },
          ],
        },
        {
          name: 'Исполнительное производство',
          documents: [
            { id: '19', name: 'Заявление об оспаривании действий судебного пристава-исполнителя' },
            { id: '20', name: 'Заявление об оспаривании бездействия судебного пристава' },
            { id: '21', name: 'Заявление об оспаривании постановления о возбуждении ИП' },
            { id: '22', name: 'Жалоба на постановление об окончании исполнительного производства' },
          ],
        },
      ],
    },
    {
      name: 'Уголовные дела',
      subcategories: [
        {
          name: 'Преступления против личности',
          documents: [
            { id: '23', name: 'Жалоба на постановление об отказе в возбуждении уголовного дела (убийство)' },
            { id: '24', name: 'Ходатайство о прекращении уголовного дела по ст. 131 УК РФ' },
            { id: '25', name: 'Исковое заявление о защите чести и достоинства (клевета)' },
            { id: '26', name: 'Заявление о преступлении против жизни и здоровья' },
          ],
        },
        {
          name: 'Преступления против собственности',
          documents: [
            { id: '27', name: 'Заявление о краже имущества' },
            { id: '28', name: 'Заявление о мошенничестве' },
            { id: '29', name: 'Ходатайство о прекращении дела по ст. 161 УК РФ (грабеж)' },
            { id: '30', name: 'Жалоба на постановление об отказе в возбуждении УД (разбой)' },
          ],
        },
      ],
    },
    {
      name: 'Банкротство',
      subcategories: [
        {
          name: 'Основные процедуры',
          documents: [
            { id: '31', name: 'Заявление о признании должника банкротом' },
            { id: '32', name: 'Заявление о признании гражданина банкротом' },
            { id: '33', name: 'Возражения на заявление о признании банкротом' },
          ],
        },
        {
          name: 'Обособленные споры',
          documents: [
            { id: '34', name: 'Заявление о включении требований в реестр' },
            { id: '35', name: 'Заявление об оспаривании сделки должника' },
            { id: '36', name: 'Заявление о привлечении к субсидиарной ответственности' },
            { id: '37', name: 'Возражения на заявление о привлечении к субсидиарной ответственности' },
          ],
        },
      ],
    },
    {
      name: 'Административные правонарушения',
      subcategories: [
        {
          name: 'Правонарушения в области дорожного движения',
          documents: [
            { id: '38', name: 'Жалоба на постановление по делу об АП (управление в состоянии опьянения)' },
            { id: '39', name: 'Жалоба на постановление (передача управления лицу в состоянии опьянения)' },
            { id: '40', name: 'Возражения на протокол об административном правонарушении' },
          ],
        },
        {
          name: 'Правонарушения в области финансов и налогов',
          documents: [
            { id: '41', name: 'Жалоба на постановление (нарушение сроков представления декларации)' },
            { id: '42', name: 'Жалоба на постановление (непредставление сведений для налогового контроля)' },
            { id: '43', name: 'Ходатайство о прекращении производства по делу об АП' },
          ],
        },
      ],
    },
    {
      name: 'Конституционные дела',
      subcategories: [
        {
          name: 'Жалобы в Конституционный Суд',
          documents: [
            { id: '44', name: 'Жалоба на нарушение конституционных прав актом, примененным в деле' },
            { id: '45', name: 'Жалоба на нарушение конституционных прав законом субъекта РФ' },
          ],
        },
      ],
    },
  ];

  const toggleCategory = (categoryName: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const toggleSubcategory = (key: string) => {
    setOpenSubcategories((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const filteredCategories = categories.map((category) => ({
    ...category,
    subcategories: category.subcategories
      .map((sub) => ({
        ...sub,
        documents: sub.documents.filter((doc) =>
          doc.name.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }))
      .filter((sub) => sub.documents.length > 0),
  })).filter((category) => category.subcategories.length > 0);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-6">Документы</h1>
          
          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Поиск по названию..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          {filteredCategories.map((category) => (
            <Collapsible
              key={category.name}
              open={openCategories[category.name]}
              onOpenChange={() => toggleCategory(category.name)}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start px-4 py-3 h-auto font-semibold text-base hover:bg-muted"
                >
                  <Icon
                    name="ChevronRight"
                    size={20}
                    className={`mr-2 transition-transform ${
                      openCategories[category.name] ? 'rotate-90' : ''
                    }`}
                  />
                  {category.name}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-6">
                <div className="space-y-2 mt-2">
                  {category.subcategories.map((subcategory) => {
                    const subKey = `${category.name}-${subcategory.name}`;
                    return (
                      <Collapsible
                        key={subKey}
                        open={openSubcategories[subKey]}
                        onOpenChange={() => toggleSubcategory(subKey)}
                      >
                        <CollapsibleTrigger asChild>
                          <Button
                            variant="ghost"
                            className="w-full justify-start px-4 py-2 h-auto font-medium text-sm hover:bg-muted"
                          >
                            <Icon
                              name="ChevronRight"
                              size={16}
                              className={`mr-2 transition-transform ${
                                openSubcategories[subKey] ? 'rotate-90' : ''
                              }`}
                            />
                            {subcategory.name}
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="pl-6">
                          <div className="space-y-1 mt-1">
                            {subcategory.documents.map((doc) => (
                              <button
                                key={doc.id}
                                className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors flex items-center gap-2"
                              >
                                <Icon name="FileText" size={16} className="text-muted-foreground" />
                                {doc.name}
                              </button>
                            ))}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    );
                  })}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <Icon name="FileSearch" size={48} className="text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Документы не найдены</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Documents;
