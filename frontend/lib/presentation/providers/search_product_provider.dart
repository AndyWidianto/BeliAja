import "package:flutter/material.dart";

class SearchProductProvider extends ChangeNotifier {
  String _search = "";

  String get search => _search;

  setSearch(String value) {
    _search = value;
    notifyListeners();
  }
}