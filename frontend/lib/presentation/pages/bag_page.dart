import "package:flutter/material.dart";

class BagPage extends StatefulWidget {
  const BagPage({super.key});

  @override
  State<BagPage> createState() => _BagPage();
}

class _BagPage extends State<BagPage> {
  final List<dynamic> products = [
    {
      "id": 1,
      "image": "assets/images/go_shopping.png",
      "title": "Handpone Iphone Pro Max 16",
      "type": "blue | black | gray",
      "cost": "10.000",
    },
    {
      "id": 1,
      "image": "assets/images/go_shopping.png",
      "title": "Lengko",
      "type": "blue | black | gray",
      "cost": "10.000",
    },
    {
      "id": 1,
      "image": "assets/images/go_shopping.png",
      "title": "Laptop Asus d30442",
      "type": "blue | black | gray",
      "cost": "10.000",
    },
    {
      "id": 1,
      "image": "assets/images/go_shopping.png",
      "title": "Laptop Axios",
      "type": "blue | black | gray",
      "cost": "10.000",
    },
  ];
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      scrollDirection: Axis.vertical,
      child: Column(
        children: List.generate(
          products.length,
          (i) => Column(
            children: [
              TextButton(
                onPressed: () => {},
                style: TextButton.styleFrom(
                  backgroundColor: Colors.white,
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
    );
  }
}
