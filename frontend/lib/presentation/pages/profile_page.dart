import 'package:flutter/material.dart';

class ProfilePage extends StatelessWidget {
  const ProfilePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.only(left: 10, right: 10),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              ClipRRect(
                borderRadius: BorderRadiusGeometry.circular(50),
                child: Image.asset(
                  "assets/images/go_shopping.png",
                  width: 50,
                  height: 50,
                  fit: BoxFit.cover,
                ),
              ),
              SizedBox(width: 10),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      "Andy Widiato",
                      style: TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Text("user", style: TextStyle(fontSize: 16)),
                  ],
                ),
              ),
              TextButton(
                onPressed: () => {},
                child: Text("edit", style: TextStyle(color: Colors.blue)),
              ),
            ],
          ),
          SizedBox(height: 25),
          Text("aktivitas Pesanan", style: TextStyle(fontSize: 20)),
          MenuProfile(),
        ],
      ),
    );
  }
}

class MenuProfile extends StatefulWidget {
  const MenuProfile({super.key});

  @override
  State<MenuProfile> createState() => _MenuProfile();
}

class _MenuProfile extends State<MenuProfile> {
  final List<dynamic> menus = [
    {
      "id": 1,
      "icon": Icons.shopping_bag_outlined,
      "label": "Pesanan saya",
      "route": "/bag",
    },
    {
      "id": 1,
      "icon": Icons.location_on_outlined,
      "label": "Alamat Pengiriman",
      "route": "/bag",
    },
    {
      "id": 1,
      "icon": Icons.favorite_outline,
      "label": "Favorit",
      "route": "/bag",
    },
    {
      "id": 1,
      "icon": Icons.credit_card_outlined,
      "label": "Metode Pembayaran",
      "route": "/bag",
    },
    {
      "id": 1,
      "icon": Icons.shopping_bag_outlined,
      "label": "Pesanan saya",
      "route": "/bag",
    },
  ];
  @override
  Widget build(BuildContext context) {
    return Column(
      children: List.generate(
        menus.length,
        (i) => TextButton(
          onPressed: () => {},
          style: TextButton.styleFrom(padding: EdgeInsets.all(0), iconColor: Colors.black, foregroundColor: Colors.black, shape: RoundedRectangleBorder( borderRadius: BorderRadiusGeometry.circular(0))),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Icon(menus[i]["icon"], size: 30),
              SizedBox(width: 5),
              Expanded(
                child: Text(menus[i]["label"], style: TextStyle(fontSize: 20, fontWeight: FontWeight.normal)),
              ),
              Icon(Icons.arrow_forward_ios, size: 15),
            ],
          ),
        ),
      ),
    );
  }
}
