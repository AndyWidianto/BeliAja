
import 'package:dio/dio.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

class DioService {

  final String baseUrl = dotenv.env["BASE_URL"] ?? "";
  static final Dio _dio = Dio(
    BaseOptions(
      baseUrl: "http://192.168.160.5:3000/api",
      connectTimeout: Duration(seconds: 30),
      receiveTimeout: Duration(seconds: 30),
      headers: {
        "Content-Type": "application/json"
      }
    )
  );

  static Dio get dio => _dio;
}