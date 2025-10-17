import 'package:flutter/material.dart';

class ReviewProduct extends StatefulWidget {
  const ReviewProduct({super.key});

  @override
  State<ReviewProduct> createState() => _ReviewPeoduct();
}

class _ReviewPeoduct extends State<ReviewProduct> {
  int selectedIndex = 0;

  final List<dynamic> reviewProduct = [
    {
      "id": 1,
      "image": "assets/images/go_shopping.png",
      "username": "Andy Widianto",
      "ranting": 5,
      "description":
          "Produk ini benar-benar sesuai dengan ekspektasi saya. Kualitasnya bagus, bahan terasa kokoh, dan desainnya elegan. Sangat nyaman dipakai sehari-hari.",
      "name": "Handphone iphone 16 pro max",
      "total_like": 10000,
      "balasan": [],
    },
    {
      "id": 1,
      "image": "assets/images/go_shopping.png",
      "username": "Andy Widianto",
      "ranting": 2,
      "description":
          "Produk ini benar-benar sesuai dengan ekspektasi saya. Kualitasnya bagus, bahan terasa kokoh, dan desainnya elegan. Sangat nyaman dipakai sehari-hari.",
      "name": "Handphone iphone 16 pro max",
      "total_like": 10000,
      "balasan": [
        {
          "id": 1,
          "image": "assets/images/go_shopping.png",
          "username": "Sarah Latifah",
          "total_like": 15000,
          "description":
              "Terima kasih banyak atas ulasannya! Kami senang mendengar produk kami sesuai dengan ekspektasi Anda. Semoga selalu bermanfaat dan nyaman digunakan.",
          "id_review": 1,
        },
      ],
    },
    {
      "id": 1,
      "image": "assets/images/go_shopping.png",
      "username": "Andy Widianto",
      "ranting": 3,
      "description":
          "Produk ini benar-benar sesuai dengan ekspektasi saya. Kualitasnya bagus, bahan terasa kokoh, dan desainnya elegan. Sangat nyaman dipakai sehari-hari.",
      "name": "Handphone iphone 16 pro max",
      "total_like": 100000000,
      "balasan": [
        {
          "id": 1,
          "image": "assets/images/go_shopping.png",
          "username": "Sarah Latifah",
          "total_like": 15000,
          "description":
              "Terima kasih banyak atas ulasannya! Kami senang mendengar produk kami sesuai dengan ekspektasi Anda. Semoga selalu bermanfaat dan nyaman digunakan.",
          "id_review": 1,
        },
      ],
    },
  ];

  formatNumber(int likes) {
    toFixed(num value) {
      String str = value.toStringAsFixed(1);
      if (str.endsWith(".0")) {
        return str.substring(0, str.length - 2);
      }
      return str;
    }

    if (likes >= 1000000000) {
      return "${toFixed(likes / 1000000000)}rb";
    } else if (likes >= 1000000) {
      return "${toFixed(likes / 1000000)}jt";
    } else if (likes >= 1000) {
      return "${toFixed(likes / 1000)}m";
    } else {
      return likes;
    }
  }

