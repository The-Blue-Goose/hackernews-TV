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

function pics(parent, args, context) {
  return context.prisma.user
    .findUnique({ where: { id: parent.id } })
    .pics();
}

module.exports = {
  links,
  quotes,
  pics
};
