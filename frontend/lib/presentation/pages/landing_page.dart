import "package:flutter/material.dart";
import "package:go_router/go_router.dart";
import "package:shared_preferences/shared_preferences.dart";

class LandingPage extends StatefulWidget {
  const LandingPage({super.key});

  @override 
  State<LandingPage> createState() => _LandingPage();
}

class _LandingPage extends State<LandingPage> {


  @override 
  void initState() {
    super.initState();
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Image.asset(
            "assets/images/bg_login.png",
            width: double.infinity,
            height: double.infinity,
            fit: BoxFit.cover,
          ),
          Positioned.fill(
            bottom: 60,
            child: Center(
              child: Align(
                alignment: Alignment.bottomCenter,
                child: ElevatedButton(
                  onPressed: () => context.go("/login"),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.yellow,
                    minimumSize: Size(250, 50),
                    padding: EdgeInsets.all(4),
                  ),
                  child: const Text(
                    "Login",
                    style: TextStyle(color: Colors.white),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
