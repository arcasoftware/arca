import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:flutter_application_2/main.dart';
import '../services/user_provider.dart';
import 'package:provider/provider.dart'; // Importa el archivo main para redirigir

class LoginPage extends StatefulWidget {
  const LoginPage({Key? key}) : super(key: key);

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  bool _isPasswordVisible = false;
  bool _rememberMe = false;

  Future<void> _login() async {
    if (_formKey.currentState?.validate() ?? false) {
      final email = _emailController.text;
      final password = _passwordController.text;

      final url = Uri.parse('http://192.168.1.5/api/V1/loginmovil'); // Cambia a tu URL de API
      final requestBody = {'email': email, 'password': password};

     try {
      final response = await http.post(
        url,
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode(requestBody),
      );

      final responseJson = jsonDecode(response.body);

      print('Response status: ${response.statusCode}');
      print('Response body: ${response.body}');

      if (response.statusCode == 200) {
        // Comprueba si hay un objeto 'user' y 'token' en la respuesta
        if (responseJson.containsKey('user') && responseJson.containsKey('token')) {
          // Guarda el email y el estado de autenticación en el Provider
          Provider.of<UserProvider>(context, listen: false).setUser(email, true);

          // Muestra el mensaje de la API, si está presente
          if (responseJson.containsKey('message')) {
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(
                content: Text(responseJson['message']),
                backgroundColor: Colors.green,
              ),
            );
          }

          Future.delayed(const Duration(seconds: 5), () {
            Navigator.of(context).pushAndRemoveUntil(
              MaterialPageRoute(builder: (context) => const MyApp()),
              (Route<dynamic> route) => false,
            );
          });
        } else {
          // Muestra una respuesta inesperada si no se encuentra el objeto 'user' o 'token'
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              content: Text('Respuesta inesperada de la API: ${response.body}'),
              backgroundColor: Colors.red,
            ),
          );
        }
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('Error en la solicitud: ${response.statusCode}'),
            backgroundColor: Colors.red,
          ),
        );
      }
    } catch (error) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Error de red: $error'),
          backgroundColor: Colors.red,
        ),
      );
    }
  }
}

  @override
  Widget build(BuildContext context) {
    final bool isSmallScreen = MediaQuery.of(context).size.width < 600;

    return Scaffold(
      body: Center(
        child: SingleChildScrollView(
          child: isSmallScreen
              ? Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    _Logo(),
                    _FormContent(
                      formKey: _formKey,
                      emailController: _emailController,
                      passwordController: _passwordController,
                      isPasswordVisible: _isPasswordVisible,
                      rememberMe: _rememberMe,
                      onPasswordVisibilityToggle: () {
                        setState(() {
                          _isPasswordVisible = !_isPasswordVisible;
                        });
                      },
                      onRememberMeChanged: (value) {
                        setState(() {
                          _rememberMe = value ?? false;
                        });
                      },
                      onLogin: _login,
                    ),
                  ],
                )
              : Container(
                  padding: const EdgeInsets.all(32.0),
                  constraints: const BoxConstraints(maxWidth: 800),
                  child: Row(
                    children: [
                      Expanded(child: _Logo()),
                      Expanded(
                        child: Center(
                          child: _FormContent(
                            formKey: _formKey,
                            emailController: _emailController,
                            passwordController: _passwordController,
                            isPasswordVisible: _isPasswordVisible,
                            rememberMe: _rememberMe,
                            onPasswordVisibilityToggle: () {
                              setState(() {
                                _isPasswordVisible = !_isPasswordVisible;
                              });
                            },
                            onRememberMeChanged: (value) {
                              setState(() {
                                _rememberMe = value ?? false;
                              });
                            },
                            onLogin: _login,
                          ),
                        ),
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
        Transform.translate(
          offset: const Offset(
              0, -30), // Ajusta este valor para mover el logo hacia arriba
          child: 
          Image.asset(
            'assets/icons/logo.png',
            width: isSmallScreen ? 300 : 300,
          ),
        ),

        //texto login
        Transform.translate(
          offset: const Offset(
              0, -40), // Ajusta este valor para mover "LOGIN!" hacia arriba
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Text(
              "LOGIN!",
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: isSmallScreen ? 30.0 : 30.0,
                fontWeight: FontWeight.bold,
                color: Colors.black,
              ),
            ),
          ),
        ),
      ],
    );
  }
}

class _FormContent extends StatelessWidget {
  final GlobalKey<FormState> formKey;
  final TextEditingController emailController;
  final TextEditingController passwordController;
  final bool isPasswordVisible;
  final bool rememberMe;
  final VoidCallback onPasswordVisibilityToggle;
  final ValueChanged<bool?> onRememberMeChanged;
  final VoidCallback onLogin;

  const _FormContent({
    Key? key,
    required this.formKey,
    required this.emailController,
    required this.passwordController,
    required this.isPasswordVisible,
    required this.rememberMe,
    required this.onPasswordVisibilityToggle,
    required this.onRememberMeChanged,
    required this.onLogin,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: const BoxConstraints(maxWidth: 300),
      child: Form(
        key: formKey,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextFormField(
              controller: emailController,
              validator: (value) {
                if (value == null || value.isEmpty) {
                  return 'Please enter some text';
                }

                bool emailValid = RegExp(
                        r"^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+")
                    .hasMatch(value);
                if (!emailValid) {
                  return 'Porfavor ingresa un correo valido';
                }

                return null;
              },
              decoration: const InputDecoration(
                labelText: 'Email',
                hintText: 'Ingresa el correo',
                prefixIcon: Icon(Icons.email_outlined),
                border: OutlineInputBorder(),
              ),
            ),
            SizedBox(height: 16.0),
            TextFormField(
              controller: passwordController,
              validator: (value) {
                if (value == null || value.isEmpty) {
                  return 'Por favor, introduzca algún texto';
                }

                if (value.length < 6) {
                  return 'La contraseña debe tener al menos 6 caracteres';
                }
                return null;
              },
              obscureText: !isPasswordVisible,
              decoration: InputDecoration(
                labelText: 'Clave',
                hintText: 'Ingresa tu contraseña',
                prefixIcon: const Icon(Icons.lock_outline_rounded),
                border: const OutlineInputBorder(),
                suffixIcon: IconButton(
                  icon: Icon(isPasswordVisible
                      ? Icons.visibility_off
                      : Icons.visibility),
                  onPressed: onPasswordVisibilityToggle,
                ),
              ),
            ),

            SizedBox(height: 16.0),
            CheckboxListTile(
              value: rememberMe,
              onChanged: onRememberMeChanged,
              title: const Text('Recordar Despues'),
              // leading checkbox aparece a la isquierda trailing aparece a la derecha.
              controlAffinity: ListTileControlAffinity.trailing,
            ),
            SizedBox(height: 16.0),


            ElevatedButton(
              onPressed: onLogin,
              style: ElevatedButton.styleFrom(
                padding: const EdgeInsets.symmetric(
                    horizontal: 40,
                    vertical:
                        20), // Ajusta el padding para hacer el botón más grande
                minimumSize: Size(150,
                    50), // Ajusta este valor para cambiar el tamaño mínimo del botón
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(
                      10), // Ajusta el radio para las esquinas redondeadas
                ),
              ),
              child: const Text(
                'Iniciar Sesión',
                style: TextStyle(
                  fontSize: 20.0, // Aumenta el tamaño del texto aquí
                  fontWeight: FontWeight
                      .bold, // Opcional: hace que el texto sea más grueso
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
