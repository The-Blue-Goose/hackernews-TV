function postedBy(parent, args, context) {
    return context.prisma.quote
      .findUnique({ where: { id: parent.id } })
      .postedBy();
  }
  
  module.exports = {
    postedBy
  };
  