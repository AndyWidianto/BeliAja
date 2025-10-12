import 'package:BeliAja/presentation/pages/bag_page.dart';
import 'package:BeliAja/presentation/pages/cart_page.dart';
import 'package:BeliAja/presentation/pages/detail_product_page.dart';
import 'package:BeliAja/presentation/pages/home_page.dart';
import 'package:BeliAja/presentation/pages/landing_page.dart';
import 'package:BeliAja/presentation/pages/login_page.dart';
import 'package:BeliAja/presentation/pages/percobaan.dart';
import 'package:BeliAja/presentation/pages/profile_page.dart';
import 'package:BeliAja/presentation/pages/register_page.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:BeliAja/presentation/navigation/home_navigasi.dart';
import 'package:BeliAja/presentation/pages/search_product_page.dart';
import 'package:go_router/go_router.dart';

final appRouter = GoRouter(
  routes: [
    ShellRoute(
      redirect: (context, state) async {
        final sharedPrefs = await SharedPreferences.getInstance();
        final token = sharedPrefs.getString("token");

        if (token == null || token.isEmpty) {
          return "/login";
        }
        return null;
      },
      builder: (context, state, child) {
        return HomeNavigasi(state: state, child: child);
      },
      routes: [
        GoRoute(path: '/home', builder: (context, state) => HomePage()),
        GoRoute(path: '/profile', builder: (context, state) => ProfilePage()),
        GoRoute(path: '/cart', builder: (context, state) => CartPage()),
        GoRoute(path: '/bags', builder: (context, state) => BagPage()),
        GoRoute(
          path: '/search',
          builder: (context, state) => SearchProductPage(),
        ),
        GoRoute(
          path: '/detail',
          builder: (context, state) => DetailProductPage(),
        ),
      ],
    ),
    GoRoute(path: '/', builder: (context, state) => LandingPage()),
    GoRoute(path: '/login', builder: (context, state) => LoginPage()),
    GoRoute(path: '/signin', builder: (context, state) => RegisterPage()),
  ],
);
