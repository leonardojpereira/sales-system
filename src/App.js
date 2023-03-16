import { useState } from "react";
import "./style";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Logo from "./components/Logo";
import Error from "./components/Error";
import TableHeaderSale from "./components/TableHeaderSale";
import {
  Container,
  SaleForm,
  InputInfoSale,
  ButtonSubmit,
  DisplaySale,
  SalesTable,
  TableBody,
  Tr,
  GridItem,
  IconEdit,
  IconCancelEdit,
  IconDelete,
} from "./style";

export default function App() {
  const [employee, setEmployee] = useState("");
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [sale, setSale] = useState([]);
  const [isFieldCompleted, setIsFieldCompleted] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [selectedSaleId, setSelectedSaleId] = useState(null);

  const generateId = () => {
    const randomNumber = Math.floor(Math.random() * 10000);
    return `#${randomNumber.toString().padStart(3, "0")}`;
  };

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return date.toLocaleDateString("pt-BR", options);
  };

  const formatTime = (time) => {
    const options = { hour: "2-digit", minute: "2-digit" };
    return time.toLocaleTimeString("pt-BR", options);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employee || !product || !price) {
      setIsFieldCompleted(false);
      return;
    }
    const now = new Date();
    const newSale = {
      id: generateId(),
      employee,
      product,
      price: parseFloat(price).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }),
      date: formatDate(now),
      time: formatTime(now),
    };

    setSale([...sale, newSale]);
    setEmployee("");
    setProduct("");
    setPrice("");
    setIsFieldCompleted(true);
  };

  const handleEdit = (id) => {
    const saleToEdit = sale.find((sale) => sale.id === id);
    setEmployee(saleToEdit.employee);
    setProduct(saleToEdit.product);
    setPrice(saleToEdit.price.replace("R$", "").replace("", ""));
    setEditingId(id);
    setSelectedSaleId(id);
  };

  const handleCancelEdit = () => {
    setEmployee("");
    setProduct("");
    setPrice("");
    setEditingId(null);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    if (!employee || !product || !price) {
      setIsFieldCompleted(false);
      return;
    }
    const now = new Date();
    const editedSale = {
      id: editingId,
      employee,
      product,
      price: parseFloat(price).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }),
      date: formatDate(now),
      time: formatTime(now),
    };
    const newSales = sale.map((sale) =>
      sale.id === editingId ? editedSale : sale
    );
    setSale(newSales);
    setEmployee("");
    setProduct("");
    setPrice("");
    setEditingId(null);
    setIsFieldCompleted(true);
  };

  const handleDelete = (id) => {
    const newSales = sale.filter((sale) => sale.id !== id);
    setSale(newSales);
    setSelectedSaleId(id);
  };

  return (
    <Container>
      <Logo />
      <SaleForm onSubmit={editingId !== null ? handleSaveEdit : handleSubmit}>
        {editingId !== null ? (
          <>
            <InputInfoSale
              style={{ borderBottom: "solid 2px #0CC0DF" }}
              placeholder="Funcionário"
              value={employee}
              onChange={(e) => setEmployee(e.target.value)}
            />
            <InputInfoSale
              style={{ borderBottom: "solid 2px #0CC0DF" }}
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              placeholder="Produto"
              type="name"
            />
            <InputInfoSale
              style={{ borderBottom: "solid 2px #0CC0DF" }}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="R$ 0,00"
              type="number"
            />
            <ButtonSubmit style={{ backgroundColor: "#0CC0DF" }} type="submit">
              Salvar
            </ButtonSubmit>
          </>
        ) : (
          <>
            <InputInfoSale
              placeholder="Funcionário"
              value={employee}
              onChange={(e) => setEmployee(e.target.value)}
            />
            <InputInfoSale
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              placeholder="Produto"
              type="name"
            />
            <InputInfoSale
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="R$ 0,00"
              type="number"
            />
            <ButtonSubmit type="submit">Confirmar</ButtonSubmit>
          </>
        )}
      </SaleForm>
        {!isFieldCompleted && (
         <Error message="Todos os campos precisam ser preenchidos."/>
        )}

      <DisplaySale>
        <SalesTable>
         <TableHeaderSale/>
          <TableBody>
            {sale.map((sale) => (
              <Tr key={sale.id}>
                <GridItem data-label='ID'>{sale.id}</GridItem>
                <GridItem data-label='Funcionário'>{sale.employee}</GridItem>
                <GridItem data-label='Produto'>{sale.product}</GridItem>
                <GridItem data-label='Preço'>{sale.price}</GridItem>
                <GridItem data-label='Data'>{sale.date}</GridItem>
                <GridItem data-label='Horário'>{sale.time}</GridItem>
                <GridItem data-label='Editar'>
                  {sale.id === selectedSaleId && editingId !== null ? (
                    <IconCancelEdit>
                      <MdCancel onClick={handleCancelEdit}></MdCancel>
                    </IconCancelEdit>
                  ) : (
                    <IconEdit>
                      <FaEdit onClick={() => handleEdit(sale.id)}></FaEdit>
                    </IconEdit>
                  )}
                </GridItem>
                <GridItem data-label='Excluir'>
                  <IconDelete>
                    <FaTrashAlt onClick={() => handleDelete(sale.id)} />
                  </IconDelete>
                </GridItem>
              </Tr>
            ))}
          </TableBody>
        </SalesTable>
      </DisplaySale>
    </Container>
  );
}
