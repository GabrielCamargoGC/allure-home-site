export default {
    name: 'product',
    title: 'Produtos',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Nome do Produto',
        type: 'string',
      },
      {
        name: 'productImage',
        title: 'Imagem do Produto',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ]
  }