export default  {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: "title",
      type: "string",
      title: "Name of dish",
      validation: (Role) => Role.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: (Role) => Role.max(200),
    },
    {
      name: "price",
      type: "number",
      title: "Price of the dish in USD",
    },
    {
      name: "image",
      type: "image",
      title: "Image of the dish",
    },
  ]
}
