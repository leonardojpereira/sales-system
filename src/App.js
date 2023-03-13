import { useState } from "react";
import "./style";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Logo from "./components/Logo";
import {
  Container,
  SaleForm,
  InputInfoSale,
  ButtonSubmit,
  ErrorContainer,
  ErrorMessage,
  DisplaySale,
  SalesTable,
  TableHeader,
  GridItemTitle,
  TableBody,
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
    setPrice(parseFloat(saleToEdit.price.replace("R$", "").replace(".", ",")));
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
              style={{ borderBottom: "solid 2px green" }}
              placeholder="Funcionário"
              value={employee}
              onChange={(e) => setEmployee(e.target.value)}
            />
            <InputInfoSale
              style={{ borderBottom: "solid 2px green" }}
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              placeholder="Produto"
              type="name"
            />
            <InputInfoSale
              style={{ borderBottom: "solid 2px green" }}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="R$ 0,00"
              type="number"
            />
            <ButtonSubmit style={{ backgroundColor: "green" }} type="submit">
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
      <ErrorContainer>
        {isFieldCompleted === false && (
          <ErrorMessage>Todos os campos devem ser preenchidos.</ErrorMessage>
        )}
      </ErrorContainer>

      <DisplaySale>
        <SalesTable>
          <TableHeader>
            <tr>
              <GridItemTitle>ID</GridItemTitle>
              <GridItemTitle>Funcionário</GridItemTitle>
              <GridItemTitle>Produto</GridItemTitle>
              <GridItemTitle>Preço</GridItemTitle>
              <GridItemTitle>Data</GridItemTitle>
              <GridItemTitle>Horário</GridItemTitle>
              <GridItemTitle>Editar</GridItemTitle>
              <GridItemTitle>Excluir</GridItemTitle>
            </tr>
          </TableHeader>
          <TableBody>
            {sale.map((sale) => (
              <tr key={sale.id}>
                <GridItem>{sale.id}</GridItem>
                <GridItem>{sale.employee}</GridItem>
                <GridItem>{sale.product}</GridItem>
                <GridItem>{sale.price}</GridItem>
                <GridItem>{sale.date}</GridItem>
                <GridItem>{sale.time}</GridItem>
                <GridItem>
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
                <GridItem>
                  <IconDelete>
                    <FaTrashAlt onClick={() => handleDelete(sale.id)} />
                  </IconDelete>
                </GridItem>
              </tr>
            ))}
          </TableBody>
        </SalesTable>
      </DisplaySale>
    </Container>
  );
}
