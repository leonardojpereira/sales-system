import { useState } from 'react';
import './app.css'; 
import shortid from 'shortid';


export default function App() {
  const [employee, setEmployee] = useState('');
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [sale, setSale] = useState([]);
  const [isFieldCompleted, setIsFieldCompleted] = useState(true);

  function formatDate(date) {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
  }

  function formatTime(time) {
    const options = { hour: '2-digit', minute: '2-digit' };
    return time.toLocaleTimeString('pt-BR', options);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
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
    const newSaleAfterDelete = [...sale];
    newSaleAfterDelete.splice(id, 1);
    setSale(newSaleAfterDelete);
  }


  return (
    <div className="container">
        <h1>Sistema de vendas</h1>
        <form onSubmit={handleSubmit} className="infos">
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
          <button type="submit">Confirmar</button> <br></br>
          {isFieldCompleted === false && (
           <p style={{ color: "red" }}>Todos os campos devem ser preenchidos.</p>
           )}
        </form>

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
               <td><button>✐</button></td>
               <td><button onClick={handleDelete}>🗑</button></td>
            </tr>
          </table>
          ))}
        </div>
    </div>
  )
}