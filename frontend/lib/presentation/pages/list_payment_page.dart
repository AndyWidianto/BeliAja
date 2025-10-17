import 'package:flutter/material.dart';

class ListPaymentPage extends StatefulWidget {
  const ListPaymentPage({super.key});

  @override
  State<ListPaymentPage> createState() => _ListPaymentPage();
}

class _ListPaymentPage extends State<ListPaymentPage> {
  Map<String, dynamic> typePayment = {
    "category": "E-Wallet",
    "bank": "dana",
    "image":
        "https://bloguna.com/wp-content/uploads/2025/05/Logo-DANA-Format-PNG-CDR-AI-EPS-SVG-300x164.png",
  };

  void setTypePayment(String category, String bank, String image) {
    final newtypePayment = {
      "category": category,
      "bank": bank,
      "image": image
    };
    setState(() {
      typePayment = newtypePayment;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Pilih Jenis Pembayaran")),
      body: Container(padding: EdgeInsets.all(2), child: ListPayment(
        setTypePayment: setTypePayment,
      )),
      bottomSheet: Container(
        padding: EdgeInsets.symmetric(horizontal: 10, vertical: 10),
        height: 120,
        width: double.infinity,
        child: SingleChildScrollView(
          scrollDirection: Axis.vertical,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  ClipRRect(
                    borderRadius: BorderRadiusGeometry.circular(12),
                    child: Image.network(
                      typePayment["image"],
                      height: 50,
                      width: 50,
                    ),
                  ),
                  SizedBox(width: 10,),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(typePayment["category"], style: TextStyle(fontSize: 20)),
                        Text(typePayment["bank"]),
                      ],
                    ),
                  ),
                ],
              ),
              ElevatedButton(
                onPressed: () {},
                style: ElevatedButton.styleFrom(
                  minimumSize: Size(double.infinity, 50),
                  backgroundColor: Colors.blue,
                  foregroundColor: Colors.white,
                ),
                child: Text("Gunakan"),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class ListPayment extends StatefulWidget {
  final Function(String, String, String) setTypePayment;
  const ListPayment({super.key, required this.setTypePayment});

  @override
  State<ListPayment> createState() => _ListPayment();
}

class _ListPayment extends State<ListPayment> {
  List<dynamic> PaymentMetode = [
    {
      "category": "Kartu Kredit",
      "metode": [
        {
          "id": 1,
          "name": "visa",
          "image":
              "https://logos-world.net/wp-content/uploads/2020/06/Visa-Logo-2006.png",
        },
        {
          "id": 1,
          "name": "MasterCard",
          "image":
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkzpbskcw38f0FCjHYQaIlxTv6vc2myE0GBQ&s",
        },
        {
          "id": 1,
          "name": "American Express",
          "image": "https://cdn-icons-png.freepik.com/512/349/349228.png",
        },
        {
          "id": 1,
          "name": "JCB",
          "image":
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-TJ_yiPGULbS6OV-BcN3ZyVBcFscCPoMkYA&s",
        },
      ],
    },
    {
      "category": "E-Wallet",
      "metode": [
        {
          "id": 1,
          "name": "GoPay",
          "image":
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6VO1mf2pOVxGL97L5S113nnkna3zui6PEbQ&s",
        },
        {
          "id": 1,
          "name": "ShopePay",
          "image":
              "https://bloguna.com/wp-content/uploads/2025/06/Logo-ShopeePay-PNG-CDR-SVG-EPS-Kualitas-HD.png",
        },
        {
          "id": 1,
          "name": "Qris",
          "image":
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_QRIS.svg/2560px-Logo_QRIS.svg.png",
        },
        {
          "id": 1,
          "name": "Dana",
          "image":
              "https://bloguna.com/wp-content/uploads/2025/05/Logo-DANA-Format-PNG-CDR-AI-EPS-SVG-300x164.png",
        },
      ],
    },
  ];

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: PaymentMetode.length,
      itemBuilder: (context, index) {
        final category = PaymentMetode[index == 0 ? index : index - 1]["category"];
        if (category == "Kartu Kredit") {
          final item = PaymentMetode[index];
          return Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              TextButton(
                onPressed: () {},
                child: Row(
                  children: [
                    Expanded(child: Text(item["category"])),
                    Transform.rotate(
                      angle: 0,
                      child: Icon(Icons.keyboard_arrow_right_outlined),
                    ),
                  ],
                ),
              ),
              AnimatedContainer(
                duration: Duration(milliseconds: 300),
                padding: EdgeInsets.symmetric(horizontal: 10),
                height: 50,
                child: Row(
                  children: List.generate(
                    item["metode"].length,
                    (i) => InkWell(
                      onTap: () {
                        widget.setTypePayment(category, item["metode"][i]["name"], item["metode"][i]["image"]);
                      },
                      borderRadius: BorderRadius.circular(10),
                      child: Container(
                        padding: EdgeInsets.all(4),
                        height: 40,
                        width: 70,
                        child: Image.network(
                          item["metode"][i]["image"],
                          fit: BoxFit.contain,
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ],
          );
        } else if (category == "E-Wallet") {
          final item = PaymentMetode[index - 1];
          return Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              TextButton(
                onPressed: () {},
                child: Row(
                  children: [
                    Expanded(child: Text(item["category"])),
                    Transform.rotate(
                      angle: 0,
                      child: Icon(Icons.keyboard_arrow_right_outlined),
                    ),
                  ],
                ),
              ),
              AnimatedContainer(
                duration: Duration(milliseconds: 300),
                padding: EdgeInsets.symmetric(horizontal: 10),
                height: 50,
                child: Row(
                  children: List.generate(
                    item["metode"].length,
                    (i) => InkWell(
                      onTap: () {},
                      borderRadius: BorderRadius.circular(10),
                      child: Container(
                        padding: EdgeInsets.all(4),
                        height: 40,
                        width: 70,
                        child: Image.network(
                          item["metode"][i]["image"],
                          fit: BoxFit.contain,
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ],
          );
        }
      },
    );
  }
}
