import { FC } from "react";
import { Button, Card } from "react-bootstrap";

interface ItemProduct {
  precio: number,
  imagen: string,
  nombre: string 
}
interface IPropsFormProduct{
  arrItems: ItemProduct[];
}


export const ListProducts : FC<IPropsFormProduct> = ({arrItems}) => {
  return (
    <div className="p-1 m-3 border rounded d-grid gap-2" style={{gridTemplateColumns:"repeat(2, 1fr)",
      justifyItems:"center",
      alignItems: "center",

    }}>
      {arrItems.map((el, i)=>(
        <Card key={i} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el.imagen} />
        <Card.Body>
          <Card.Title>{el.nombre}</Card.Title>
          <Card.Text>
            {el.precio}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      ))}
    </div>
  )
}

export default ListProducts