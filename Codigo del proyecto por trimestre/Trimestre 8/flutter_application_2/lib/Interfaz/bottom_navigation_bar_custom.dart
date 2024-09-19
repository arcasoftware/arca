import 'package:flutter/material.dart';

class BottomNavigationBarCustom extends StatelessWidget {
  final int selectedTab;
  final List<PersistentTabItem> items;
  final Function(int) onTabSelected;

  const BottomNavigationBarCustom({
    Key? key,
    required this.selectedTab,
    required this.items,
    required this.onTabSelected,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      currentIndex: selectedTab,
      onTap: onTabSelected,
      items: items.map((item) {
        return BottomNavigationBarItem(
          icon: Image.asset(
            item.iconPath, // Usar la ruta del archivo .gif
            width: 30.0, // Ajusta el tamaño según sea necesario
            height: 30.0,
          ),
          label: item.title,
        );
      }).toList(),
      selectedItemColor: Colors.black, // Color del texto del ítem seleccionado
      unselectedItemColor: Colors.grey, // Color del texto de los ítems no seleccionados
    );
  }
}

class PersistentTabItem {
  final Widget tab;
  final String title;
  final String iconPath; // Corregido 'ffinal' a 'final'

  PersistentTabItem({
    required this.tab,
    required this.title,
    required this.iconPath, // Acepta una ruta de imagen
  });
}
