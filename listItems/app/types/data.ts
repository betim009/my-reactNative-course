export type Data = {
    id: string;
    nome: string;
    imagem: string;
    preco: number;
}

export type Props = {
    data: Data[]; // <- array do tipo Data
};