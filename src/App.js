import { useState } from 'react';
import './app.css'; 

export default function App() {
  const [employee, setEmployee] = useState('')
  const [product, setProduct] = useState('')
  const [price, setPrice] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const [listSaleInfo, setListSaleInfo] = useState([
    {
      id: '',
      employee: '',
      product: '',
      price: '',
      date: '',
      time: ''
    }
  ])

  const handleSubmit = () => {
    const newList = 
      {
        id: Math.floor(Math.random() * 999),
        employee: employee,
        product: product,
        price: price,
        date: date,
        time: time
      }
  
      setListSaleInfo([...listSaleInfo, newList]);
    
  }

  return(
    <div className="container">
        <h1>Sistema de vendas</h1>
        <div className="infos">
          <select onChange={(e) => setEmployee(e.target.value)}>
            <option>Funcionário</option>
            <option>Funcionario 01</option>
            <option>Funcionario 02</option>
            <option>Funcionario 03</option>
            <option>Funcionario 04</option>
            <option>Funcionario 05</option>
          </select>
          <input onChange={(e) => setProduct(e.target.value)} placeholder="Produto" type="name"/>
          <input onChange={(e) => setPrice(e.target.value)} placeholder="Preço" type="number"/>
          <input onChange={(e) => setTime(e.target.value)} type="time"/>
          <input onChange={(e) => setDate(e.target.value)} type="date"/>
          <button onClick={handleSubmit}>Confirmar</button>
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
            </tr>
          </table>
          {listSaleInfo.map((item) => (
            <table>
            <tr>
               <td>{item.id}</td>
               <td>{item.employee}</td>
               <td>{item.product}</td>
               <td>{item.price}</td>
               <td>{item.time}</td>
               <td>{item.date}</td>
            </tr>
          </table>
          ))}
        </div>
    </div>
  
    
  )
}