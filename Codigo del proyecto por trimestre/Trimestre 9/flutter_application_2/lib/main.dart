import 'package:flutter/material.dart';
import 'package:flutter_application_2/Interfaz/HomePage.dart';
import 'Interfaz/bottom_navigation_bar_custom.dart';
import 'Interfaz/login_page.dart';  // Importa tu página de login aquí
import 'Interfaz/CollapsingAppBar.dart';  // Importa tu página de home aquí
import 'Interfaz/registrer.dart';  // Importa tu página de registro aquí
import 'Interfaz/Productos.dart';
import 'package:provider/provider.dart';
import './services/user_provider.dart';

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => UserProvider(),
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  int _selectedTab = 0;
  
//importacion ollamdo de iconos de formato git.
  final List<PersistentTabItem> _items = [
    PersistentTabItem(
      tab: const HomePage(),
      title: 'Home',
      iconPath: 'assets/icons/home.gif', // Reemplaza con tu archivo .gif
    ),

    PersistentTabItem(
    tab: const Productos(), // Puedes usar una pantalla existente o un placeholder
    title: 'Productos',
    iconPath: 'assets/icons/store.gif', // Ruta del nuevo ícono
    ),

    PersistentTabItem(
      tab: const RegisterPage(),
      title: 'Registrar',
      iconPath: 'assets/icons/user.gif', // Reemplaza con tu archivo .gif
    ),
    
    PersistentTabItem(
      tab: const LoginPage(), // Utiliza el componente de Login aquí
      title: 'Login',
      iconPath: 'assets/icons/settings.gif', // Reemplaza con tu archivo .gif
    ),
  ];
  //fin

  void _onTabSelected(int index) {
    setState(() {
      _selectedTab = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'App sena 01',
      home: Scaffold(
        appBar: const SimpleAppBar(), // Usa el componente SimpleAppBar aquí
        body: _items[_selectedTab].tab, // Muestra la pestaña seleccionada
        bottomNavigationBar: BottomNavigationBarCustom(
          selectedTab: _selectedTab,
          items: _items,
          onTabSelected: _onTabSelected,
        ),
      ),
    );
  }
}
