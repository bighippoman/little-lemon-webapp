import React from 'react';
import { menuCategories } from '../data/menuData';
import '../styles/MenuPage.css';

function MenuPage() {
  return (
    <div className="menu-page">
      <div className="page-header">
        <h1>Our Menu</h1>
        <p>Discover our selection of Mediterranean dishes made with fresh, local ingredients.</p>
      </div>

      {Object.entries(menuCategories).map(([categoryKey, category]) => (
        <section key={categoryKey} className="menu-category">
          <h2 className="category-title">{category.title}</h2>
          <div className="menu-items">
            {category.items.map(item => (
              <article key={item.id} className="menu-item">
                <div className="menu-item-content">
                  <div className="menu-item-header">
                    <h3 className="item-name">{item.name}</h3>
                    <span className="item-price">${item.price}</span>
                  </div>
                  <p className="item-description">{item.description}</p>
                  {item.dietary && item.dietary.length > 0 && (
                    <div className="dietary-tags">
                      {item.dietary.map(diet => (
                        <span key={diet} className={`dietary-tag dietary-tag--${diet}`}>
                          {diet}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default MenuPage;
