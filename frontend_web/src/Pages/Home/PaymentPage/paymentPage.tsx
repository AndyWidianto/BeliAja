import React, { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingCart, CreditCard, Package, MapPin, Receipt } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  qty: number;
}

interface ShippingAddress {
  name: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
}

interface Transaction {
  id: number;
  date: string;
  total: number;
  products: Product[];
  paymentMethod: string;
  courier: string;
}

type PaymentMethod = 'credit' | 'bank' | 'ewallet' | 'cod';
type Courier = 'JNE' | 'TIKI' | 'POS' | 'GoSend' | 'GrabExpress';

export default function PaymentPage() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Laptop ASUS ROG', price: 15000000, qty: 1 },
    { id: 2, name: 'Mouse Logitech MX Master', price: 1200000, qty: 2 },
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', price: '', qty: '' });
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('credit');
  const [courier, setCourier] = useState<Courier>('JNE');
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    name: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
  });
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const courierCosts: Record<Courier, number> = {
    JNE: 25000,
    TIKI: 23000,
    POS: 20000,
    GoSend: 30000,
    GrabExpress: 28000,
  };

  const updateQty = (id: number, change: number) => {
    setProducts(products.map(p => {
      if (p.id === id) {
        const newQty = Math.max(1, p.qty + change);
        return { ...p, qty: newQty };
      }
      return p;
    }));
  };

  const removeProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const addProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (newProduct.name && newProduct.price && newProduct.qty) {
      const product: Product = {
        id: Date.now(),
        name: newProduct.name,
        price: parseFloat(newProduct.price),
        qty: parseInt(newProduct.qty),
      };
      setProducts([...products, product]);
      setNewProduct({ name: '', price: '', qty: '' });
    }
  };

  const subtotal = products.reduce((sum, p) => sum + p.price * p.qty, 0);
  const shippingCost = courierCosts[courier];
  const total = subtotal + shippingCost;

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handleConfirmPayment = () => {
    if (products.length === 0) {
      alert('Keranjang belanja kosong!');
      return;
    }
    if (!shippingAddress.name || !shippingAddress.phone || !shippingAddress.address) {
      alert('Mohon lengkapi alamat pengiriman!');
      return;
    }

    const transaction: Transaction = {
      id: Date.now(),
      date: new Date().toLocaleString('id-ID'),
      total,
      products: [...products],
      paymentMethod: getPaymentMethodName(paymentMethod),
      courier,
    };

    setTransactions([transaction, ...transactions]);
    setProducts([]);
    setShippingAddress({ name: '', phone: '', address: '', city: '', postalCode: '' });
    alert('Pembayaran berhasil dikonfirmasi!');
  };

  const getPaymentMethodName = (method: PaymentMethod) => {
    const names = {
      credit: 'Credit Card',
      bank: 'Bank Transfer',
      ewallet: 'E-Wallet',
      cod: 'Cash on Delivery',
    };
    return names[method];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Checkout</h1>
          <p className="text-gray-600">Selesaikan pembayaran Anda dengan mudah dan aman</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product List */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <ShoppingCart className="text-indigo-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Keranjang Belanja</h2>
              </div>

              {products.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Keranjang kosong</p>
              ) : (
                <div className="space-y-3">
                  {products.map(product => (
                    <div key={product.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{product.name}</h3>
                        <p className="text-sm text-gray-600">{formatRupiah(product.price)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQty(product.id, -1)}
                          className="p-1 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-semibold">{product.qty}</span>
                        <button
                          onClick={() => updateQty(product.id, 1)}
                          className="p-1 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <div className="text-right min-w-[120px]">
                        <p className="font-bold text-indigo-600">{formatRupiah(product.price * product.qty)}</p>
                      </div>
                      <button
                        onClick={() => removeProduct(product.id)}
                        className="p-2 rounded-lg bg-red-100 hover:bg-red-200 text-red-600 transition"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <button className="mt-3 w-full p-2 rounded-md bg-blue-600 text-gray-100">Add Product</button>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="text-indigo-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Metode Pembayaran</h2>
              </div>
              <div className="flex items-center p-2 gap-3">
                <img src="https://i.pinimg.com/originals/f5/8c/a3/f58ca3528b238877e9855fcac1daa328.jpg" alt="" className="w-10 h-10 rounded-full" />
                <div className="w-full">
                  <h2 className="text-black">E-Wallet</h2>
                  <div className="text-gray-400">Dana</div>
                </div>
                <button className="p-2 text-orange-600">Ganti</button>
              </div>
            </div>

            {/* Courier Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Package className="text-indigo-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Kurir Pengiriman</h2>
              </div>
              <div className="flex flex-col gap-3">
                <select
                  value={courier}
                  onChange={e => setCourier(e.target.value as Courier)}
                  className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-800 font-medium"
                >
                  {Object.keys(courierCosts).map(c => (
                    <option key={c} value={c}>
                      {c} - {formatRupiah(courierCosts[c as Courier])}
                    </option>
                  ))}
                </select>
                <div className="bg-indigo-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-600">Estimasi Biaya Kirim</p>
                  <p className="text-2xl font-bold text-indigo-600">{formatRupiah(shippingCost)}</p>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="text-indigo-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Alamat Pengiriman</h2>
              </div>
              <label>
                <div className="flex items-center gap-2">
                  <input type="radio" name="address" id="" />
                  <div className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellat officiis sapiente impedit veritatis iure maxime aliquam numquam dolores minima ut adipisci minus, natus non nulla quibusdam perspiciatis! Ratione, facere!
                  </div>
                </div>
              </label>
              <label>
                <div className="flex items-center gap-2">
                  <input type="radio" name="address" id="" />
                  <div className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellat officiis sapiente impedit veritatis iure maxime aliquam numquam dolores minima ut adipisci minus, natus non nulla quibusdam perspiciatis! Ratione, facere!
                  </div>
                </div>
              </label>
              <label>
                <div className="flex items-center gap-2">
                  <input type="radio" name="address" id="" />
                  <div className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellat officiis sapiente impedit veritatis iure maxime aliquam numquam dolores minima ut adipisci minus, natus non nulla quibusdam perspiciatis! Ratione, facere!
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Payment Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
              <div className="flex items-center gap-2 mb-4">
                <Receipt className="text-indigo-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Ringkasan</h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold">{formatRupiah(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Biaya Kirim</span>
                  <span className="font-semibold">{formatRupiah(shippingCost)}</span>
                </div>
                <div className="border-t-2 border-gray-200 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-800">Total</span>
                    <span className="text-2xl font-bold text-indigo-600">{formatRupiah(total)}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleConfirmPayment}
                className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition font-bold text-lg shadow-lg"
              >
                Konfirmasi & Bayar
              </button>
            </div>

            {/* Transaction History */}
            {transactions.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Riwayat Pembayaran</h2>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {transactions.map(transaction => (
                    <div key={transaction.id} className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs text-gray-600">{transaction.date}</span>
                        <span className="text-sm font-bold text-green-600">{formatRupiah(transaction.total)}</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        {transaction.products.length} produk via {transaction.courier}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">{transaction.paymentMethod}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};