  @override
  Widget build(BuildContext context) {
    final filtered = selectedIndex == 0 ? reviewProduct : 
    reviewProduct.where((review) => review["ranting"] == (6 - selectedIndex)).toList();
    return Container(
      padding: EdgeInsets.only(left: 10, right: 10, top: 40),
      child: ListView.builder(
        itemCount: filtered.length + 1,
        itemBuilder: (context, index) {
          if (index == 0) {
            return Column(
              children: [
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      padding: EdgeInsets.all(0),
                      width: 140,
                      child: Center(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            Icon(Icons.star, color: Colors.yellow, size: 50),
                            Text(
                              "4.6",
                              style: TextStyle(
                                fontSize: 30,
                                color: Colors.black,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            children: [
                              ...List.generate(
                                5,
                                (i) => Container(
                                  padding: EdgeInsets.only(left: 2),
                                  child: Icon(
                                    Icons.star,
                                    size: 20,
                                    color: Colors.yellow,
                                  ),
                                ),
                              ),
                              SizedBox(width: 5),
                              Text(
                                "300",
                                style: TextStyle(
                                  fontSize: 20,
                                  color: Colors.black,
                                ),
                              ),
                            ],
                          ),
                          Row(
                            children: [
                              ...List.generate(
                                4,
                                (i) => Container(
                                  padding: EdgeInsets.only(left: 2),
                                  child: Icon(
                                    Icons.star,
                                    size: 20,
                                    color: Colors.yellow,
                                  ),
                                ),
                              ),
                              SizedBox(width: 5),
                              Text(
                                "240",
                                style: TextStyle(
                                  fontSize: 20,
                                  color: Colors.black,
                                ),
                              ),
                            ],
                          ),
                          Row(
                            children: [
                              ...List.generate(
                                3,
                                (i) => Container(
                                  padding: EdgeInsets.only(left: 2),
                                  child: Container(
                                    padding: EdgeInsets.only(left: 2),
                                    child: Icon(
                                      Icons.star,
                                      size: 20,
                                      color: Colors.yellow,
                                    ),
                                  ),
                                ),
                              ),
                              SizedBox(width: 5),
                              Text(
                                "10",
                                style: TextStyle(
                                  fontSize: 20,
                                  color: Colors.black,
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
                Container(
                  padding: EdgeInsets.symmetric(vertical: 10),
                  child: Row(
                    children: List.generate(
                      6,
                      (i) => Container(
                        margin: EdgeInsets.only(right: 4),
                        child: ElevatedButton(
                          onPressed: () {
                            setState(() {
                              selectedIndex = i;
                            });
                          },
                          style: ElevatedButton.styleFrom(
                            backgroundColor: selectedIndex == i
                                ? Colors.blue
                                : const Color.fromARGB(255, 200, 200, 200),
                            padding: EdgeInsets.symmetric(
                              horizontal: 10,
                              vertical: 4,
                            ),
                            minimumSize: Size(0, 0),
                          ),
                          child: i == 0
                              ? Text(
                                  "semua",
                                  style: TextStyle(
                                    fontSize: 16,
                                    color: selectedIndex == i
                                        ? Colors.white
                                        : Colors.black,
                                    fontWeight: FontWeight.normal,
                                  ),
                                )
                              : Row(
                                  children: [
                                    Icon(
                                      Icons.star,
                                      color: selectedIndex == i
                                          ? Colors.yellow
                                          : Colors.black,
                                      size: 20,
                                    ),
                                    Text(
                                      "${6 - i}",
                                      style: TextStyle(
                                        fontSize: 16,
                                        color: selectedIndex == i ? Colors.white : Colors.black,
                                        fontWeight: FontWeight.normal,
                                      ),
                                    ),
                                  ],
                                ),
                        ),
                      ),
                    ),
                  ),
                ),
              ],
            );
          }
          if (index >= 1) {
            return Column(
              children: [
                Row(
                  children: [
                    ClipRRect(
                      borderRadius: BorderRadiusGeometry.circular(50),
                      child: Image.asset(
                        filtered[index - 1]["image"],
                        width: 50,
                        height: 50,
                      ),
                    ),
                    SizedBox(width: 5),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            children: [
                              Text(
                                filtered[index - 1]["username"],
                                style: TextStyle(
                                  fontSize: 20,
                                  color: Colors.black,
                                ),
                              ),
                              Row(
                                children: List.generate(
                                  filtered[index - 1]["ranting"],
                                  (i) => Icon(
                                    Icons.star,
                                    size: 16,
                                    color: Colors.yellow,
                                  ),
                                ),
                              ),
                            ],
                          ),
                          Text(
                            filtered[index - 1]["name"],
                            style: TextStyle(fontSize: 14, color: Colors.black),
                          ),
                        ],
                      ),
                    ),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        GestureDetector(
                          onTap: () {
                            print("dia click aku");
                          },
                          child: Icon(Icons.favorite_outline),
                        ),
                        Text(
                          "${formatNumber(filtered[index - 1]["total_like"])}",
                          style: TextStyle(fontSize: 14, color: Colors.black),
                        ),
                      ],
                    ),
                  ],
                ),
                Text(
                  filtered[index - 1]["description"],
                  style: TextStyle(fontSize: 16),
                ),
                SizedBox(height: 5),
                Column(
                  children: filtered[index - 1]["balasan"].isNotEmpty
                      ? List.generate(
                          filtered[index - 1]["balasan"].length,
                          (i) => Container(
                            padding: EdgeInsets.only(left: 20),
                            child: Column(
                              children: [
                                Row(
                                  children: [
                                    ClipRRect(
                                      borderRadius:
                                          BorderRadiusGeometry.circular(50),
                                      child: Image.asset(
                                        filtered[index -
                                            1]["balasan"][i]["image"],
                                        width: 50,
                                        height: 50,
                                      ),
                                    ),
                                    SizedBox(width: 5),
                                    Expanded(
                                      child: Column(
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: [
                                          Text(
                                            filtered[index -
                                                1]["balasan"][i]["username"],
                                            style: TextStyle(
                                              fontSize: 20,
                                              color: Colors.black,
                                            ),
                                          ),
                                          Text(
                                            "Admin: sarah",
                                            style: TextStyle(
                                              fontSize: 14,
                                              color: Colors.black,
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                    Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.center,
                                      children: [
                                        GestureDetector(
                                          onTap: () {
                                            print("dia click aku");
                                          },
                                          child: Icon(Icons.favorite_outline),
                                        ),
                                        Text(
                                          "${formatNumber(filtered[index - 1]["balasan"][i]["total_like"])}",
                                          style: TextStyle(
                                            fontSize: 14,
                                            color: Colors.black,
                                          ),
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                                Text(
                                  filtered[index -
                                      1]["balasan"][i]["description"],
                                  style: TextStyle(fontSize: 16),
                                ),
                              ],
                            ),
                          ),
                        )
                      : [],
                ),
              ],
            );
          }
        },
      ),
    );
  }
}
