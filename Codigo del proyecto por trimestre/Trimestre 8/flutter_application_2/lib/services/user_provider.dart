import 'package:flutter/material.dart';

class UserProvider with ChangeNotifier {
  String _email = '';
  bool _isOnline = false;

  String get email => _email;
  bool get isOnline => _isOnline;

  void setUser(String email, bool isOnline) {
    _email = email;
    _isOnline = isOnline;
    notifyListeners();
  }
}
