function links(parent, args, context) {
  return context.prisma.user
    .findUnique({ where: { id: parent.id } })
    .links();
}

function quotes(parent, args, context) {
  return context.prisma.user
    .findUnique({ where: { id: parent.id } })
    .quotes();
}

module.exports = {
  links,
  quotes
};
