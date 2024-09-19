import 'package:flutter/material.dart';
import 'package:flutter/services.dart'; // Para las restricciones de entrada
import 'package:http/http.dart' as http;
import 'dart:convert'; // Para codificar y decodificar JSON
import 'package:flutter_application_2/main.dart'; // Importa el archivo main para redirigir

class RegisterPage extends StatelessWidget {
  const RegisterPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final bool isSmallScreen = MediaQuery.of(context).size.width < 600;

    return Scaffold(
      body: Center(
        child: SingleChildScrollView(
          child: isSmallScreen
              ? Column(
                  mainAxisSize: MainAxisSize.min,
                  children: const [
                    _Logo(),
                    _FormContent(),
                  ],
                )
              : Container(
                  padding: const EdgeInsets.all(32.0),
                  constraints: const BoxConstraints(maxWidth: 800),
                  child: Row(
                    children: const [
                      Expanded(child: _Logo()),
                      Expanded(
                        child: Center(child: _FormContent()),
                      ),
                    ],
                  ),
                ),
        ),
      ),
    );
  }
}

class _Logo extends StatelessWidget {
  const _Logo({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final bool isSmallScreen = MediaQuery.of(context).size.width < 600;

    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        //IMAGEN LOGO
        Image.asset(
          'assets/icons/logo.png',
          width: isSmallScreen ? 200 : 200,
        ),

        //texto registrer
        Padding(
          padding: const EdgeInsets.all(16.0),
          child: Text(
            "REGISTRER!",
            textAlign: TextAlign.center,
            style: TextStyle(
              fontSize: isSmallScreen ? 30.0 : 30.0,
              fontWeight: FontWeight.bold,
              color: Colors.black,
            ),
          ),
        ),
      ],
    );
  }
}

class _FormContent extends StatefulWidget {
  const _FormContent({Key? key}) : super(key: key);

  @override
  State<_FormContent> createState() => __FormContentState();
}

class __FormContentState extends State<_FormContent> {
  bool _isPasswordVisible = false;
  bool _isConfirmPasswordVisible = false;
  bool _acceptTerms = false;
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  final TextEditingController _cedulaController = TextEditingController();
  final TextEditingController _nombreController = TextEditingController();
  final TextEditingController _fechaNacimientoController =
      TextEditingController();
  final TextEditingController _direccionController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _telefonoController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  final TextEditingController _confirmPasswordController =
      TextEditingController();
  String _selectedDocumentType = 'CC';
  String _selectedGender = 'Masculino';

  Future<void> _register() async {
    final String url =
        'http://192.168.1.5/api/V1/registro'; // Reemplaza con la URL de tu API
    final Map<String, dynamic> requestBody = {
      'id': _cedulaController.text,
      'name': _nombreController.text,
      'tipo_doc': _selectedDocumentType,
      'tel': _telefonoController.text,
      'fecha_naci': _fechaNacimientoController.text,
      'genero': _selectedGender,
      'direccion': _direccionController.text,
      'email': _emailController.text,
      'password': _passwordController.text,
      'password_confirmation': _confirmPasswordController.text,
    };

//logica para la muestra de respuesta de la api exitoso o error
    try {
      final response = await http.post(
        Uri.parse(url),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode(requestBody),
      );

      // Decodifica la respuesta JSON
      final responseJson = jsonDecode(response.body);

      // Imprime la respuesta en la consola para verificar
      print('Response status: ${response.statusCode}');
      print('Response body: ${response.body}');

      // Accede al campo 'message' directamente
      if (responseJson.containsKey('message')) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(responseJson['message']),
            backgroundColor: Colors.green,
          ),
        );

          Future.delayed(const Duration(seconds: 2), () {
      Navigator.of(context).pushAndRemoveUntil(
        MaterialPageRoute(builder: (context) => const MyApp()),
        (Route<dynamic> route) => false, // Elimina todas las rutas anteriores
      );
    });

      } else {
        // Si no se encuentra el mensaje de registro exitos, muestra la respuesta completa
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('Respuesta inesperada de la API: ${response.body}'),
            backgroundColor: Colors.red,
          ),
        );
      }
    } catch (error) {
      // Maneja errores de red o excepciones
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Error de red: $error'),
          backgroundColor: Colors.red,
        ),
      );
    }
  }
