import 'dart:convert';

import 'package:BeliAja/presentation/reviews/review_product.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:shared_preferences/shared_preferences.dart';

class DetailProductPage extends StatefulWidget {
  const DetailProductPage({super.key});

  @override
  State<DetailProductPage> createState() => _DetailProductPage();
}

class _DetailProductPage extends State<DetailProductPage> {
  final List<String> images = [
    "https://www.usnews.com/object/image/00000196-6390-d12c-a7b7-ebf1e11c0000/new-main-image-monument-valley-credit-getty-images.jpg"
        "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg",
    "https://www.usnews.com/object/image/00000166-4034-dc8c-a576-69ff3f110000/25-jackson-hole-getty.jpg",
    "https://www.usnews.com/object/image/00000162-f3a3-d0d5-a57f-fbf3a0150000/18-milford-sound-fjords-national-park.jpg",
  ];

  bool show = false;

  final Map<String, dynamic> product = {
    "id": 1,
    "title": "Hanphone Iphone 16 Pro Max",
    "short_description": true,
    "description": """
Teknologi adalah hasil dari perkembangan ilmu pengetahuan yang diwujudkan dalam bentuk alat, sistem, maupun metode untuk mempermudah aktivitas manusia. Perkembangannya meliputi berbagai bidang, mulai dari komunikasi, transportasi, kesehatan, hingga pendidikan. Melalui teknologi, manusia dapat menyelesaikan pekerjaan lebih cepat, akurat, dan efisien, sekaligus membuka peluang baru dalam inovasi dan kreativitas. Contoh penerapannya bisa kita lihat pada smartphone, internet, dan kecerdasan buatan yang kini sudah menjadi bagian penting dalam kehidupan sehari-hari.
Di sisi lain, teknologi juga menjadi pendorong utama transformasi sosial dan ekonomi. Munculnya platform digital dan sistem otomatisasi mengubah cara manusia bekerja, belajar, bahkan berinteraksi. Revolusi industri 4.0, misalnya, memperlihatkan bagaimana integrasi teknologi seperti IoT, big data, dan machine learning mampu meningkatkan produktivitas sekaligus menciptakan tantangan baru, seperti kebutuhan keterampilan digital dan isu keamanan data. Dengan demikian, teknologi bukan hanya sekadar alat, melainkan kekuatan besar yang membentuk arah perkembangan peradaban manusia.""",
  };

  final List<dynamic> products = [
    {
      "id": 1,
      "image": "assets/images/go_shopping.png",
      "title": "Handpone Iphone Pro Max 16",
      "type": "blue | black | gray",
      "cost": "10.000",
    },
    {
      "id": 2,
      "image": "assets/images/go_shopping.png",
      "title": "Handpone Iphone Pro Max 16",
      "type": "blue | black | gray",
      "cost": "10.000",
    },
    {
      "id": 3,
      "image": "assets/images/go_shopping.png",
      "title": "Handpone Iphone Pro Max 16",
      "type": "blue | black | gray",
      "cost": "10.000",
    },
    {
      "id": 4,
      "image": "assets/images/go_shopping.png",
      "title": "Handpone Iphone Pro Max 16",
      "type": "blue | black | gray",
      "cost": "10.000",
    },
    {
      "id": 5,
      "image": "assets/images/go_shopping.png",
      "title": "Handpone Iphone Pro Max 16",
      "type": "blue | black | gray",
      "cost": "10.000",
    },
    {
      "id": 7,
      "image": "assets/images/go_shopping.png",
      "title": "Handpone Iphone Pro Max 16",
      "type": "blue | black | gray",
      "cost": "10.000",
    },
    {
      "id": 8,
      "image": "assets/images/go_shopping.png",
      "title": "Handpone Iphone Pro Max 16",
      "type": "blue | black | gray",
      "cost": "10.000",
    },
    {
      "id": 9,
      "image": "assets/images/go_shopping.png",
      "title": "Handpone Iphone Pro Max 16",
      "type": "blue | black | gray",
      "cost": "10.000",
    },
  ];

  Future<void> saveProduct(Map<String, dynamic> product) async {
    final shared = await SharedPreferences.getInstance();
    final cart = shared.getString("cart") ?? "";
    print(cart);
    if (cart != "" || cart.isEmpty) {
      final carts = [product];
      shared.setString("cart", jsonEncode(carts));
      return;
    }
    final List<dynamic> carts = jsonDecode(cart);
    carts.add(product);
    shared.setString("cart", jsonEncode(carts));
  }

  shortDescription(String text, bool short) {
    if (short) {
      return "${text.substring(0, 250)}...";
    }
    return text;
  }

