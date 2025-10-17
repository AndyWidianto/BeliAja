import "package:BeliAja/presentation/navigation/home_navigasi.dart";
import "package:carousel_slider/carousel_slider.dart";
import "package:flutter/material.dart";
import "package:go_router/go_router.dart";
import "package:provider/provider.dart";
import "package:shared_preferences/shared_preferences.dart";
import "package:BeliAja/presentation/providers/search_product_provider.dart";

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePage();
}

class _HomePage extends State<HomePage> {
  final List<dynamic> Categoires = [
    {"id": 1, "icon": Icons.phone_android},
    {"id": 2, "icon": Icons.computer},
    {"id": 3, "icon": Icons.headphones},
    {"id": 4, "icon": Icons.checkroom},
    {"id": 5, "icon": Icons.watch},
    {"id": 6, "icon": Icons.kitchen},
    {"id": 7, "icon": Icons.cleaning_services},
    {"id": 8, "icon": Icons.bed},
    {"id": 9, "icon": Icons.sports_basketball},
    {"id": 10, "icon": Icons.music_note},
  ];

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

  final List<String> images = [
    "https://www.usnews.com/object/image/00000196-6390-d12c-a7b7-ebf1e11c0000/new-main-image-monument-valley-credit-getty-images.jpg"
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg",
    "https://www.usnews.com/object/image/00000166-4034-dc8c-a576-69ff3f110000/25-jackson-hole-getty.jpg",
    "https://www.usnews.com/object/image/00000162-f3a3-d0d5-a57f-fbf3a0150000/18-milford-sound-fjords-national-park.jpg",
  ];

  @override
  Widget build(BuildContext context) {
    return Container(
      height: double.infinity,
      padding: EdgeInsets.all(5),
      child: SingleChildScrollView(
        child: Column(
          children: [
                CarouselSlider(
                  options: CarouselOptions(
                    autoPlay: true,
                    height: 200,
                    enlargeCenterPage: false,
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
            SizedBox(height: 10),
            SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: List.generate(
                  Categoires.length,
                  (i) => IconButton(
                    onPressed: () => {},
                    icon: Icon(Categoires[i]["icon"], size: 30),
                  ),
                ),
              ),
            ),
            SizedBox(height: 10),
            Column(
              children: List.generate(
                products.length,
                (i) => Column(
                  children: [
                    TextButton(
                      onPressed: () =>
                          context.go("/detail-product/${products[i]["id"]}"),
                      style: TextButton.styleFrom(
                        backgroundColor: Colors.white,
                        foregroundColor: Colors.black,
                        minimumSize: Size(double.infinity, 100),
                        padding: EdgeInsets.only(right: 5),
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
                              products[i]["image"],
                              width: 100,
                              height: 100,
                            ),
                          ),
                          Expanded(
                            child: Container(
                              padding: EdgeInsets.only(left: 5),
                              height: 100,
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    products[i]["title"],
                                    style: TextStyle(
                                      fontSize: 20,
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                                  Text(
                                    products[i]["type"],
                                    style: TextStyle(
                                      fontSize: 14,
                                      color: Colors.grey,
                                    ),
                                  ),
                                  Expanded(
                                    child: Container(color: Colors.transparent),
                                  ),
                                  Text(
                                    "Rp. ${products[i]["cost"]}",
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
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
