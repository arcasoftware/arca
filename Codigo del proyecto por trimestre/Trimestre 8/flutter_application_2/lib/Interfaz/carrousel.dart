import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';

class CarouselComponent extends StatelessWidget {
  const CarouselComponent({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      // color: const Color(0x737373),
      elevation: 5.0, // Sombra del card
      shape: RoundedRectangleBorder(
        borderRadius:
            BorderRadius.circular(15.0), // Bordes redondeados del card
      ),


      child: ClipRRect(
        borderRadius: BorderRadius.circular(
            15.0), // Asegura que el contenido del card también tenga bordes redondeados
        child: Padding(
          padding: const EdgeInsets.symmetric(
              vertical:
                  12.0), // Espaciado vertical para separar las imágenes del borde
          child: CarouselSlider(
            options: CarouselOptions(
              height: 200.0, // Altura del carrusel
              autoPlay: true, // Reproducción automática
              enlargeCenterPage: true, // Agranda la imagen en el centro
              aspectRatio: 16 / 9,
              viewportFraction: 1.0,
              // Relación de aspecto
              enableInfiniteScroll: true, // Desplazamiento infinito
              autoPlayInterval: const Duration(
                  seconds: 5), // Intervalo de tiempo para el autoplay
            ),


            items: [
              'assets/icons/tacos.jpeg',
              'assets/icons/hambur.jpeg',
              'assets/icons/hamburguesa.jpeg',

            ].map((imagePath) {
              return Builder(
                builder: (BuildContext context) {
                  return Padding(
                    padding: const EdgeInsets.symmetric(
                        horizontal: 8.0), // Espaciado horizontal entre imágenes
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(
                          10.0), // Bordes redondeados en cada imagen
                      child: Image.asset(
                        imagePath,
                        fit: BoxFit.cover, // Ajusta la imagen sin distorsión
                        width:
                            double.infinity, // Ocupa todo el ancho disponible
                      ),
                    ),
                  );
                },
              );
            }).toList(),
          ),
        ),
      ),
    );
  }
}
