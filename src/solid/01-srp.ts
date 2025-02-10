(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    loadProduct(id: number): Product {
      // Realiza un proceso para obtener el producto y retornarlo
      console.log("Producto: ", { id, name: "OLED Tv" });
      return { id, name: "OLED Tv" };
    }

    saveProduct(product: Product): void {
      // Realiza una petición para salvar en base de datos
      console.log("Guardando en base de datos", product);
    }
  }

  class NotificationService {
    notifyClients(): void {
      console.log("Enviando correo a los clientes");
    }
  }

  class CartService {
    onAddToCart(productId: number): void {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    private readonly productService: ProductService;
    private readonly notificationService: NotificationService;
    private readonly cartService: CartService;

    constructor(
      productService: ProductService,
      notificationService: NotificationService,
      cartService: CartService
    ) {
      this.productService = productService;
      this.notificationService = notificationService;
      this.cartService = cartService;
    }

    loadProduct(id: number): void {
      this.productService.loadProduct(id);
    }

    saveProduct(product: Product): void {
      this.productService.saveProduct(product);
    }

    notifyClients(): void {
      this.notificationService.notifyClients();
    }

    onAddToCart(productId: number): void {
      this.cartService.onAddToCart(productId);
    }
  }

  const productService = new ProductService();
  const notificationService = new NotificationService();
  const cartService = new CartService();
  const productBloc = new ProductBloc(
    productService,
    notificationService,
    cartService
  );

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  productBloc.onAddToCart(10);
})();
