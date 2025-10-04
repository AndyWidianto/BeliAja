import "package:BeliAja/presentation/providers/users_provider.dart";
import "package:flutter/material.dart";
import "package:BeliAja/presentation/providers/login_provider.dart";
import "package:flutter_dotenv/flutter_dotenv.dart";
import "package:go_router/go_router.dart";
import "package:provider/provider.dart";

class LoginPage extends StatelessWidget {
  const LoginPage({super.key});

  @override
  Widget build(BuildContext context) {
    final content = context.watch<LoginProvider>();
    return Scaffold(
      body: SingleChildScrollView(
        child: Stack(
          children: [
            Column(
              children: [
                Image.asset(
                  "assets/images/go_shopping.png",
                  width: double.infinity,
                  fit: BoxFit.cover,
                ),
                Container(
                  padding: EdgeInsets.only(left: 10, right: 10),
                  child: Column(
                    children: [
                      Container(
                        alignment: Alignment.topLeft,
                        child: const Text(
                          "Login",
                          style: TextStyle(
                            fontSize: 30,
                            fontWeight: FontWeight.normal,
                          ),
                        ),
                      ),
                      FormLogin(),
                      TextButton(
                        onPressed: () => context.go("/signin"),
                        style: TextButton.styleFrom(
                          minimumSize: Size(double.infinity, 30),
                        ),
                        child: Text(
                          "Sign In",
                          style: TextStyle(color: Colors.black),
                        ),
                      ),
                      Container(
                        alignment: Alignment.topCenter,
                        child: const Text("or", style: TextStyle(fontSize: 14)),
                      ),
                      SizedBox(height: 10),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          ElevatedButton(
                            onPressed: () => context.go("/home"),
                            style: ElevatedButton.styleFrom(
                              backgroundColor: Colors.white,
                              padding: EdgeInsets.all(5),
                              minimumSize: Size(45, 45),
                            ),
                            child: ClipRRect(
                              borderRadius: BorderRadiusGeometry.circular(50),
                              child: Image.asset(
                                "assets/images/facebook.png",
                                width: 45,
                                height: 45,
                              ),
                            ),
                          ),
                          SizedBox(width: 8),
                          ElevatedButton(
                            onPressed: () => context.go("/home"),
                            style: ElevatedButton.styleFrom(
                              backgroundColor: Colors.white,
                              padding: EdgeInsets.all(5),
                              minimumSize: Size(45, 45),
                            ),
                            child: ClipRRect(
                              borderRadius: BorderRadiusGeometry.circular(50),
                              child: Image.asset(
                                "assets/images/google.png",
                                width: 45,
                                height: 45,
                              ),
                            ),
                          ),
                          SizedBox(width: 8),
                          ElevatedButton(
                            onPressed: () => context.go("/home"),
                            style: ElevatedButton.styleFrom(
                              backgroundColor: Colors.white,
                              padding: EdgeInsets.all(5),
                              minimumSize: Size(45, 45),
                            ),
                            child: ClipRRect(
                              borderRadius: BorderRadiusGeometry.circular(50),
                              child: Image.asset(
                                "assets/images/ios.png",
                                width: 45,
                                height: 45,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ),
            content.loading
                ? Positioned.fill(
                    child: Align(
                      alignment: Alignment.center,
                      child: Container(
                        padding: EdgeInsets.all(0.8),
                        width: double.infinity,
                        height: double.infinity,
                        color: const Color.fromARGB(104, 0, 0, 0),
                        child: Center(
                          child: CircularProgressIndicator(
                            color: const Color.fromARGB(255, 0, 0, 255),
                          ),
                        ),
                      ),
                    ),
                  )
                : SizedBox(height: 2),
          ],
        ),
      ),
    );
  }
}

class FormLogin extends StatefulWidget {
  const FormLogin({super.key});

  @override
  State<FormLogin> createState() => _FormLogin();
}

class _FormLogin extends State<FormLogin> {
  final _formKey = GlobalKey<FormState>();

  Future<void> handleLogin() async {
    if (!_formKey.currentState!.validate()) {
      print("Form tidak valid nih");
    }
    final success = await context.read<LoginProvider>().login();
    if (!mounted) return;
    if (!success) {
      return print("gagal login");
    }
    context.go("/home");
  }

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final contentRead = context.read<LoginProvider>();
    return Form(
      key: _formKey,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(height: 5),
          TextFormField(
            decoration: InputDecoration(
              labelText: "Email",
              prefixIcon: Icon(Icons.email_outlined),
              isDense: true,
              contentPadding: EdgeInsets.symmetric(
                vertical: 14,
                horizontal: 12,
              ),
            ),
            onChanged: (value) => contentRead.setUsername(value),
            validator: (value) {
              if (value == null || value.isEmpty) return 'Email wajib diisi';
              return null;
            },
          ),
          SizedBox(height: 15),
          TextFormField(
            decoration: InputDecoration(
              labelText: "Password",
              prefixIcon: Icon(Icons.lock_clock_outlined),
              isDense: true,
              contentPadding: EdgeInsets.symmetric(
                vertical: 14,
                horizontal: 12,
              ),
            ),
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Password wajib diisi';
              }
              return null;
            },
            onChanged: (value) => contentRead.setPassword(value),
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                children: [
                  Checkbox(value: true, onChanged: (value) {}),
                  SizedBox(width: 4),
                  const Text("remember me"),
                ],
              ),
              TextButton(
                onPressed: () {},
                child: const Text(
                  "forgot password",
                  style: TextStyle(color: Color.fromARGB(255, 0, 26, 255)),
                ),
              ),
            ],
          ),
          SizedBox(height: 10),
          ElevatedButton(
            onPressed: handleLogin,
            style: ElevatedButton.styleFrom(
              backgroundColor: Color.fromARGB(255, 0, 0, 255),
              minimumSize: Size(double.infinity, 50),
            ),
            child: Text("Login", style: TextStyle(color: Colors.white)),
          ),
        ],
      ),
    );
  }
}
