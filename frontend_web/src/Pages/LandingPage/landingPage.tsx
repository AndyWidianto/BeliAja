import React from 'react';
import { Zap, Shield, Globe, Menu, X } from 'lucide-react';
export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  BrandLogo
                </span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Fitur
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Tentang
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Kontak
              </a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Beli Sekarang
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a href="#features" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Fitur
              </a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Tentang
              </a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Kontak
              </a>
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium mt-2">
                Beli Sekarang
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Solusi Digital
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Untuk Masa Depan
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Tingkatkan produktivitas dan efisiensi bisnis Anda dengan platform modern yang dirancang khusus untuk kebutuhan digital Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg hover:scale-105 font-semibold text-lg">
                Show Shop
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="h-3 w-3/4 bg-white/60 rounded"></div>
                    <div className="h-3 w-1/2 bg-white/40 rounded mt-3"></div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="h-3 w-2/3 bg-white/60 rounded"></div>
                    <div className="h-3 w-5/6 bg-white/40 rounded mt-3"></div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="h-3 w-1/2 bg-white/60 rounded"></div>
                    <div className="h-3 w-3/4 bg-white/40 rounded mt-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Fitur Unggulan
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Platform lengkap dengan fitur-fitur canggih untuk mendukung pertumbuhan bisnis Anda
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Zap className="text-blue-600 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Performa Cepat
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Teknologi terdepan yang menghadirkan kecepatan maksimal dan pengalaman pengguna yang mulus tanpa hambatan.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-purple-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                <Shield className="text-purple-600 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Keamanan Terjamin
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Enkripsi end-to-end dan standar keamanan internasional melindungi data Anda dengan maksimal setiap saat.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-green-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
              <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                <Globe className="text-green-600 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Akses Global
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tersedia di seluruh dunia dengan infrastruktur cloud yang powerful dan dukungan multi-bahasa lengkap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Tentang Platform Kami
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Kami adalah platform digital terkemuka yang berdedikasi untuk membantu bisnis bertransformasi dan berkembang di era digital. Dengan pengalaman lebih dari 5 tahun, kami telah melayani ribuan klien di berbagai industri.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Misi kami adalah menyediakan solusi teknologi yang mudah digunakan, efisien, dan terjangkau untuk semua kalangan, dari startup hingga enterprise.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
                  <div className="text-gray-600 font-medium">Pengguna Aktif</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
                  <div className="text-gray-600 font-medium">Kepuasan</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                  <div className="text-gray-600 font-medium">Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Inovasi Berkelanjutan</h4>
                      <p className="text-gray-600 text-sm">Terus berkembang dengan teknologi terbaru</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Fokus Keamanan</h4>
                      <p className="text-gray-600 text-sm">Prioritas utama dalam setiap fitur</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Jangkauan Luas</h4>
                      <p className="text-gray-600 text-sm">Melayani pengguna di seluruh dunia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                BrandLogo
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Platform digital terpercaya untuk transformasi bisnis Anda menuju masa depan yang lebih baik.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Produk</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fitur</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Harga</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Perusahaan</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Karir</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Dukungan</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bantuan</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dokumentasi</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 BrandLogo. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};