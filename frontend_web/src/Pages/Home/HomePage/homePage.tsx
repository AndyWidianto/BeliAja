import { useEffect, useState } from 'react';
import { Heart, Star } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import type { Product } from '../../../types';
import HomePresenter from './homePresenter';


interface Category {
  id: number;
  name: string;
  icon: string;
}
export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [products, setProducts] = useState<Product[]>([]);

  const presenter = new HomePresenter({
    view: {
      setProducts: setProducts
    }
  });

  const categories: Category[] = [
    { id: 1, name: 'All', icon: '🛍️' },
    { id: 2, name: 'Electronics', icon: '📱' },
    { id: 3, name: 'Fashion', icon: '👕' },
    { id: 4, name: 'Home & Living', icon: '🏠' },
    { id: 5, name: 'Beauty', icon: '💄' },
    { id: 6, name: 'Sports', icon: '⚽' },
    { id: 7, name: 'Books', icon: '📚' },
    { id: 8, name: 'Toys', icon: '🎮' },
  ];


  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  useEffect(() => {
    presenter.getProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Shop by Category</h2>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`p-4 rounded-2xl transition-all duration-300 ${selectedCategory === category.name
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white hover:bg-gray-50 text-gray-700 hover:shadow-md'
                  }`}
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="text-xs font-semibold">{category.name}</div>
              </button>
            ))}
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-3" style={{ width: 'max-content' }}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full whitespace-nowrap transition-all ${selectedCategory === category.name
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  <span className="text-xl">{category.icon}</span>
                  <span className="font-semibold text-sm">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Best Sellers Section */}
        {/* <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Best Sellers</h2>
            <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
              View All →
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {bestSellerProducts.map((product) => (
              <NavLink to={`product/${product.id}`}
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Best Seller
                    </span>
                  </div>
                  <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors opacity-0 group-hover:opacity-100">
                    <Heart size={18} className="text-gray-700" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                    <span className="text-lg font-bold text-blue-600">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div> */}

        {/* All Products Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              All Products
              <span className="text-base font-normal text-gray-500 ml-3">
                ({products.length} products)
              </span>
            </h2>
            <select className="px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium text-gray-700">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating: High to Low</option>
              <option>Newest</option>
            </select>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <NavLink to={`product/${product.id}`}
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.product_variants ? product.product_variants[0].price && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Sale
                        </span>
                      </div>
                    ) : <></>}
                    <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors opacity-0 group-hover:opacity-100">
                      <Heart size={18} className="text-gray-700" />
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
                      {product.category.name}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      {product.product_variants ? product.product_variants[0].price && (
                        <span className="text-xs text-gray-400 line-through">
                          {formatPrice(product.product_variants[0].price)}
                        </span>
                      ) : <></>}
                      <span className="text-lg font-bold text-blue-600">
                        {formatPrice(product.product_variants ? product.product_variants[0].price : 10000)}
                      </span>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>

        {/* Load More Button */}
        {products.length > 0 && (
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all font-semibold">
              Load More Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};