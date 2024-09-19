// perfil.dart
import 'package:flutter/material.dart';

class ProfileAvatar extends StatelessWidget {
  final String email;
  final bool isOnline;

  const ProfileAvatar({
    Key? key,
    required this.email,
    this.isOnline = false,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // Extraer la inicial del correo electrónico
    final initial = email.isNotEmpty ? email[0].toUpperCase() : '?';

    return Stack(
      children: [
        CircleAvatar(
          radius: 25.0, // Tamaño del avatar
          backgroundColor: Colors.grey[300], // Color de fondo si no hay imagen
          child: Text(
            initial,
            style: TextStyle(
              color: Colors.white,
              fontSize: 18.0,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
        Positioned(
          right: 0,
          bottom: 0,
          child: Container(
            width: 12.0,
            height: 12.0,
            decoration: BoxDecoration(
              color: isOnline ? Colors.green : Colors.grey, // Cambia el color según el estado
              shape: BoxShape.circle,
              border: Border.all(
                color: Colors.white,
                width: 2.0,
              ),
            ),
          ),
        ),
      ],
    );
  }
}
