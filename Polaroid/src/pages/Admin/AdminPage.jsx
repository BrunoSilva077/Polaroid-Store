import NavBar from "../../includes/NavBar";
import Footer from "../../includes/Footer";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
  });
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: 0,
    image: "public/Polaroid-removebg.png"
  });
  const [disableInput, setDisableInput] = useState(true);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products"));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);

  const handleProductSelect = (e) => {
    const productId = e.target.value;
    setSelectedProduct(productId);

    if (productId === "") {
      setProductData({ name: "", description: "", price: 0 });
      setDisableInput(true);
    } else {
      products.map((eachProduct) => {
        if (eachProduct.id === parseInt(productId)) {
          setProductData(eachProduct);
          setDisableInput(false);
        }
      });
    }
  };

  const handleProductChange = (e) => {
    e.preventDefault();
    const updatedProducts = products.map((product) => {
      if (product.id === parseInt(selectedProduct)) {
        return productData;
      }
      return product;
    });
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
    setSelectedProduct("");
    setProductData({ name: "", description: "", price: 0 });
    setDisableInput(true);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    if (newProduct.name === "" || newProduct.description === "" || newProduct.price === 0) {
      return;
    }

    const updatedProducts = [...products, { ...newProduct, id: products.length + 1 }];
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
    setNewProduct({ name: "", description: "", price: 0 });
  };

  const handleProductDelete = (e) =>{
    e.preventDefault();
    const updatedProducts = products.filter((product) => product.id !== parseInt(selectedProduct));
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
    setSelectedProduct("");
    setProductData({ name: "", description: "", price: 0 });
    setDisableInput(true);
  }

  return (
    <>
      <NavBar />
      <div className="grid-container">
        <div className="item item4"></div>
        <div className="item item4">
          <div className="adminTittle">
            <h1>Admin Panel</h1>
          </div>
          <div className="adminForms flex-col">
            <h2>Add Product</h2>
            <form onSubmit={handleAddProduct}>
              <div className="form-admin flex-col">
                <input
                  type="text"
                  placeholder="Name"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                  maxLength={20}
                />
                <textarea placeholder="Description" maxLength={20} 
                  value={newProduct.description}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      description: e.target.value,
                    })
                  }
                />
                <input
                  type="number"
                  placeholder="Price"
                  maxLength={20}
                  defaultValue={0}
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                  min={0}
                />
                <button className="btn btn-contact">Add</button>
              </div>
            </form>
          </div>
          <div className="adminForms flex-col">
            <h2>Upate Product</h2>
            <form onSubmit={handleProductChange}>
              <div className="form-admin flex-col">
                <select
                  name="product"
                  id="product"
                  value={selectedProduct}
                  onChange={handleProductSelect}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {products.map((product) => (
                    <option value={product.id} key={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Name"
                  value={productData.name}
                  onChange={(e) =>
                    setProductData({ ...productData, name: e.target.value })
                  }
                  maxLength={20}
                  disabled={disableInput}
                />
                <textarea
                  placeholder="Description"
                  maxLength={40}
                  value={productData.description}
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      description: e.target.value,
                    })
                  }
                  disabled={disableInput}
                ></textarea>
                <input
                  type="number"
                  placeholder="Price"
                  value={parseInt(productData.price)}
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      price: parseInt(e.target.value),
                    })
                  }
                  disabled={disableInput}
                  min={0}
                />
                <button className="btn btn-contact" disabled={disableInput}>
                  Update
                </button>
              </div>
            </form>
          </div>
          <div className="adminForms flex-col">
            <h2>Delete Product</h2>
            <form onSubmit={handleProductDelete}>
              <div className="form-admin flex-col">
                <select
                  name="product"
                  id="product"
                  value={selectedProduct}
                  onChange={handleProductSelect}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {products.map((product) => (
                    <option value={product.id} key={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
                <button className="btn btn-contact" disabled={disableInput}>
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="item item4"></div>
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
}
