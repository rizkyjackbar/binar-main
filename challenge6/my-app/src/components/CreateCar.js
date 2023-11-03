import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  Col,
  Container,
  Row,
} from "reactstrap";

function CreateCarForm() {
  const [carData, setCarData] = useState({
    name: "",
    price: "",
    category: "",
    isAvailable: true,
    image: null,
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!carData.name) {
      errors.name = "Name is required";
    }
    if (!carData.price) {
      errors.price = "Price is required";
    }
    if (!carData.category) {
      errors.category = "Category is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCarData({ ...carData, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setCarData({ ...carData, image: file });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Kirim data mobil ke server atau lakukan tindakan lain sesuai kebutuhan Anda
      console.log(carData);
      setFormSubmitted(true);
    }
  };

  return (
    <Container>
      <Row>
        <Col md={6} className="mx-auto">
          <h3 className="mt-3">Create Car</h3>
          {formSubmitted && (
            <Alert color="success" className="mt-3">
              Car created successfully!
            </Alert>
          )}
          <Form onSubmit={handleSubmit} className="mt-3">
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={carData.name}
                onChange={handleChange}
                invalid={!!formErrors.name}
              />
              <span className="text-danger">{formErrors.name}</span>
            </FormGroup>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input
                type="number"
                name="price"
                id="price"
                value={carData.price}
                onChange={handleChange}
                invalid={!!formErrors.price}
              />
              <span className="text-danger">{formErrors.price}</span>
            </FormGroup>
            <FormGroup>
              <Label for="category">Category</Label>
              <Input
                type="select"
                name="category"
                id="category"
                value={carData.category}
                onChange={handleChange}
                invalid={!!formErrors.category}
              >
                <option value="">Select Category</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Sports">Sports</option>
                {/* Tambahkan opsi lain sesuai kebutuhan */}
              </Input>
              <span className="text-danger">{formErrors.category}</span>
            </FormGroup>
            <FormGroup>
              <Label for="isAvailable">Availability</Label>
              <Input
                type="select"
                name="isAvailable"
                id="isAvailable"
                value={carData.isAvailable}
                onChange={handleChange}
              >
                <option value={true}>Available</option>
                <option value={false}>Not Available</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="image">Image</Label>
              <Input
                type="file"
                name="image"
                id="image"
                onChange={handleImageChange}
                invalid={!!formErrors.image}
              />
              <span className="text-danger">{formErrors.image}</span>
            </FormGroup>
            {carData.image && (
              <img
                src={URL.createObjectURL(carData.image)}
                alt="Car Preview"
                className="img-fluid mt-3"
              />
            )}
            <Button color="primary" className="mt-3">
              Create Car
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateCarForm;
