import 'package:BeliAja/data/source/remote/users_service.dart';
import 'package:flutter/material.dart';

class UsersProvider extends ChangeNotifier {
  final UserService userService = UserService();
  List<dynamic> users = [];

  handleGetUsers() async {
    try {
      final res = await userService.getUsers();
      print(res);
      return res;
    } catch (err) {
      print(err);
    }
  }
}