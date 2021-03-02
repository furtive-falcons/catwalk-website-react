import React from 'react';
import CardAssets from './components/CardAssets/CardAssets';
import CardDetails from './components/CardDetails/CardDetails';
import CardContainer from './styles';

const dummyData = [
  {
    id: 14931,
    campus: 'hr-sfo',
    name: 'Manuela Pants',
    slogan: 'Nemo ratione deserunt.',
    description: 'Rerum quia tempore aperiam reiciendis. Eum a enim. Saepe magni tenetur et. Sit est beatae.',
    category: 'Pants',
    default_price: '398.00',
    created_at: '2021-02-23T02:49:03.102Z',
    updated_at: '2021-02-23T02:49:03.102Z',
  },
  {
    id: 14932,
    campus: 'hr-sfo',
    name: 'Elwin Coat',
    slogan: 'Corrupti eum natus quaerat atque temporibus.',
    description: 'Molestiae aut ratione. Repellendus aut nesciunt vitae dignissimos. Minus fugit vel tenetur et sunt.',
    category: 'Coat',
    default_price: '783.00',
    created_at: '2021-02-23T02:49:03.102Z',
    updated_at: '2021-02-23T02:49:03.102Z',
  },
  {
    id: 14034,
    campus: 'hr-sfo',
    name: 'Camo Onesie',
    slogan: 'Blend in to your crowd',
    description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
    category: 'Jackets',
    default_price: '140.00',
    created_at: '2021-02-23T02:49:02.833Z',
    updated_at: '2021-02-23T02:49:02.833Z',
  },
  {
    id: 14296,
    campus: 'hr-sfo',
    name: 'Robin Shirt',
    slogan: 'Omnis excepturi unde assumenda libero laudantium molestias est nihil.',
    description: 'Et illum molestiae quia. Deleniti dignissimos sint. Ipsum voluptatem quibusdam amet porro et non doloremque iure.',
    category: 'Shirt',
    default_price: '710.00',
    created_at: '2021-02-23T02:49:03.102Z',
    updated_at: '2021-02-23T02:49:03.102Z',
  },
  {
    id: 14807,
    campus: 'hr-sfo',
    name: 'Emmalee Dress',
    slogan: 'Et autem est accusantium quo soluta expedita.',
    description: 'Rerum et ratione sapiente ipsam enim. Ab qui iure aut eaque impedit. Nisi temporibus recusandae eum cupiditate in.',
    category: 'Dress',
    default_price: '386.00',
    created_at: '2021-02-23T02:49:03.102Z',
    updated_at: '2021-02-23T02:49:03.102Z',
  },
];

// map over all cards in related products
const Card = () => (
  <div>
    {dummyData.map((card) => (
      <CardContainer>
        {console.log('Card card', card)}
        <CardAssets card={card} key={card.id} />
        <CardDetails card={card} key={card.id} />
      </CardContainer>
    ))}
  </div>
);

export default Card;
