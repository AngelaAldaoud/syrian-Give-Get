const prisma = require('../utils/prisma');

exports.addOrder = async function addOrder(userData) {
  try {
    const user = await prisma.orders.create({
      data: userData,
    });
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.findAll = async function findAll(typeOrder) {
  try {
    const orders = await prisma.orders.findMany({
      where: {
        typeOrder,
      },
    });
    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getOrderList = async function getOrderList(typeOrder) {
  try {
    const orders = await prisma.orders.findMany({
      orderBy: [
        {
          id: 'desc',
        },
      ],
      select: {
        id: true,
        typeOrder: true,
        metaName: true,
        phone: true,
        city: true,
        details: true,
      },
      where: {
        typeOrder,
      },
    });
    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
};
