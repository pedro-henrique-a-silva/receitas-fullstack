export default (id: number) => ({
  select: {
    name: true,
    username: true,
    doneRecipes: {
      select: { recipe: {
        include: {
          category: { select: { categoryName: true } },
        } } },
    },
  },
  where: { id },
});
