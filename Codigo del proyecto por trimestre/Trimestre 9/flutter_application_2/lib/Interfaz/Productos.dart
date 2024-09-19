import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import '../services/imagenes.dart';

class Producto {
  final int id;
  final String nomProducto;
  final double precioProducto;
  final String detalle;
  final String codigo;
  final int categoriaId;

  const Producto({
    required this.id,
    required this.nomProducto,
    required this.precioProducto,
    required this.detalle,
    required this.codigo,
    required this.categoriaId,
  });

  factory Producto.fromJson(Map<String, dynamic> json) {
    return Producto(
      id: json['id'],
      nomProducto: json['nom_producto'],
      precioProducto: json['precio_producto'].toDouble(),
      detalle: json['detalle'],
      codigo: json['codigo'],
      categoriaId: json['categoria_id'],
    );
  }
}

Future<List<Producto>> fetchProductos() async {
  final response =
      await http.get(Uri.parse('http://192.168.1.5/api/V1/productos'));

  if (response.statusCode == 200) {
    final jsonResponse = json.decode(response.body);
    List<dynamic> productosJson = jsonResponse['data'];
    return productosJson
        .map((producto) => Producto.fromJson(producto))
        .toList();
  } else {
    throw Exception('Error al cargar los productos');
  }
}

class Productos extends StatefulWidget {
  const Productos({Key? key}) : super(key: key);

  @override
  _ProductosPageState createState() => _ProductosPageState();
}

class _ProductosPageState extends State<Productos> {
  late Future<List<Producto>> futureProductos;

  @override
  void initState() {
    super.initState();
    futureProductos = fetchProductos();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Lista de Productos'),
      ),
      body: FutureBuilder<List<Producto>>(
        future: futureProductos,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Center(child: Text('Error: ${snapshot.error}'));
          } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return const Center(child: Text('No hay productos disponibles'));
          } else {
            return ListView.builder(
              itemCount: snapshot.data!.length,
              itemBuilder: (context, index) {
                final producto = snapshot.data![index];

                return Card(
                  margin: const EdgeInsets.all(10.0),
                  child: ListTile(
                    leading: FutureBuilder<Map<String, dynamic>>(
                      future: ImageService.fetchProductImageById(
                          producto.id.toString()),
                      builder: (context, imageSnapshot) {
                        if (imageSnapshot.connectionState == ConnectionState.waiting) {
                          return const CircularProgressIndicator();
                        } else if (imageSnapshot.hasError ||
                            !imageSnapshot.hasData ||
                            imageSnapshot.data!.isEmpty) {
                          return const Icon(Icons.image_not_supported);
                        } else {
                          final imageUrl = imageSnapshot.data!['url'];
                          return Image.network(
                            imageUrl,
                            width: 50,
                            height: 50,
                            fit: BoxFit.cover,
                          );
                        }
                      },
                    ),
                    title: Text(producto.nomProducto),
                    subtitle: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Precio: \$${producto.precioProducto.toString()}'),
                        Text('Detalle: ${producto.detalle}'),
                        Text('Código: ${producto.codigo}'),
                      ],
                    ),
                    trailing: Text('Categoría: ${producto.categoriaId}'),
                  ),
                );
              },
            );
          }
        },
      ),
    );
  }
}
