import {
  SaleForm,
  InputInfoSale,
  ButtonSubmit,
} from "./style";



export default function Form(props) {
  const { editingId, handleSaveEdit, handleSubmit , employee, product, price, setEmployee, setProduct, setPrice } = props;

    return(
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
    
    )
}