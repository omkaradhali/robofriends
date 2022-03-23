import React from 'react';
import Card from './Card'

const CardLists = ({ robots }) => {
  const cardComponent = robots.map(user => {
    return (
      <Card name={user.name} id={user.id} email={user.email} />
    )
  })
  return (
    <div>
      {cardComponent}
    </div>
  );
}

export default CardLists;