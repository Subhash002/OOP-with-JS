class Product {
  constructor(name, cost, acceptingOrders, description, quantity) {
    this.name = name;
    this.cost = cost;
    this.description = description;
    this.quantity = quantity;
    this.acceptingOrders = acceptingOrders;
  }

  stockCost() {
    return this.cost * this.quantity;
  }

  getDescription() {
    return this.description;
  }

  render() {
    const productCard = document.createElement("div");
    productCard.setAttribute("class", "product");

    const productName = document.createElement("div");
    productName.setAttribute("class", "name");

    const productCost = document.createElement("div");
    productCost.setAttribute("class", "cost");

    const productQuantity = document.createElement("div");
    productQuantity.setAttribute("class", "quantity");

    const stockCost = document.createElement("div");
    stockCost.setAttribute("class", "stock-cost");

    const stockCostButton = document.createElement("button");
    stockCostButton.innerText = "Stock Cost";
    stockCostButton.addEventListener("click", (e) => {
      e.preventDefault();
      alert(`Stock Cost: $${this.stockCost()}`);
    });
    stockCost.appendChild(stockCostButton);

    const productDescription = document.createElement("div");
    productDescription.setAttribute("class", "view-description");

    const productDescButton = document.createElement("button");
    productDescButton.innerText = "Description";
    productDescButton.addEventListener("click", (e) => {
      e.preventDefault();
      alert(`Description: ${this.description}`);
    });
    productDescription.appendChild(productDescButton);

    const buyButtonDiv = document.createElement("div");
    buyButtonDiv.setAttribute("class", "buy-btn");

    const buyButton = document.createElement("button");
    buyButton.innerText = "Buy"; // Use () to set text
    buyButton.addEventListener("click", (e) => {
      e.preventDefault();
      alert(`Buying ${this.name}`);
    });
    if (this.acceptingOrders === "No") buyButton.setAttribute("disabled", true);
    buyButtonDiv.appendChild(buyButton);
    productName.innerText = this.name;
    productCost.innerText = `$${this.cost}`;
    productQuantity.innerText = `${this.quantity} units`;
    productCard.append(
      productName,
      productCost,
      productQuantity,
      stockCost,
      productDescription,
      buyButtonDiv // Append buyButtonDiv instead of buyButton
    );

    return productCard; // Return the created productCard element
  }
}

export default Product;
