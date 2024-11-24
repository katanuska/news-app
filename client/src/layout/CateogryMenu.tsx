import './CategoryMenu.scss';

export type Categorie =
  | 'home'
  | 'favorites'
  | 'general'
  | 'business'
  | 'health'
  | 'science'
  | 'sports'
  | 'technology';

//TODO: bolja ikona za favorites
const CATEGORY_ITEMS: Map<Categorie, { icon: string; label: string }> = new Map(
  [
    [
      'home',
      {
        icon: '/Home.svg',
        label: 'Home',
      },
    ],
    [
      'favorites',
      {
        icon: '/Favorites.svg',
        label: 'Favorites',
      },
    ],
    [
      'general',
      {
        icon: '/General.svg',
        label: 'General',
      },
    ],
    [
      'business',
      {
        icon: '/Business.svg',
        label: 'Business',
      },
    ],
    [
      'health',
      {
        icon: '/Health.svg',
        label: 'Health',
      },
    ],
    [
      'science',
      {
        icon: '/Science.svg',
        label: 'Science',
      },
    ],
    [
      'sports',
      {
        icon: '/Sports.svg',
        label: 'Sports',
      },
    ],
    [
      'technology',
      {
        icon: '/Technology.svg',
        label: 'Technology',
      },
    ],
  ]
);

type CategoriesMenuProps = {
  selectedCategory: Categorie;
  onCategoryChange: (category: Categorie) => void;
};
const CategoriesMenu: React.FC<CategoriesMenuProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  console.log(selectedCategory, onCategoryChange);

  return (
    <nav className="menu">
      {Array.from(CATEGORY_ITEMS).map(([key, value]) => {
        return (
          <button className="menu-item" onClick={() => onCategoryChange(key)}>
            <img
              src={value.icon}
              alt="home"
              className={selectedCategory === key ? 'selected' : ''}
            />
            <div className="menu-text">{value.label}</div>
          </button>
        );
      })}
    </nav>
  );
};

export default CategoriesMenu;
