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
  category: Categorie;
  onCategoryChange: (category: Categorie) => void;
};
const CategoriesMenu: React.FC<CategoriesMenuProps> = ({
  category: category,
  onCategoryChange,
}) => {
  console.log(category, onCategoryChange);

  return (
    <nav className="menu">
      {Array.from(CATEGORY_ITEMS).map(([key, value]) => {
        return (
          <button
            className={category === key ? 'selected menu-item' : 'menu-item'}
            onClick={() => onCategoryChange(key)}
          >
            <img src={value.icon} alt="home" />
            <small className="menu-text">{value.label}</small>
          </button>
        );
      })}
    </nav>
  );
};

export default CategoriesMenu;
