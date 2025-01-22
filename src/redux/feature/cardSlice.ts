import { createSlice } from '@reduxjs/toolkit';

export interface Card {
  id: number;
  type: 'Stock' | 'Crypto' | 'NFT';
  title: string;
  logo: string;
  priceLabel: string;
  price: string;
  currency:string;
  change: string;
  cap: string,
  details: string;
  extra: string;
}

//Initial Array of Cards
const initialState: Card[] = [
  {
    id: 1,
    type: 'Stock',
    title: 'Nvidia',
    logo: '/src/assets/nvidia.png',
    priceLabel: 'Price',
    price: '$137.71',
    currency:'USD',
    change: '+2.19%',
    cap:'$3.31T',
    details: 'Market cap',
    extra:''
  },
  {
    id: 2,
    type: 'Crypto',
    title: 'Bitcoin',
    logo: '/src/assets/Bitcoin.svg.png',
    priceLabel: 'Price',
    price: '$96,826.97',
    currency:'USD',
    change: '+2.19%',
    cap:'$2.0T',
    details: 'Market cap',
    extra:''
  },
  {
    id: 3,
    type: 'NFT',
    title: 'Pudgy Penguins',
    logo: '/src/assets/pudgy.jpg',
    priceLabel: 'Floor Price',
    price: '23.12',
    currency:'ETH',
    change: '',
    cap:'361ETH',
    details: 'Total volume',
    extra:'Ethereum Crypto chain'
  },
];

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
});

export default cardSlice.reducer;
