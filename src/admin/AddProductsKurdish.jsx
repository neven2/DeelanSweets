import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { toast } from "react-toastify";

import { db, storage } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImg, setProductImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addProduct = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      const docRef = await collection(db, "products");

      const storageRef = ref(
        storage,
        `productImages/${Date.now() + productImg.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, productImg);

      uploadTask.on(
        () => {
          toast.error("images not uploaded!");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
            await addDoc(docRef, {
              productName: productName,
              desc: productDesc,
              category: productCategory,
              price: productPrice,
              productImg: downloadURL,
            });
          });
        }
      );

      setLoading(false);
      toast.success("product successfully added!");
      navigate("/dashboard/all-products");
    } catch (err) {
      setLoading(false);
      toast.error("product not added!");
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            {loading ? (
              <h4 className="py-5 ">Loading.......</h4>
            ) : (
              <>
                <h4 className="mb-5">Add Product</h4>
                <Form onSubmit={addProduct}>
                  <FormGroup className="form__group">
                    <span>Product Name</span>
                    <input
                      type="text"
                      placeholder="Pistachio Lokum"
                      value={productName}
                      onChange={e => setProductName(e.target.value)}
                      required
                    />
                  </FormGroup>
  
                  <FormGroup className="form__group">
                    <span>Description</span>
                    <input
                      type="text"
                      placeholder="Description....."
                      value={productDesc}
                      onChange={e => setProductDesc(e.target.value)}
                      required
                    />
                  </FormGroup>

                  <div className="d-flex align-items-center justify-content-between gap-5">
                    <FormGroup className="form__group w-50">
                      <span>Price</span>
                      <input
                        type="number"
                        placeholder="50,000 IQD"
                        value={productPrice}
                        onChange={e => setProductPrice(e.target.value)}
                        required
                      />
                    </FormGroup>

                    <FormGroup className="form__group w-50">
                      <span>Category</span>
                      <select
                        className="w-100 p-2"
                        onChange={e => setProductCategory(e.target.value)}
                      >
                        <option>Select category</option>
                        <option value="Cake">Cake</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Baklava">Baklava</option>
                        <option value="Pastries">Pastries</option>
                        <option value="Nuts">Nuts</option>
                
                      </select>
                    </FormGroup>
                  </div>

                  <div>
                    <FormGroup className="form__group ">
                      <span>Product Image</span>
                      <input
                        type="file"
                        onChange={e => setProductImg(e.target.files[0])}
                        required
                      />
                    </FormGroup>
                  </div>

                  <button className="buy__btn " type="submit">
                    Add Product
                  </button>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProducts;
