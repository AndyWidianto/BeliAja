import "package:BeliAja/presentation/providers/register_provider.dart";
import "package:flutter/material.dart";
import "package:go_router/go_router.dart";
import "package:provider/provider.dart";

class RegisterPage extends StatelessWidget {
  const RegisterPage({super.key});

  @override
  Widget build(BuildContext context) {
    final content = context.watch<RegisterProvider>();
    return Scaffold(
      body: SingleChildScrollView(
        scrollDirection: Axis.vertical,
        child: Stack(
          children: [
            Column(
              children: [
                Image.asset(
                  "assets/images/go_shopping2.png",
                  width: double.infinity,
                  fit: BoxFit.cover,
                ),
                Container(
                  padding: EdgeInsets.symmetric(horizontal: 10),
                  child: FormRegister(),
                ),
                SizedBox(height: 10)
              ],
            ),
            content.loading
                ? Positioned.fill(
                    child: Align(
                      alignment: Alignment.center,
                      child: Container(
                        width: double.infinity,
                        height: double.infinity,
                        padding: EdgeInsets.all(3),
                        color: const Color.fromARGB(101, 0, 0, 0),
                        child: Center(
                          child: CircularProgressIndicator(color: Colors.blue),
                        ),
                      ),
                    ),
                  )
                : SizedBox(height: 4),
          ],
        ),
      ),
    );
  }
}

class FormRegister extends StatefulWidget {
  const FormRegister({super.key});

  @override
  State<FormRegister> createState() => _StateFormRegister();
}

class _StateFormRegister extends State<FormRegister> {
  final _formKey = GlobalKey<FormState>();

  Future<void> handleRegister() async {
    final content = context.read<RegisterProvider>();
    content.setError(false, "");
    if (!_formKey.currentState!.validate()) {
      return print("ada yang salah nih");
    }
    final success = await content.register();
    print("apakah success $success");
    if (!mounted) return;
    if (!success && !_formKey.currentState!.validate()) {
      return print("Waah error nih");
    }
    context.go("/home");
  }

  @override
  Widget build(BuildContext context) {
    final content = context.read<RegisterProvider>();
    final watchContent = context.watch<RegisterProvider>();
    return Form(
      key: _formKey,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            alignment: Alignment.topLeft,
            child: const Text(
              "Sign In",
              style: TextStyle(fontSize: 30, fontWeight: FontWeight.normal),
            ),
          ),
          SizedBox(height: 5),
          TextFormField(
            decoration: InputDecoration(
              labelText: "Username",
              prefixIcon: Icon(Icons.account_circle_outlined),
              isDense: true,
              contentPadding: EdgeInsets.symmetric(
                vertical: 14,
                horizontal: 12,
              ),
            ),
            initialValue: watchContent.formData["username"],
            onChanged: (value) => content.setFormData("username", value),
            validator: (value) {
              if (value == null || value.isEmpty) return 'Email wajib diisi';
              return null;
            },
          ),
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
            onChanged: (value) => content.setFormData("email", value),
            initialValue: watchContent.formData["email"],
            validator: (value) {
              if (watchContent.error["error"]) return watchContent.error["message"];
              if (value == null || value.isEmpty) return 'Email wajib diisi';
              return null;
            },
          ),
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
            initialValue: watchContent.formData["password"],
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Password wajib diisi';
              }
              if (value != watchContent.formData["confirm_password"]) {
                return "Password dan confirm Password tidak sama";
              }
              return null;
            },
            onChanged: (value) => content.setFormData("password", value),
          ),
          TextFormField(
            decoration: InputDecoration(
              labelText: "Confirm Password",
              prefixIcon: Icon(Icons.lock_clock_outlined),
              isDense: true,
              contentPadding: EdgeInsets.symmetric(
                vertical: 14,
                horizontal: 12,
              ),
            ),
            initialValue: watchContent.formData["confirm_password"],
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Password wajib diisi';
              }
              return null;
            },
            onChanged: (value) =>
                content.setFormData("confirm_password", value),
          ),
          SizedBox(height: 30),
          ElevatedButton(
            onPressed: handleRegister,
            style: ElevatedButton.styleFrom(
              backgroundColor: Color.fromARGB(255, 0, 26, 255),
              minimumSize: Size(double.infinity, 50),
            ),
            child: Text("Sign In", style: TextStyle(color: Colors.white)),
          ),
          TextButton(
            onPressed: () => context.go("/login"),
            style: TextButton.styleFrom(minimumSize: Size(double.infinity, 30)),
            child: Text("Login", style: TextStyle(color: Colors.black)),
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
    );
  }
}
