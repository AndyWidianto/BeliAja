import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class PaymentConfirmationPage extends StatefulWidget {
  const PaymentConfirmationPage({super.key});

  @override
  State<PaymentConfirmationPage> createState() => _PaymentConfirmationPage();
}

class _PaymentConfirmationPage extends State<PaymentConfirmationPage> {
  String? selectedValue = "B";
  bool confirmation = false;

  List<dynamic> struck = [
    {"name": "Hanphone Iphone 16 Pro Max", "price": 10000000},
    {"name": "Hanphone Iphone 16 Pro Max", "price": 10000000},
    {"name": "Hanphone Iphone 16 Pro Max", "price": 10000000},
    {"name": "Hanphone Iphone 16 Pro Max", "price": 10000000},
    {"name": "Hanphone Iphone 16 Pro Max", "price": 10000000},
    {"name": "Hanphone Iphone 16 Pro Max", "price": 10000000},
    {"name": "Hanphone Iphone 16 Pro Max", "price": 10000000},
    {"name": "Hanphone Iphone 16 Pro Max", "price": 10000000},
    {"name": "Hanphone Iphone 16 Pro Max", "price": 10000000}
  ];
  double itemHeight = 40;

  handlePayment() {
    setState(() {
      confirmation = true;
    });
  }

