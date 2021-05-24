//antes descargar de:
//https://github.com/JetBrains/kotlin/releases/
// se puede ejecutar codigo en: https://play.kotlinlang.org/

//Instalar en debian
// https://kotlinlang.org/docs/command-line.html
// curl -s "https://get.sdkman.io" | bash
// sdk version
// sdk install kotlin
// se crea el archivo fuente .kt
// kotlinc fuente.kt -include-runtime -d fuente.jar
// kotlinc -help 
// java -jar hello.jar

const val PI = 3.1416
fun main(args: Array<String>){
    println("Hola mundo con kotlin");

    var moneda: Int = 10
    println(moneda)
    val nombre = "maria"
    println(nombre)
    println(PI)

}

