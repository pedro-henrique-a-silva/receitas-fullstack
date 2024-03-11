export default (id: number) => ({
  select: {
    name: true,
    username: true,
    favoriteRecipes: {
      select: { recipe: {
        include: {
          category: { select: { categoryName: true } },
        } } },
    },
  },
  where: { id },
});