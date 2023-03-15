import { TableHeader, GridItemTitle } from './style.js';

export default function TableHeaderSale() {
    return(
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
    )
}