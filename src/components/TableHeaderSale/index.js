import { TableHeader, GridItemTitle } from './style.js';

export default function TableHeaderSale() {
    return(
        <TableHeader>
          <GridItemTitle>ID</GridItemTitle>
          <GridItemTitle>Funcionário</GridItemTitle>
          <GridItemTitle>Produto</GridItemTitle>
          <GridItemTitle>Preço</GridItemTitle>
          <GridItemTitle>Data</GridItemTitle>
          <GridItemTitle>Horário</GridItemTitle>
          <GridItemTitle>Editar</GridItemTitle>
          <GridItemTitle>Excluir</GridItemTitle>
      </TableHeader>
    )
}