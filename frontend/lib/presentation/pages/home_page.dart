import "package:flutter/material.dart";
import "package:go_router/go_router.dart";
import "package:shared_preferences/shared_preferences.dart";

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override 
  State<HomePage> createState() => _HomePage();
}

class _HomePage extends State<HomePage> {

  Future<void> logout() async {
    final shared = await SharedPreferences.getInstance();
    shared.setBool("isLoggedIn", false);

    if (!mounted) return;
    context.go("/login");
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Home Page")),
      body: Container(
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
              SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                  children: [
                    TextButton(onPressed: () {}, child: Text("G")),
                    SizedBox(width: 10),
                    TextButton(onPressed: () {}, child: Text("G")),
                  ],
                ),
              ),
              Column(
                children: [
                  Container(
                    padding: EdgeInsets.all(0.8),
                    width: double.infinity,
                    decoration: BoxDecoration(
                      color: Colors.lightBlue,
                      borderRadius: BorderRadius.circular(10),
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
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            mainAxisAlignment: MainAxisAlignment.spaceAround,
                            children: [
                              Text(
                                "Hanphone Iphone Pro Max 16",
                                style: TextStyle(
                                  fontWeight: FontWeight.bold,
                                  fontSize: 20,
                                ),
                              ),
                              Text(
                                "blue | black | gray",
                                style: TextStyle(
                                  color: Colors.white,
                                  fontWeight: FontWeight.normal,
                                ),
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
                      ],
                    ),
                  ),
                  TextButton(
                    onPressed: logout,
                    child: Text("Logout"),
                  ),
                  SizedBox(height: 10),
                  Container(
                    padding: EdgeInsets.all(0.8),
                    width: double.infinity,
                    height: 100,
                    decoration: BoxDecoration(
                      color: Colors.blueGrey,
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: Text("Container"),
                  ),
                  SizedBox(height: 10),
                  Container(
                    padding: EdgeInsets.all(0.8),
                    width: double.infinity,
                    height: 100,
                    decoration: BoxDecoration(
                      color: Colors.blueGrey,
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: Text("Container"),
                  ),
                  SizedBox(height: 10),
                  Container(
                    padding: EdgeInsets.all(0.8),
                    width: double.infinity,
                    height: 100,
                    decoration: BoxDecoration(
                      color: Colors.blueGrey,
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: Text("Container"),
                  ),
                  SizedBox(height: 10),
                  Container(
                    padding: EdgeInsets.all(0.8),
                    width: double.infinity,
                    height: 100,
                    decoration: BoxDecoration(
                      color: Colors.blueGrey,
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: Text("Container"),
                  ),
                  SizedBox(height: 10),
                  Container(
                    padding: EdgeInsets.all(0.8),
                    width: double.infinity,
                    height: 100,
                    decoration: BoxDecoration(
                      color: Colors.blueGrey,
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: Text("Container"),
                  ),
                  SizedBox(height: 10),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