  @override
  Widget build(BuildContext context) {
    final double contentHeight = itemHeight * struck.length;
    final double targetheight = contentHeight > 300 ? 300 : contentHeight;
    return Scaffold(
      appBar: AppBar(
        title: Text("Konfirmasi Pembayaran", style: TextStyle(fontSize: 25)),
      ),
      body: Stack(
        children: [
          SingleChildScrollView(
            scrollDirection: Axis.vertical,
            child: Container(
              padding: EdgeInsets.symmetric(horizontal: 10),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  SizedBox(height: 10),
                  Text("Produk", style: TextStyle(fontSize: 20)),
                  Container(
                    padding: EdgeInsets.symmetric(vertical: 10),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [
                        ClipRRect(
                          borderRadius: BorderRadiusGeometry.circular(50),
                          child: Image.network(
                            "https://www.usnews.com/object/image/00000196-6390-d12c-a7b7-ebf1e11c0000/new-main-image-monument-valley-credit-getty-images.jpg",
                            width: 60,
                            height: 60,
                            fit: BoxFit.cover,
                          ),
                        ),
                        SizedBox(width: 5),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                "Hanphone iphone 16 pro max",
                                style: TextStyle(
                                  fontSize: 20,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              Text("handphone | 14"),
                            ],
                          ),
                        ),
                        IconButton(
                          onPressed: () {},
                          icon: Icon(
                            Icons.delete_outlined,
                            size: 30,
                            color: Colors.red,
                          ),
                        ),
                      ],
                    ),
                  ),
                  TextButton(
                    onPressed: () {},
                    style: TextButton.styleFrom(
                      padding: EdgeInsets.zero,
                      foregroundColor: Colors.black,
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [
                        ClipRRect(
                          borderRadius: BorderRadiusGeometry.circular(50),
                          child: Container(
                            padding: EdgeInsets.all(5),
                            height: 60,
                            width: 60,
                            color: const Color.fromARGB(255, 155, 155, 155),
                            child: Icon(Icons.add, size: 30),
                          ),
                        ),
                        SizedBox(width: 5),
                        Expanded(
                          child: Text(
                            "Tambah Produk",
                            style: TextStyle(fontSize: 20),
                          ),
                        ),
                      ],
                    ),
                  ),
                  SizedBox(height: 10),
                  Text(
                    "Pilih Metode Pembayaran",
                    style: TextStyle(fontSize: 20),
                  ),
                  Container(
                    padding: EdgeInsets.symmetric(vertical: 5),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [
                        ClipRRect(
                          borderRadius: BorderRadiusGeometry.circular(50),
                          child: Image.network(
                            "https://www.usnews.com/object/image/00000196-6390-d12c-a7b7-ebf1e11c0000/new-main-image-monument-valley-credit-getty-images.jpg",
                            width: 60,
                            height: 60,
                            fit: BoxFit.cover,
                          ),
                        ),
                        SizedBox(width: 5),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                "E-Wallet",
                                style: TextStyle(
                                  fontSize: 20,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              Text("dana"),
                            ],
                          ),
                        ),
                        TextButton(
                          onPressed: () => context.push("/list-payment"),
                          style: TextButton.styleFrom(
                            foregroundColor: Colors.blue,
                          ),
                          child: Text("Ganti"),
                        ),
                      ],
                    ),
                  ),
                  Text("Pilih Kurir", style: TextStyle(fontSize: 20)),
                  Container(
                    padding: EdgeInsets.symmetric(vertical: 5),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [
                        ClipRRect(
                          borderRadius: BorderRadiusGeometry.circular(50),
                          child: Image.network(
                            "https://www.usnews.com/object/image/00000196-6390-d12c-a7b7-ebf1e11c0000/new-main-image-monument-valley-credit-getty-images.jpg",
                            width: 60,
                            height: 60,
                            fit: BoxFit.cover,
                          ),
                        ),
                        SizedBox(width: 5),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                "E-Wallet",
                                style: TextStyle(
                                  fontSize: 20,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              Text("dana"),
                            ],
                          ),
                        ),
                        TextButton(
                          onPressed: () {},
                          style: TextButton.styleFrom(
                            foregroundColor: Colors.blue,
                          ),
                          child: Text("Ganti"),
                        ),
                      ],
                    ),
                  ),
                  Text("Alamat", style: TextStyle(fontSize: 20)),
                  Container(
                    padding: EdgeInsets.symmetric(vertical: 5),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [
                        ClipRRect(
                          borderRadius: BorderRadiusGeometry.circular(50),
                          child: Icon(Icons.pin_drop_outlined, size: 20),
                        ),
                        SizedBox(width: 5),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                "Bagus — aku buatkan beberapa versi teks jaminan pembayaran yang rapi, singkat, dan sesuai dipakai di badge, konfirmasi checkout, receipt, atau UI kecil (tooltip). Pilih yang kamu suka atau bilang mau dipersingkat/dipersalinkan ke tone formal/ramah/teknis.",
                                style: TextStyle(fontSize: 16),
                              ),
                            ],
                          ),
                        ),
                        Radio<String>(
                          value: "A",
                          groupValue: selectedValue,
                          onChanged: (val) {
                            setState(() {
                              selectedValue = val;
                            });
                          },
                        ),
                      ],
                    ),
                  ),
                  Container(
                    padding: EdgeInsets.symmetric(vertical: 5),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [
                        ClipRRect(
                          borderRadius: BorderRadiusGeometry.circular(50),
                          child: Icon(Icons.pin_drop_outlined, size: 20),
                        ),
                        SizedBox(width: 5),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                "Bagus — aku buatkan beberapa versi teks jaminan pembayaran yang rapi, singkat, dan sesuai dipakai di badge, konfirmasi checkout, receipt, atau UI kecil (tooltip). Pilih yang kamu suka atau bilang mau dipersingkat/dipersalinkan ke tone formal/ramah/teknis.",
                                style: TextStyle(fontSize: 16),
                              ),
                            ],
                          ),
                        ),
                        Radio<String>(
                          value: "B",
                          groupValue: selectedValue,
                          onChanged: (val) {
                            setState(() {
                              selectedValue = val;
                            });
                          },
                        ),
                      ],
                    ),
                  ),
                  TextButton(
                    onPressed: () => context.push("/create-address"),
                    style: TextButton.styleFrom(
                      padding: EdgeInsets.zero,
                      foregroundColor: Colors.black,
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [
                        ClipRRect(
                          borderRadius: BorderRadiusGeometry.circular(50),
                          child: Container(
                            padding: EdgeInsets.all(5),
                            child: Icon(Icons.add, size: 30),
                          ),
                        ),
                        Expanded(
                          child: Text(
                            "Tambah Lokasi",
                            style: TextStyle(fontSize: 20),
                          ),
                        ),
                      ],
                    ),
                  ),
                  SizedBox(height: 100),
                ],
              ),
            ),
          ),
          Positioned(
            bottom: 0,
            left: 0,
            right: 0,
            child: Container(
              padding: EdgeInsets.symmetric(horizontal: 5, vertical: 10),
              color: Colors.white,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      Icon(Icons.check_circle, size: 16, color: Colors.green),
                      SizedBox(width: 5),
                      Expanded(
                        child: Text(
                          "Kami memastikan semua transaksi dilindungi dan diverifikasi.",
                        ),
                      ),
                    ],
                  ),
                  SizedBox(height: 5),
                  ElevatedButton(
                    onPressed: () => handlePayment(),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.blue,
                      foregroundColor: Colors.white,
                      minimumSize: Size(double.infinity, 50),
                    ),
                    child: Text("Konfirmasi", style: TextStyle(fontSize: 20)),
                  ),
                ],
              ),
            ),
          ),
          if (confirmation) ...[
            ModalBarrier(
              dismissible: true,
              color: Colors.black12,
              onDismiss: () {
                setState(() {
                  confirmation = false;
                });
              },
            ),
          ],
          Positioned(
            bottom: 0,
            left: 0,
            right: 0,
            child: AnimatedContainer(
              alignment: Alignment.bottomCenter,
              padding: EdgeInsets.symmetric(horizontal: 5, vertical: 15),
              constraints: BoxConstraints(
                maxHeight: confirmation ? targetheight : 0,
              ),
              duration: Duration(milliseconds: 300),
              color: Colors.white,
              child: confirmation
                  ? ListView.builder(
                    shrinkWrap: true,
                    physics: ClampingScrollPhysics(),
                      itemCount: struck.length + 1,
                      itemBuilder: (context, index) {
                        if (index < struck.length) {
                          final item = struck[index];
                          return Row(
                            children: [
                              Expanded(
                                child: Text(
                                  item["name"],
                                  style: TextStyle(fontSize: 16),
                                ),
                              ),
                              Text(
                                "${item["price"]}",
                                style: TextStyle(fontSize: 16),
                              ),
                            ],
                          );
                        }
                        if (index == struck.length) {
                          return Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Divider(
                                color: Colors.grey,
                                thickness: 2,
                                indent: 0,
                                endIndent: 0,
                              ),
                              Row(
                                children: [
                                  Expanded(
                                    child: Text(
                                      "Total",
                                      style: TextStyle(fontSize: 20),
                                    ),
                                  ),
                                  Text(
                                    "30.000.000",
                                    style: TextStyle(fontSize: 16),
                                  ),
                                ],
                              ),
                              SizedBox(height: 15),
                              Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                children: [
                                  Icon(
                                    Icons.check_circle,
                                    size: 16,
                                    color: Colors.green,
                                  ),
                                  SizedBox(width: 5),
                                  Expanded(
                                    child: Text(
                                      "Kami memastikan semua transaksi dilindungi dan diverifikasi.",
                                    ),
                                  ),
                                ],
                              ),
                              SizedBox(height: 10),
                              ElevatedButton(
                                onPressed: () {},
                                style: ElevatedButton.styleFrom(
                                  foregroundColor: Colors.white,
                                  backgroundColor: Colors.blue,
                                  minimumSize: Size(double.infinity, 50),
                                ),
                                child: Text("Bayar"),
                              ),
                            ],
                          );
                        }
                      },
                    )
                  : SizedBox.shrink(),
            ),
          ),
        ],
      ),
    );
  }
}
