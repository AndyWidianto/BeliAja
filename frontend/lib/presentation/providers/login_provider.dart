import "package:flutter/material.dart";
import "package:shared_preferences/shared_preferences.dart";
import "../../data/source/remote/auth_service.dart";

class LoginProvider extends ChangeNotifier {
  final AuthService authService = AuthService();
  String _username = "";
  String _password = "";
  bool _loading = false;
  
  bool get loading => _loading;

  login() async {
    notifyListeners();
    setLoading(true);
    try {
      final res = await authService.login(_username, _password);
      print(res);
      saveLoginState(res["token"]);
      setPassword("");
      setUsername("");
      return true;
    }
    catch (err) {
      return false;
    } finally {
      setLoading(false);
    }
  }

  saveLoginState(String token) async {
    if (token.isEmpty) return;
  
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString("token", token);
  }
  setUsername(String value) {
    _username = value;
    notifyListeners();
  }

  setPassword(String value) {
    _password = value;
    notifyListeners();
  }

  setLoading(bool value) {
    _loading = value;
    notifyListeners();
  }
}