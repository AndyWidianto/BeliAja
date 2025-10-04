
import 'package:BeliAja/data/source/remote/dio_service.dart';

class UserService {

  final api = DioService.dio;
  getUsers() async {
    final users = await api.get("/users");
    return users;
  }
}