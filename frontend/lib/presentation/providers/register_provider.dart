
import 'package:BeliAja/data/source/remote/auth_service.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class RegisterProvider extends ChangeNotifier {
  final AuthService authService = AuthService();
  bool _loading = false;
  final Map<String, String> _formData = {
    "username": "hallo",
    "email": "hallo",
    "password": "hallo",
    "confirm_password": "" 
  };
  final Map<String, dynamic> _error = {
    "error": false,
    "message": ""
  };

  Map<String, String> get formData => _formData;
  Map<String, dynamic> get error => _error;
  bool get loading => _loading;

  register() async {
    setError(false, "");
    notifyListeners();
    setLoading(true);
    try {
      final res = await authService.register(_formData);
      print(res);
      saveTokenState(res["token"]);
      return true;
    } catch (err) {
      print("REGISTER ERROR: $err");
      if (err is Map) {
        print(err);
        setError(true, err["message"]);
      }
      return false;
    } finally {
      setLoading(false);
    }
  }

  setLoading(bool value) {
    notifyListeners();
    _loading = value;
  }

  setError(bool error, String message) {
    notifyListeners();
    _error["error"] = error;
    _error["message"] = message;
    print(message);
  }

  saveTokenState(String token) async {
    final sharedPrefs = await SharedPreferences.getInstance();
    sharedPrefs.setString("token", token);
  }

  setFormData(String name, String value) {
    notifyListeners();
    _formData[name] = value;
  }
}