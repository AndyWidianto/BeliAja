import "package:BeliAja/presentation/providers/search_product_provider.dart";
import "package:flutter/material.dart";
import "package:go_router/go_router.dart";
import "package:provider/provider.dart";

class SearchProductPage extends StatefulWidget {
  const SearchProductPage({super.key});

  @override
  State<SearchProductPage> createState() => _SearchProductPage();
}

class _SearchProductPage extends State<SearchProductPage> {
  @override
  Widget build(BuildContext context) {
    final searchProvider = context.watch<SearchProductProvider>();
    return SingleChildScrollView(
      scrollDirection: Axis.vertical,
      child: Container(
        padding: EdgeInsets.all(0),
        child: ListProducts(),
      ),
    );
  }
}

class ListProducts extends StatefulWidget {
  const ListProducts({super.key});

  @override
  State<ListProducts> createState() => _ListProducts();
}

class _ListProducts extends State<ListProducts> {
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
  @override
  Widget build(BuildContext context) {
    return Column(
      children: List.generate(
        products.length,
        (i) => Column(
          children: [
            TextButton(
              onPressed: () => context.go("/detail-product/${products[i]["id"]}"),
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
                            style: TextStyle(fontSize: 14, color: Colors.grey),
                          ),
                          Expanded(child: Container(color: Colors.transparent)),
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
    );
  }
}
