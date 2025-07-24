export default{
    name: 'project',
    title: 'Projeto',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Titulo',
            type: 'string',
        },
        {
            name: 'mainImage',
            title: 'Imagem Principal',
            type: 'image',
            Options: {
                hostpot: true,
            },
        },
    ]
}