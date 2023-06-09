export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: "title",
      type: "string",
      title: "Restaurant name",
      validation: (Role) => Role.required(), 
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: (Role) => Role.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Restaurant",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of the Restaurant",
    },
    {
      name: "long",
      type: "number",
      title: "Longitude of the Restaurant",
    },
    {
      name: "address",
      type: "string",
      title: "Restaurant Address",
      validation: (Role) => Role.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a Rating from (1-5 Stars)",
      validation: (Role) => Role.required().min(1).max(5).error("Please enter a value between 1 and 5"),
    },
    {
      name: "genre",
      title: "Category",
      validation: (Role) => Role.required(),
      type: "reference",
      to: [{type: "category"}],
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{type: "reference", to: [{type: "dish"}]}],
    },
  ],

}
