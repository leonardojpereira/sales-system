import { useState } from "react";
import "./GlobalStyles";
import { Container, GlobalStyle } from "./GlobalStyles";
import Logo from "./components/Logo";
import Form from "./components/Form";
import Error from "./components/ErrorMessage";
import Table from "./components/Table";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      originalPrice: price,
      date: formatDate(now),
      time: formatTime(now),
    };

    setSale([...sale, newSale]);
    setEmployee("");
    setProduct("");
    setPrice("");
    setIsFieldCompleted(true);
    toast.success("Venda adicionada com sucesso!");
  };

  const handleEdit = (id) => {
    const saleToEdit = sale.find((sale) => sale.id === id);
    setEmployee(saleToEdit.employee);
    setProduct(saleToEdit.product);
    setPrice(saleToEdit.originalPrice);
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
      originalPrice: price,
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

    toast("Venda atualizada com sucesso!");
  };

  const handleDelete = (id) => {
    const newSales = sale.filter((sale) => sale.id !== id);
    setSale(newSales);
    setSelectedSaleId(id);
    toast.info("Venda deletada com sucesso!");
  };

  return (
    <>
      <GlobalStyle />
      <ToastContainer pauseOnHover={false} autoClose={1000} />
      <Container>
        <Logo />
        <Form
          editingId={editingId}
          handleSaveEdit={handleSaveEdit}
          handleSubmit={handleSubmit}
          handleCancelEdit={handleCancelEdit}
          employee={employee}
          product={product}
          price={price}
          setEmployee={setEmployee}
          setProduct={setProduct}
          setPrice={setPrice}
        />
        {!isFieldCompleted && (
          <Error message={"Todos os campos precisam ser preenchidos."} />
        )}
        <Table
          sale={sale}
          selectedSaleId={selectedSaleId}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          editingId={editingId}
          handleCancelEdit={handleCancelEdit}
        />
      </Container>
    </>
  );
}
