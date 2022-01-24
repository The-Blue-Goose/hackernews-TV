function postedBy(parent, args, context) {
    return context.prisma.pic
      .findUnique({ where: { id: parent.id } })
      .postedBy();
  }
  
  module.exports = {
    postedBy
  };