import 'package:flutter/material.dart';
import './carrousel.dart'; // Este es el correct // Correcto controlador

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: PreferredSize(
        preferredSize: const Size.fromHeight(0), // Elimina la altura del AppBar
        child: AppBar(
          backgroundColor: Colors.transparent, // Hace el AppBar transparente
          elevation: 0, // Elimina la sombra del AppBar
        ),
      ),

      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Image.asset(
              'assets/icons/header.jpeg',
              width: double.infinity,
              height: 250,
              fit: BoxFit.cover,
            ),

          const SizedBox(height: 20), // Espacio entre la imagen y el texto

          // Texto debajo de la imagen
          // Subtítulo
          // Subtítulo alineado a la izquierda
          // Subtítulo alineado a la izquierda
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 16.0), // Margen lateral
            child: Text(
              'Sobre Nosotros',
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),

          const SizedBox(height: 10), // Espacio entre el subtítulo y el texto

          // Texto
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 16.0), // Margen lateral
            child: Text(
              'Contamos con los mejores estándares de calidad para traer a sus casas la mejor comida rápida que ustedes pueden degustar. Nos aseguramos que nuestra materia prima sea de la mejor calidad para contar con su total confiabilidad y siempre seamos tu primera opción. Te invitamos a Revisar nuestro menú en el siguiente link.',
              style: TextStyle(
                fontSize: 16,
              ),
              textAlign: TextAlign.justify, // Alinea el texto a ambos márgenes
            ),
          ),

          const SizedBox(height: 20),
           
           
         const SizedBox(height: 20),
            const CarouselComponent(),
            
            const SizedBox(height: 20),
            
            const Padding(
            padding: EdgeInsets.symmetric(horizontal: 16.0), // Margen lateral
            child: Text(
              'Metodos de pago',
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          
          const SizedBox(height: 10),

           // Texto
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 16.0), // Margen lateral
            child: Text(
              'Sin dinero No te estreses con pagar en efectivo nuetra app cuenta diferentes tipos de pagos nequi, daviplata o tarjeta.',
              style: TextStyle(
                fontSize: 16,
              ),
              textAlign: TextAlign.justify, // Alinea el texto a ambos márgenes
            ),
          ),
           // Espacio entre la imagen y el texto // Utiliza el componente sin argumentos
          ],
        ),
      ),
    );
  }
}