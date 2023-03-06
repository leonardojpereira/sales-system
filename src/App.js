import { useState } from 'react';
import './app.css'; 
import shortid from 'shortid';


export default function App() {
  const [employee, setEmployee] = useState('');
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [sale, setSale] = useState([]);
  const [isFieldCompleted, setIsFieldCompleted] = useState(true);
  const [idEdit, setIdEdit] = useState(null);

  function formatDate(date) {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
  }

  function formatTime(time) {
    const options = { hour: '2-digit', minute: '2-digit' };
    return time.toLocaleTimeString('pt-BR', options);
  }

  const handleSubmit = () => {
    if(!employee || !product || !price) {
      setIsFieldCompleted(false);
      return;
    }
    const now = new Date();
    const newSale = 
      {
        id: shortid.generate(),
        employee,
        product,
        price: parseFloat(price).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        date: formatDate(now),
        time: formatTime(now)
      }
  
      setSale([...sale, newSale]);
      setEmployee('');
      setProduct('');
      setPrice('');
      setIsFieldCompleted(true)
  }


  const handleDelete = (id) => {
    const newSaleList = sale.filter((sale) => sale.id !== id);
    setSale(newSaleList);
  }

  const handleEdit = (id) => {
    const selectedSale = sale.find((sale) => sale.id === id);
    setEmployee(selectedSale.employee);
    setProduct(selectedSale.product);
    setEmployee(selectedSale.employee);
    setIdEdit(id);
  }

  const handleUpdate = (e) => {
    if (!employee || !product || !price) {
      alert('Todos os campos precisam ser preenchidos!');
      return;
    }
    const updatedSales = sale.map((sale) => {
      if (sale.id === idEdit) {
        return {
          ...sale,
          employee,
          product,
          price,
        };
      } else {
        return sale;
      }
    });
    setSale(updatedSales);
    setEmployee('');
    setProduct('');
    setPrice('');
    setIdEdit(null);
  }




  return (
    <div className="container">
        <h1>Sistema de vendas</h1>
        <div className="infos">
          <select value={employee} onChange={(e) => setEmployee(e.target.value)}>
            <option></option>
            <option>Funcionario 01</option>
            <option>Funcionario 02</option>
            <option>Funcionario 03</option>
            <option>Funcionario 04</option>
            <option>Funcionario 05</option>
          </select>
          <input value={product} onChange={(e) => setProduct(e.target.value)} placeholder="Produto" type="name"/>
          <input value={price} onChange={(e) => setPrice(e.target.value)}  placeholder="R$ 0,00" type="number"/>
          <button onClick={idEdit !== null ? handleUpdate : handleSubmit}>Confirmar</button> <br></br>
          {isFieldCompleted === false && (
           <p style={{ color: "red" }}>Todos os campos devem ser preenchidos.</p>
           )}
        </div>

        <div className='display'>
        <table>
            <tr>
              <th>ID</th>
              <th>Funcionário</th>
              <th>Produto</th>
              <th>Preço</th>
              <th>Horário</th>
              <th>Data</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </table>
          {sale.map((sale) => (
            <table>
            <tr key={sale.id}>
               <td>{sale.id}</td>
               <td>{sale.employee}</td>
               <td>{sale.product}</td>
               <td>{sale.price}</td>
               <td>{sale.time}</td>
               <td>{sale.date}</td>
               <td><button onClick={handleEdit}>✐</button></td>
               <td><button onClick={handleDelete}>🗑</button></td>
            </tr>
          </table>
          ))}
        </div>
    </div>
  )
}