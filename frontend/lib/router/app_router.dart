import 'package:BeliAja/presentation/pages/detail_product_page.dart';
import 'package:BeliAja/presentation/pages/home_page.dart';
import 'package:BeliAja/presentation/pages/landing_page.dart';
import 'package:BeliAja/presentation/pages/login_page.dart';
import 'package:BeliAja/presentation/pages/profile_page.dart';
import 'package:BeliAja/presentation/pages/register_page.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:go_router/go_router.dart';

final appRouter = GoRouter(
  routes: [
    GoRoute(
      redirect: (context, state) async {
        final sharedPrefs = await SharedPreferences.getInstance();
        final token = sharedPrefs.getString("token");
        print(token);

        if (token == null || token.isEmpty) {
          return "/login";
        }
        return null;
      },
      path: '/home',
      builder: (context, state) => HomePage(),
      routes: [
        GoRoute(path: '/profile', builder: (context, state) => ProfilePage()),
        GoRoute(path: '/detail', builder: (context, state) => DetailProductPage()),
      ]
    ),
    GoRoute(path: '/', builder: (context, state) => LandingPage()),
    GoRoute(path: '/login', builder: (context, state) => LoginPage()),
    GoRoute(path: '/signin', builder: (context, state) => RegisterPage()),
  ],
);
