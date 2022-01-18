async function feed(parent, args, context, info) {
  const where = args.filter
    ? {
        OR: [
          { description: { contains: args.filter } },
          { url: { contains: args.filter } },
          { name: { contains: args.filter } },
          { tag: { contains: args.filter } }
        ]
      }
    : {};

  const links = await context.prisma.link.findMany({
    where,
    skip: args.skip,
    take: args.take,
    orderBy: args.orderBy
  });

  const users = await context.prisma.user.findMany({
    where,
    skip: args.skip,
    take: args.take,
    userOrderBy: args.userOrderBy
  })

  const count = await context.prisma.link.count({ where });

  return {
    id: 'main-feed',
    links,
    users,
    count
  };
}

module.exports = {
  feed
};
