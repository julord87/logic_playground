// El test para tu función calculateDiscountedTotal
describe('Pruebas de Descuento', () => {

  it('debería aplicar 10% de descuento si el total es mayor a 1000', () => {
    // 1. Arrange
    const totalInicial = 1200;
    
    // 2. Act
    const resultado = calculateDiscountedTotal(totalInicial);
    
    // 3. Assert (Lo que esperamos)
    expect(resultado).toBe(1080); // 1200 - 10% = 1080
  });

  it('NO debería aplicar descuento si el total es 500', () => {
    const resultado = calculateDiscountedTotal(500);
    expect(resultado).toBe(500);
  });

  it('No debería aceptar numeros negativos', () => {
    const resultado = calculateDiscountedTotal(-1)
    expect(resultado) = "Error, el precio no puede ser negativo"
  })
  
});