//fin de manejo de respuesta

  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: const BoxConstraints(maxWidth: 300),
      child: Form(
        key: _formKey,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            //texto titulo
            const Align(
              alignment: Alignment.centerLeft,
              child: Text(
                'Datos Personales',
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),

            //campo nuemro de cedula
            _gap(height: 8.0),
            TextFormField(
              controller: _cedulaController,
              keyboardType: TextInputType.number,
              inputFormatters: [FilteringTextInputFormatter.digitsOnly],
              decoration: const InputDecoration(
                labelText: 'Cédula',
                hintText: 'Ingrese su cédula',
                border: OutlineInputBorder(),
              ),
            ),

            //campo tipo de documento
            _gap(),
            DropdownButtonFormField<String>(
              value: _selectedDocumentType,
              items: ['CC', 'TI']
                  .map((type) => DropdownMenuItem(
                        value: type,
                        child: Text(type),
                      ))
                  .toList(),
              onChanged: (value) {
                setState(() {
                  _selectedDocumentType = value ?? 'CC';
                });
              },
              decoration: const InputDecoration(
                labelText: 'Tipo de Documento',
                border: OutlineInputBorder(),
              ),
            ),

            //campo nombre
            _gap(),
            TextFormField(
              controller: _nombreController,
              decoration: const InputDecoration(
                labelText: 'Nombre Completo',
                hintText: 'Ingrese su nombre completo',
                border: OutlineInputBorder(),
              ),
            ),

            //campo fecha naciminto
            _gap(),
            TextFormField(
              controller: _fechaNacimientoController,
              keyboardType: TextInputType.datetime,
              decoration: const InputDecoration(
                labelText: 'Fecha de Nacimiento',
                hintText: 'Ingrese su fecha de nacimiento',
                border: OutlineInputBorder(),
              ),
            ),

            //campo genero
            _gap(),
            DropdownButtonFormField<String>(
              value: _selectedGender,
              items: ['Masculino', 'Femenino']
                  .map((gender) => DropdownMenuItem(
                        value: gender,
                        child: Text(gender),
                      ))
                  .toList(),
              onChanged: (value) {
                setState(() {
                  _selectedGender = value ?? 'Masculino';
                });
              },
              decoration: const InputDecoration(
                labelText: 'Género',
                border: OutlineInputBorder(),
              ),
            ),

            //texto titulo
            _gap(height: 32.0),
            const Align(
              alignment: Alignment.centerLeft,
              child: Text(
                'Datos de Cuenta',
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),

            //campo direccion
            _gap(height: 8.0),
            TextFormField(
              controller: _direccionController,
              decoration: const InputDecoration(
                labelText: 'Dirección',
                hintText: 'Ingrese su dirección',
                border: OutlineInputBorder(),
              ),
            ),

            //campo correo
            _gap(),
            TextFormField(
              controller: _emailController,
              validator: (value) {
                if (value == null || value.isEmpty) {
                  return 'Please enter an email';
                }
                bool emailValid = RegExp(
                        r"^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+")
                    .hasMatch(value);
                if (!emailValid) {
                  return 'Please enter a valid email';
                }
                return null;
              },
              decoration: const InputDecoration(
                labelText: 'Correo Electrónico',
                hintText: 'Ingrese su correo electrónico',
                prefixIcon: Icon(Icons.email_outlined),
                border: OutlineInputBorder(),
              ),
            ),

            //campo telefono
            _gap(),
            TextFormField(
              controller: _telefonoController,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                labelText: 'Teléfono',
                hintText: 'Ingrese su teléfono',
                border: OutlineInputBorder(),
              ),
            ),

            //campo contraseña
            _gap(),
            TextFormField(
              controller: _passwordController,
              validator: (value) {
                if (value == null || value.isEmpty) {
                  return 'Please enter a password';
                }
                if (value.length < 6) {
                  return 'Password must be at least 6 characters';
                }
                return null;
              },
              obscureText: !_isPasswordVisible,
              decoration: InputDecoration(
                labelText: 'Contraseña',
                hintText: 'Ingrese su contraseña',
                prefixIcon: const Icon(Icons.lock_outline),
                border: const OutlineInputBorder(),
                suffixIcon: IconButton(
                  icon: Icon(
                    _isPasswordVisible
                        ? Icons.visibility
                        : Icons.visibility_off,
                  ),
                  onPressed: () {
                    setState(() {
                      _isPasswordVisible = !_isPasswordVisible;
                    });
                  },
                ),
              ),
            ),

            //campo comfirmar contraseña
            _gap(),
            TextFormField(
              controller: _confirmPasswordController,
              validator: (value) {
                if (value == null || value.isEmpty) {
                  return 'Please confirm your password';
                }
                if (value != _passwordController.text) {
                  return 'Passwords do not match';
                }
                return null;
              },
              obscureText: !_isConfirmPasswordVisible,
              decoration: InputDecoration(
                labelText: 'Confirmar Contraseña',
                hintText: 'Confirme su contraseña',
                prefixIcon: const Icon(Icons.lock_outline),
                border: const OutlineInputBorder(),
                suffixIcon: IconButton(
                  icon: Icon(
                    _isConfirmPasswordVisible
                        ? Icons.visibility
                        : Icons.visibility_off,
                  ),
                  onPressed: () {
                    setState(() {
                      _isConfirmPasswordVisible = !_isConfirmPasswordVisible;
                    });
                  },
                ),
              ),
            ),

            //campo aceptar terminos
            _gap(),
            Row(
              children: [
                Checkbox(
                  value: _acceptTerms,
                  onChanged: (value) {
                    setState(() {
                      _acceptTerms = value!;
                    });
                  },
                ),
                const Expanded(
                  child: Text(
                    'Acepto los términos y condiciones',
                    style: TextStyle(fontSize: 12.0),
                  ),
                ),
              ],
            ),

            //boton de registro
            _gap(),
            Container(
              width: double.infinity,
              child: ElevatedButton(
                onPressed: () {
                  if (_formKey.currentState?.validate() == true &&
                      _acceptTerms) {
                    _register();
                  } else {
                    print(
                        'Por favor, completa el formulario correctamente y acepta los términos.');
                  }
                },
                child: const Text('REGISTRARSE'),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Color.fromARGB(
                      255, 243, 50, 2), // Color de fondo (ejemplo: morado)
                  foregroundColor: Color.fromARGB(
                      255, 255, 255, 255), // Color del texto (ejemplo: blanco)
                ),
              ),
            ),

          ],
        ),
      ),
    );
  }

  SizedBox _gap({double height = 16.0}) {
    return SizedBox(height: height);
  }
}
