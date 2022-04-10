// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'Category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'tagged_product',
  
  foreignKey: 'product_id',
  onDelete: 'SET NULL'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'tagged_product',
  foreignKey: 'tag_id',
  onDelete: 'SET NULL'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
