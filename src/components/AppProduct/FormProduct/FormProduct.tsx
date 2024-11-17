import { Button, Form } from "react-bootstrap";
import { useForm } from "../../../hooks/UseForm";
import { FC } from "react";

interface IPropsFormProduct {
  handleAddProduct: Function;
}

const FormProduct: FC<IPropsFormProduct> = ({ handleAddProduct }) => {
  const { handleChange, values, resetForm } = useForm({
    nombre: "",
    imagen: "",
    precio: 0,
  });

  console.log(values);

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault(); // Para prevenir el comportamiento por defecto de recargar la página
    handleAddProduct(values);
    resetForm();
  };

  return (
    <Form onSubmit={handleSubmitForm} className="p-4 border rounded m-3">
      <Form.Group controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          placeholder="Ingrese nombre del producto"
          value={values.nombre}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formImagen">
        <Form.Label>Imagen</Form.Label>
        <Form.Control
          type="text"
          name="imagen"
          placeholder="Ingrese la imagen del producto"
          value={values.imagen}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formPrecio">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          name="precio"
          placeholder="Ingrese el precio del producto"
          value={values.precio}
          onChange={handleChange}
        />
      </Form.Group>

      <div className="d-flex justify-content-center mt-4">
        <Button type="submit" variant="primary">
          Enviar Producto
        </Button>
      </div>
    </Form>
  );
};

export default FormProduct;
