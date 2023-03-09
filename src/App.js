import { useState } from 'react';
import './style'; 
import shortid from 'shortid';

import { FaTrashAlt } from 'react-icons/fa';
import Logo from './components/Logo';
import { Container, 
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
  IconDelete
} from './style';


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
    <Container>
      <Logo/>
        <SaleForm onSubmit={handleSubmit}>
            <InputInfoSale placeholder='Funcionário' value={employee} onChange={(e) => setEmployee(e.target.value)}/>
            <InputInfoSale value={product} onChange={(e) => setProduct(e.target.value)} placeholder="Produto" type="name"/>
            <InputInfoSale value={price} onChange={(e) => setPrice(e.target.value)}  placeholder="R$ 0,00" type="number"/>
            <ButtonSubmit type="submit">Confirmar</ButtonSubmit>
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
               <GridItem><IconDelete><FaTrashAlt onClick={handleDelete}/></IconDelete></GridItem>
            </tr>
          ))}
           </TableBody>
          </SalesTable>
        </DisplaySale>
    </Container>
  )
}