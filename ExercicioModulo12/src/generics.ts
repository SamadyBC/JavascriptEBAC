function identity<T, M>(value: T, message: M): T {
  return value;
}

console.log(identity(34, "Valor Incial"));
console.log(identity("Jao", "Testando valores"));

identity<Number, string>(42, "Teste");

interface GenericInterface<U> {
  value: U;
  getIdentity: () => U;
}