  setShortDescription(bool short) {
    setState(() {
      product["short_description"] = !short;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Container(
          padding: EdgeInsets.symmetric(horizontal: 5),
          child: ListView.builder(
            itemCount: products.length + 1,
            itemBuilder: (context, index) {
              if (index == 0) {
                return Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    CarouselSlider(
                      options: CarouselOptions(
                        autoPlay: true,
                        height: 200,
                        enlargeCenterPage: true,
                        aspectRatio: 16 / 9,
                        viewportFraction: 1.0,
                        pageSnapping: true,
                        autoPlayCurve: Curves.linear,
                      ),
                      items: images
                          .map(
                            (i) => (Image.network(
                              i,
                              width: double.infinity,
                              height: double.infinity,
                              fit: BoxFit.cover,
                            )),
                          )
                          .toList(),
                    ),
                    SizedBox(height: 5),
                    Text(
                      product["title"],
                      style: TextStyle(fontSize: 30, color: Colors.black),
                    ),
                    SizedBox(height: 5),
                    TextButton(
                      style: TextButton.styleFrom(
                        padding: EdgeInsets.all(0),
                        foregroundColor: Colors.black,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadiusGeometry.circular(0),
                        ),
                      ),
                      onPressed: () =>
                          setShortDescription(product["short_description"]),
                      child: Text(
                        shortDescription(
                          product["description"],
                          product["short_description"],
                        ),
                        style: TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.normal,
                        ),
                      ),
                    ),
                    SizedBox(height: 20),
                    Text("Produk Terkait", style: TextStyle(fontSize: 20)),
                  ],
                );
              }
              if (index >= 1) {
                final product = products[index - 1];
                return Column(
                      children: [
                        TextButton(
                          onPressed: () => context.push(
                            "/detail-product/${product["id"]}",
                          ),
                          style: TextButton.styleFrom(
                            backgroundColor: Colors.white,
                            minimumSize: Size(double.infinity, 100),
                            padding: EdgeInsets.only(right: 5),
                            foregroundColor: Colors.black,
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadiusGeometry.circular(10),
                            ),
                          ),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: [
                              ClipRRect(
                                borderRadius: BorderRadiusGeometry.circular(5),
                                child: Image.asset(
                                  product["image"],
                                  width: 100,
                                  height: 100,
                                ),
                              ),
                              Expanded(
                                child: Container(
                                  padding: EdgeInsets.only(left: 5),
                                  height: 100,
                                  child: Column(
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    children: [
                                      Text(
                                        product["title"],
                                        style: TextStyle(
                                          fontSize: 20,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                      Text(
                                        product["type"],
                                        style: TextStyle(
                                          fontSize: 14,
                                          color: Colors.grey,
                                        ),
                                      ),
                                      Expanded(
                                        child: Container(
                                          color: Colors.transparent,
                                        ),
                                      ),
                                      Text(
                                        "Rp. ${product["cost"]}",
                                        style: TextStyle(
                                          fontSize: 20,
                                          fontWeight: FontWeight.bold,
                                          color: Colors.blue,
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                        SizedBox(height: 2),
                  ],
                );
              }
            },
          ),
        ),
        Positioned(
          left: 0,
          right: 0,
          bottom: 0,
          child: Container(
            padding: EdgeInsets.symmetric(horizontal: 5, vertical: 2),
            height: 50,
            color: Colors.white,
            child: Row(
              children: [
                Expanded(
                  child: ElevatedButton(
                    onPressed: () => context.push("/payment-confirmation"),
                    style: ElevatedButton.styleFrom(
                      minimumSize: Size(double.infinity, double.infinity),
                      padding: EdgeInsets.symmetric(
                        vertical: 10,
                        horizontal: 30,
                      ),
                      backgroundColor: Colors.blue,
                      foregroundColor: Colors.white,
                    ),
                    child: Text(
                      "Beli Sekarang",
                      style: TextStyle(fontSize: 16),
                    ),
                  ),
                ),
                SizedBox(width: 4),
                IconButton(
                  onPressed: () => saveProduct(product),
                  style: IconButton.styleFrom(
                    minimumSize: Size(50, 50),
                    padding: EdgeInsets.all(0),
                  ),
                  icon: Icon(Icons.shopping_cart_outlined, size: 35),
                ),
                SizedBox(width: 4),
                IconButton(
                  onPressed: () {
                    setState(() {
                      show = !show;
                    });
                  },
                  style: IconButton.styleFrom(
                    minimumSize: Size(50, 50),
                    padding: EdgeInsets.all(0),
                  ),
                  icon: Icon(Icons.comment_outlined, size: 35),
                ),
                SizedBox(width: 10),
              ],
            ),
          ),
        ),
        if (show) ...[
          ModalBarrier(
            dismissible: true,
            color: Colors.black54,
            onDismiss: () {
              setState(() {
                show = false;
              });
            },
          ),
        ],
        Positioned(
          left: 0,
          right: 0,
          bottom: 0,
          child: ClipRRect(
            borderRadius: BorderRadiusGeometry.vertical(
              top: Radius.circular(50),
              bottom: Radius.circular(0),
            ),
            child: AnimatedContainer(
              duration: Duration(milliseconds: 500),
              curve: Curves.ease,
              width: double.infinity,
              height: show ? 500 : 0,
              color: Colors.white,
              padding: EdgeInsets.only(top: 10),
              child: show ? ReviewProduct() : null,
            ),
          ),
        ),
      ],
    );
  }
}
