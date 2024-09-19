import 'dart:convert';
import 'package:http/http.dart' as http;

const String baseUrl = "http://192.168.1.12/storage"; // URL base de almacenamiento

// Mapa para almacenar las imágenes en caché
Map<String, Map<String, dynamic>> cachedImages = {};

class ImageService {
  // Método para obtener la imagen de un producto específico por su ID
  static Future<Map<String, dynamic>> fetchProductImageById(String productId) async {
    // Verifica si la imagen está en caché
    if (cachedImages.containsKey(productId)) {
      return cachedImages[productId]!;
    }

    try {
      // Realiza la solicitud HTTP para obtener la imagen
      final response = await http.get(Uri.parse('http://192.168.1.12/api/V1/images/productos'));

      if (response.statusCode == 200) {
        final imageData = json.decode(response.body);
        print('Fetched Image Data for Product $productId: $imageData');

        // Verifica si la respuesta contiene datos de imagen
        if (imageData['data'] != null && imageData['data'].isNotEmpty) {
          final image = imageData['data'][0];
          final imagePath = image['path']; // Ruta de la imagen en la respuesta
          final imageUrlFull = '$baseUrl/$imagePath'; // Construye la URL completa de la imagen

          print('Image URL Full: $imageUrlFull'); // Imprime la URL completa para verificar

          // Almacena la URL de la imagen en caché
          cachedImages[productId] = {'url': imageUrlFull};
          return {'url': imageUrlFull};
        } else {
          return {};
        }
      } else {
        throw Exception('Failed to load image for product $productId');
      }
    } catch (e) {
      print('Error fetching image for product $productId: $e');
      return {};
    }
  }

  // Método para limpiar la caché para un producto específico
  static void clearCacheForProduct(String id) {
    cachedImages.remove(id);
  }

  // Método para limpiar toda la caché
  static void clearAllCache() {
    cachedImages.clear();
  }
}
