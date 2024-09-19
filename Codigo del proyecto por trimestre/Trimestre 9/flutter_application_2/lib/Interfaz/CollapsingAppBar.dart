import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../services/user_provider.dart';
import 'perfil.dart'; // Asegúrate de importar tu componente de perfil

class SimpleAppBar extends StatelessWidget implements PreferredSizeWidget {
  const SimpleAppBar({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final userProvider = Provider.of<UserProvider>(context);

    return AppBar(
      backgroundColor: const Color.fromARGB(255, 243, 50, 2),
      title: const Text(
        "LA CABAÑA",
        style: TextStyle(
          color: Colors.white,
          fontSize: 20.0, // Ajusta el tamaño del texto aquí
          fontWeight:
              FontWeight.bold, // Ajusta el grosor del texto si lo deseas
        ),
      ),

      // inicio actions
      actions: [
        Padding(
          padding: const EdgeInsets.all(8.0),
          child: ProfileAvatar(
            email: userProvider.email,
            isOnline: userProvider.isOnline,
          ),
        ),
      ],
    );
  }

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);
}
