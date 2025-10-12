import 'package:BeliAja/presentation/providers/search_product_provider.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class HomeNavigasi extends StatelessWidget {
  final GoRouterState state;
  final Widget child;
  const HomeNavigasi({super.key, required this.state, required this.child});

  int _getIndex(String location) {
    if (location.startsWith("/search")) return 1;
    if (location.startsWith("/cart")) return 2;
    if (location.startsWith("/bags")) return 3;
    if (location.startsWith("/profile")) return 4;
    return 0;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: state.uri.path != "/profile" ? AppBar(title: SearchProduct()) : AppBar(),
      body: child,
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _getIndex(state.uri.path),
        onTap: (index) {
          switch (index) {
            case 0:
              context.go("/home");
              break;
            case 1:
              context.go("/search");
              break;
            case 2:
              context.go("/cart");
              break;
            case 3: 
              context.go("/bags");
              break;
            case 4:
              context.go("/profile");
              break;
          }
        },
        type: BottomNavigationBarType.fixed,
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home_outlined),
            label: "Home"
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.search_outlined),
            label: "Search",
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.shopping_cart_outlined),
            label: "Search",
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.shopping_bag_outlined),
            label: "Search",
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.account_circle_outlined),
            label: "Profile",
          ),
        ],
      ),
    );
  }
}

class SearchProduct extends StatefulWidget {
  const SearchProduct({super.key});

  @override
  State<SearchProduct> createState() => _SearchProduct();
}

class _SearchProduct extends State<SearchProduct> {
  void search(String value) {
    context.go("/search");
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        TextField(
          onSubmitted: search,
          decoration: InputDecoration(
            hintText: "Search Products",
            prefixIcon: Icon(Icons.search),
            border: OutlineInputBorder(borderRadius: BorderRadius.circular(50)),
            contentPadding: const EdgeInsets.symmetric(horizontal: 16),
          ),
        ),
      ],
    );
  }
}
