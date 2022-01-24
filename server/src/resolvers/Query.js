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
  });

  const quotes = await context.prisma.quote.findMany({
    where,
    skip: args.skip,
    take: args.take,
    quoteOrderBy: args.quoteOrderBy
  });

  const pics = await context.prisma.pic.findMany({
    where,
    skip: args.skip,
    take: args.take,
    linkOrderBy: args.linkOrderBy
  });

  const count = await context.prisma.link.count({ where });

  return {
    id: 'main-feed',
    links,
    users,
    quotes,
    pics,
    count
  };
}

module.exports = {
  feed
};
