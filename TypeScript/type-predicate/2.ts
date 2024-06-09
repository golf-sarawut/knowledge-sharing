type Product = {
    id: number;
    name: string;
  };
  
  function isDefined<T>(value?: T) {
    return value !== null && value !== undefined;
  }
  
  const products: (Product | null | undefined)[] = [
    { id: 1, name: 'Laptop'},
    null,
    { id: 2, name: 'Smartphone' },
    undefined,
    { id: 3, name: 'Tablet' },
    null,
    { id: 4, name: 'Monitor'},
  ];
  
  const filteredProducts = products.filter(isDefined);
  
  filteredProducts.forEach((product) => {
    console.log(`Product ID: ${product.id}, Name: ${product.name}`);
  });  