import React from 'react'

function ListKeys() {
  const [products, setProducts] = React.useState([
    {
      id: 1,
      title: 'water melon',
      isFruit: true
    },
    {
      id: 1,
      title: 'iphone',
      isFruit: false
    }
  ]);

  const renderProdctList = products.map(product => {
    return (
      <div key={product.id} className='typography_heading'>
        Title: {product.title} <br />
        Fruit: {product.isFruit ? 'Yes' : 'No'}
        <hr />
      </div>
    )
  })

  return (
    <div>
      <h3>List & Keys</h3>

      {renderProdctList}
    </div>
  )
}

export default ListKeys