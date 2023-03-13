import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
` 

export const SaleForm = styled.form`
width: 100%;
display: flex;
align-items: center;
justify-content: center;

`

export const InputInfoSale = styled.input`
    width: 120px;
    height: 30px;
    padding-left: 4px;
    border: none;
    border-bottom: solid 2px #0CC0DF;
    outline: none;
    margin: 0 22px;
`

export const ButtonSubmit = styled.button`
width: 120px;
    height: 30px;
    background-color: #12b0cc;
    border-radius: 4px;
    color: #FFF;
    border: none;
    cursor: pointer;
    transition: ease 0.3s;
    &:hover {
        background-color: #0CC0DF;
    }
`

export const ErrorContainer = styled.div``;



export const ErrorMessage = styled.p`
margin-top: 22px;
color: red;
`;

export const DisplaySale = styled.div`
`;

export const SalesTable = styled.table`
width: 98%;
background-color: #fff;
padding: 20px;
box-shadow: 0px 0px 5px #ccc;
border-radius: 5px;
max-width: 1120px;
margin: 20px auto;
`

export const TableHeader = styled.thead`
width: 100%;
`

export const GridItemTitle = styled.th`
color: #000;
width: 100%;
min-width: 100px;
height: 30px;
padding: 0 22px;
`

export const TableBody = styled.tbody``;

export const GridItem = styled.td`
width: 100%;
    min-width: 130px;
    height: 30px;
    text-align: center;
    padding: 12px 0;
    word-break: break-all;
    font-size: 14px;
`;

export const IconEdit = styled.span`
color: green;
font-size: 16px;
cursor: pointer;
`;

export const IconCancelEdit = styled.span`
color: rgb(190, 67, 67);
font-size: 16px;
cursor: pointer;
`

export const IconDelete = styled.span`
color: rgb(190, 67, 67);
cursor: pointer;
font-size: 14px;
`;

