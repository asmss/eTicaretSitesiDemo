class Product{
    constructor(id,title,price,image,quantity){
        this.id = id;
        this.title = title;
        this.price = price;
        this.image = image;
        this.quantity = quantity || 1;
    }
}

export default Product;