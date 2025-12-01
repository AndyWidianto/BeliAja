import { Heart, Star } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import type { Product, VariantProduct } from '../../../types';

export default function DetailProductPage() {
  const navigate = useNavigate();
  const product: Product = {
    id: "1234",
    name: 'Stylish T-Shirt',
    product_variants: [
      {
        id: "123",
        variant_name: "Earphone123",
        sku: "1234",
        price: 10000000,
        stock: 12,
        discount: {
          id: "12345",
          type: "percent",
          value: 10
        }
      },
      {
        id: "1234",
        variant_name: "Earphone12",
        sku: "1234",
        price: 120000000,
        discount: {
          id: "12345",
          type: "percent",
          value: 10
        },
        stock: 12,
      },
      {
        id: "12345",
        variant_name: "Earphone16",
        sku: "1234",
        price: 100000,
        stock: 12,
      },
      {
        id: "12346",
        variant_name: "Earphone11",
        sku: "1234",
        price: 12200000,
        stock: 12,
      }
    ],
    rating: 4.5,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore officiis exercitationem recusandae blanditiis consectetur obcaecati minus vitae aut fugiat ipsa suscipit explicabo iusto corrupti, veritatis qui dignissimos ipsam odio amet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore officiis exercitationem recusandae blanditiis consectetur obcaecati minus vitae aut fugiat ipsa suscipit explicabo iusto corrupti, veritatis qui dignissimos ipsam odio amet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore officiis exercitationem recusandae blanditiis consectetur obcaecati minus vitae aut fugiat ipsa suscipit explicabo iusto corrupti, veritatis qui dignissimos ipsam odio amet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore officiis exercitationem recusandae blanditiis consectetur obcaecati minus vitae aut fugiat ipsa suscipit explicabo iusto corrupti, veritatis qui dignissimos ipsam odio amet?",
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop', // Placeholder image
    reviews: 1250,
    category: {
      id: "1332",
      name: "Electronic",
      description: ""
    },
  };

  const products: Product[] = [
    {
      id: "12344",
      name: 'Wireless Headphones Pro',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 1250,
      product_variants: [
        {
          id: "1234",
          variant_name: "Earphone11",
          sku: "1234",
          price: 121,
          stock: 12,
          discount: {
            id: "12345",
            type: "percent",
            value: 10
          },
        }
      ],
      category: { id: "1222", name: 'Electronics', description: "" },
      description: 'A comfortable and stylish t-shirt made from high-quality cotton. Perfect for everyday wear.',
    },
    {
      id: "12344",
      name: 'Smart Watch Series 5',
      product_variants: [
        {
          id: "123",
          variant_name: "Smart Watch Series12",
          sku: "1234",
          price: 1200,
          stock: 122,
          discount: {
            id: "12345",
            type: "percent",
            value: 10
          },
        },
      ],
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 890,
      category: { id: "1222", name: 'Electronics', description: "" },
      description: 'A comfortable and stylish t-shirt made from high-quality cotton. Perfect for everyday wear.',
    },
    {
      id: "12344",
      name: 'Premium Sneakers',
      product_variants: [
        {
          id: "123",
          variant_name: "Smart Watch Series12",
          sku: "1234",
          price: 1200,
          stock: 122
        }
      ],
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 2100,
      category: { id: "1222", name: 'Fashion', description: "" },
      description: 'A comfortable and stylish t-shirt made from high-quality cotton. Perfect for everyday wear.',
    },
    {
      id: "12344",
      name: 'Minimalist Backpack',
      product_variants: [
        {
          id: "123",
          variant_name: "Smart Watch Series12",
          sku: "1234",
          price: 1200,
          stock: 122
        }
      ],
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 567,
      category: { id: "1222", name: 'Fashion', description: "" },
      description: 'A comfortable and stylish t-shirt made from high-quality cotton. Perfect for everyday wear.',
    },
    {
      id: "12344",
      name: 'Portable Bluetooth Speaker',
      product_variants: [
        {
          id: "123",
          variant_name: "Smart Watch Series12",
          sku: "1234",
          price: 1200,
          stock: 122
        }
      ],
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
      rating: 4.5,
      reviews: 890,
      category: { id: "1222", name: 'Electronics', description: "" },
      description: 'A comfortable and stylish t-shirt made from high-quality cotton. Perfect for everyday wear.',
    },
    {
      id: "12344",
      name: 'Cotton T-Shirt Premium',
      product_variants: [
        {
          id: "123",
          variant_name: "Smart Watch Series12",
          sku: "1234",
          price: 1200,
          stock: 122
        }
      ],
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      rating: 4.4,
      reviews: 1200,
      category: { id: "1222", name: 'Fashion', description: "" },
      description: 'A comfortable and stylish t-shirt made from high-quality cotton. Perfect for everyday wear.',
    },
    {
      id: "12344",
      name: 'Modern Table Lamp',
      product_variants: [
        {
          id: "123",
          variant_name: "Smart Watch Series12",
          sku: "1234",
          price: 1200,
          stock: 122
        }
      ],
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 345,
      category: { id: "1222", name: 'Home & Living', description: "" },
      description: 'A comfortable and stylish t-shirt made from high-quality cotton. Perfect for everyday wear.',
    },
    {
      id: "12344",
      name: 'Organic Skincare Set',
      product_variants: [
        {
          id: "123",
          variant_name: "Smart Watch Series12",
          sku: "1234",
          price: 1200,
          stock: 122
        }
      ],
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 678,
      category: { id: "1222", name: 'Beauty', description: "" },
      description: 'A comfortable and stylish t-shirt made from high-quality cotton. Perfect for everyday wear.',
    },
    {
      id: "12344",
      name: 'Yoga Mat Premium',
      product_variants: [
        {
          id: "123",
          variant_name: "Smart Watch Series12",
          sku: "1234",
          price: 1200,
          stock: 122
        }
      ],
      image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 456,
      category: { id: "1222", name: 'Sports', description: "" },
      description: 'A comfortable and stylish t-shirt made from high-quality cotton. Perfect for everyday wear.',
    },
    {
      id: "12344",
      name: 'Ceramic Coffee Mug Set',
      product_variants: [
        {
          id: "123",
          variant_name: "Smart Watch Series12",
          sku: "1234",
          price: 1200,
          stock: 122
        }
      ],
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop',
      rating: 4.5,
      reviews: 234,
      category: { id: "1222", name: 'Home & Living', description: "" },
      description: 'A comfortable and stylish t-shirt made from high-quality cotton. Perfect for everyday wear.',
    },
    {
      id: "12344",
      name: 'Wireless Mouse Ergonomic',
      product_variants: [
        {
          id: "123",
          variant_name: "Smart Watch Series12",
          sku: "1234",
          price: 1200,
          stock: 122
        }
      ],
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 890,
      category: { id: "1222", name: 'Electronics', description: "" },
      description: 'A comfortable and stylish t-shirt made from high-quality cotton. Perfect for everyday wear.',
    },
    {
      id: "12344",
      name: 'Canvas Tote Bag',
      product_variants: [
        {
          id: "123",
          variant_name: "Smart Watch Series12",
          sku: "1234",
          price: 1200,
          stock: 122
        }
      ],
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop',
      rating: 4.4,
      reviews: 567,
      category: { id: "1222", name: 'Fashion', description: "" },
      description: 'A comfortable and stylish t-shirt made from high-quality cotton. Perfect for everyday wear.',
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };
  const sizes = ['S', 'M', 'L', 'XL'];
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [selectVariantProduct, setSelectVariantProduct] = useState<string | null>(null);

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    setErrorMessage('');
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setErrorMessage('Please select a size before adding to cart.');
      return;
    }
    alert(`Added ${product.name} (Size: ${selectedSize}) to cart!`);
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      setErrorMessage('Please select a size before proceeding to buy.');
      return;
    }
    navigate("/payment", { replace: true });
    alert(`Proceeding to buy ${product.name} (Size: ${selectedSize})!`);
  };

  const handleSelectVariantProduct = (id: string) => {
    setSelectVariantProduct(id);
  }
  const handlePriceDiscont = (price: number, discount: number, type: string) => {
    if (type === "percent") {
      const priceAfterDiscount: number = price - (discount / 100 * price);
      return formatPrice(priceAfterDiscount);
    }
    return formatPrice(price - discount);
  }
  const handlePriceProductVariant = (productVariants?: VariantProduct[]) => {
    if (!productVariants) return;
    let productVariant: VariantProduct | undefined = productVariants.find(pvs => pvs.id === selectVariantProduct);
    productVariant = productVariant ? productVariant : productVariants[0];
    if (productVariant.discount) {
      return (
        <div className="flex gap-5">
          <span className="text-gray-400 line-through">
            {formatPrice(productVariant.price)}
          </span>
          <span>
            {handlePriceDiscont(productVariant.price, productVariant.discount?.value, productVariant.discount?.type)}
          </span>
        </div>
      )
    }
    return formatPrice(productVariant.price);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Product Detail Section */}
        <div className="bg-white rounded-lg shadow-md p-6 md:flex md:space-x-8">
          {/* Product Image */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="flex text-2xl font-semibold text-green-600 mb-4">{handlePriceProductVariant(product.product_variants)}</p>
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-lg">
                  {'★'.repeat(Math.floor(product.rating ? product.rating : 5))}{'☆'.repeat(5 - Math.floor(product.rating ? product.rating : 5))}
                </span>
                <span className="ml-2 text-gray-600">({product.rating})</span>
              </div>
              <p className="text-gray-700 mb-6">{product.description}</p>

              {/* product */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Pilih Product</h3>
                <div className="flex flex-wrap gap-3">
                  {product.product_variants?.map(val => (
                    <button onClick={() => handleSelectVariantProduct(val.id)} className={`p-2 px-4 rounded-md border-1 border-gray-200 ${selectVariantProduct && selectVariantProduct === val.id ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}>
                      {val.variant_name}
                    </button>
                  ))}
                </div>
              </div>
              {/* Size Selector */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select Size</h3>
                <div className="flex space-x-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(size)}
                      className={`px-4 py-2 border rounded-md transition-colors ${selectedSize === size
                        ? 'bg-blue-500 text-white border-blue-500'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Error Message */}
              {errorMessage && (
                <p className="text-red-500 mb-4">{errorMessage}</p>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-gray-800 text-white py-3 px-6 rounded-md hover:bg-gray-700 transition-colors"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className={`flex-1 py-3 px-6 rounded-md transition-colors ${selectVariantProduct ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-200 text-gray-600'}`}
                  disabled={selectVariantProduct ? false : true}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* All Products Section */}
        <div className="pt-3">
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
                <NavLink to={`/product/${product.id}`}
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
                      {product.category?.name}
                    </div>
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
      </div>
    </div>
  );
};
