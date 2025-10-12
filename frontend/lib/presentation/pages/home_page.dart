import "package:BeliAja/presentation/navigation/home_navigasi.dart";
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
    {"id": 1,"icon": Icons.phone_android },
    {"id": 1,"icon": Icons.computer },
    {"id": 1,"icon": Icons.headphones },
    {"id": 1,"icon": Icons.checkroom },
    {"id": 1,"icon": Icons.watch },
    {"id": 1,"icon": Icons.kitchen },
    {"id": 1,"icon": Icons.cleaning_services },
    {"id": 1,"icon": Icons.bed },
    {"id": 1,"icon": Icons.sports_basketball },
    {"id": 1,"icon": Icons.music_note }
  ];

  @override
  Widget build(BuildContext context) {
    return Container(
      height: double.infinity,
      padding: EdgeInsets.all(5),
      child: SingleChildScrollView(
        child: Column(
          children: [
            Container(
              width: double.infinity,
              height: 150,
              decoration: BoxDecoration(
                color: Colors.blue,
                borderRadius: BorderRadius.circular(10),
              ),
              child: Text("hello world"),
            ),
            SizedBox(height: 5),
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
            SizedBox(height: 5),
            Column(
              children: [
                ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    padding: EdgeInsets.all(0),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                  ),
                  onPressed: () => {},
                  child: Container(
                    padding: EdgeInsets.all(0.8),
                    width: double.infinity,
                    decoration: BoxDecoration(
                      color: const Color.fromARGB(0, 223, 223, 223),
                      borderRadius: BorderRadius.circular(10),
                      border: Border.all(color: Colors.grey, width: 0.6),
                    ),
                    child: Row(
                      children: [
                        Container(
                          margin: EdgeInsets.all(0.8),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(10),
                            color: Colors.blue,
                          ),
                          child: ClipRRect(
                            borderRadius: BorderRadius.circular(5),
                            child: Image.asset(
                              "assets/images/go_shopping.png",
                              width: 100,
                              height: 100,
                              fit: BoxFit.cover,
                            ),
                          ),
                        ),
                        SizedBox(width: 5),
                        Expanded(
                          child: Container(
                            height: 100,
                            padding: EdgeInsets.all(0.8),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  "Hanphone Iphone Pro Max 16",
                                  style: TextStyle(
                                    fontWeight: FontWeight.bold,
                                    fontSize: 25,
                                    color: Colors.black,
                                  ),
                                ),
                                Text(
                                  "blue | black | gray",
                                  style: TextStyle(
                                    color: Colors.grey,
                                    fontWeight: FontWeight.normal,
                                  ),
                                ),
                                Expanded(
                                  child: Container(color: Colors.transparent),
                                ),
                                Text(
                                  "Rp. 100.000",
                                  style: TextStyle(
                                    color: Colors.black,
                                    fontWeight: FontWeight.bold,
                                    fontSize: 20,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                SizedBox(height: 10),
                SizedBox(height: 60),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
