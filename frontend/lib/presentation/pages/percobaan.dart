import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';

class InfiniteScrollPage extends StatefulWidget {
  const InfiniteScrollPage({super.key});

  @override
  _InfiniteScrollPage createState() => _InfiniteScrollPage();
}

class _InfiniteScrollPage extends State<InfiniteScrollPage> {
  final ScrollController _scrollController = ScrollController();
  List<int> items = List.generate(20, (index) => index);
  bool isLoading = false;

  final List<String> imgList = [
    "https://www.usnews.com/object/image/00000196-6390-d12c-a7b7-ebf1e11c0000/new-main-image-monument-valley-credit-getty-images.jpg"
        "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg",
    "https://www.usnews.com/object/image/00000166-4034-dc8c-a576-69ff3f110000/25-jackson-hole-getty.jpg",
    "https://www.usnews.com/object/image/00000162-f3a3-d0d5-a57f-fbf3a0150000/18-milford-sound-fjords-national-park.jpg",
  ];

  @override
  void initState() {
    super.initState();

    _scrollController.addListener(() {
      if (_scrollController.position.pixels ==
          _scrollController.position.maxScrollExtent) {
        _loadMore();
      }
    });
  }

  Future<void> _loadMore() async {
    if (isLoading) return;
    setState(() => isLoading = true);

    await Future.delayed(Duration(seconds: 5));

    setState(() {
      items.addAll(List.generate(10, (index) => items.length + index));
      isLoading = false;
    });
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Infinite scroll examle")),
      body: ListView.builder(
        controller: _scrollController,
        itemCount: items.length + 2,
        itemBuilder: (context, index) {
          if (index == 0) {
            return CarouselSlider(
            options: CarouselOptions(
              height: 150, 
              autoPlay: true, 
              enlargeCenterPage: true,
              aspectRatio: 16/9,
              viewportFraction: 1.0,
              autoPlayCurve: Curves.fastOutSlowIn
            ),
            items: imgList.map((item) => Container(
              padding: EdgeInsets.only(left: 5, right: 5),
              child: ClipRRect(
              borderRadius: BorderRadiusGeometry.circular(12),
              child: Image.network(item, fit: BoxFit.cover, width: double.infinity),
            ),
            )).toList(),
          );}
          else if (index <= items.length) {
            return ListTile(title: Text("Item ${items[index - 1]}"));
          } else {
            return Padding(
              padding: EdgeInsets.symmetric(vertical: 16),
              child: Center(
                child: isLoading
                    ? CircularProgressIndicator()
                    : Text("Tidak ada data lagi"),
              ),
            );
          }
        },
      ),
    );
  }
}
