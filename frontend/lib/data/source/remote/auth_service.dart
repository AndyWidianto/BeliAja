import "package:dio/dio.dart";

import "./dio_service.dart";

class AuthService {
  final api = DioService.dio;

  login(username, password) async {
    final FormData = {"email": username, "password": password};
    final res = await api.post("/login", data: FormData);
    return res.data;
  }

  register(data) async {
    try {
      final res = await api.post("/register", data: data);
      return res.data;
    } on DioException catch (err) {
      if (err.response != null) {
        throw err.response?.data;
      } else {
        throw {"message": err.message ?? "Terjadi kesalahan"};
      }
    }
  }
}
