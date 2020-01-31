import 'package:flutter/material.dart';
import 'package:safariguides/screens/screens/Start/start_screen.dart';

void main() => runApp(SafariGuide());

class SafariGuide extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Safari Guide",
      theme: ThemeData(
        primaryColor: Colors.amber,
        accentColor: Colors.amberAccent,
      ),
      home: StartScreen(),
    );
  }
}
