function greet(greeting: string): string {
    return greeting.toUpperCase();
}

const defaultGreeting: string = greet("hola");
const portugueseGreeting: string = greet("Oi como vai!");

console.log("[Ejercicio 3.4]", defaultGreeting, portugueseGreeting);
