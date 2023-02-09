const express = require('express');
const orderController = require('../controllers/order.controllers');

const router = express.Router();

/**
 * @openapi
 * '/addOrder/':
 *  post:
 *    tags:
 *      - Orders
 *    summary: Add a new order
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              typeOrder:
 *                type: number
 *              details:
 *                type: string
 *              city:
 *                type: string
 *              phone:
 *                type: string
 *              metaName:
 *                type: string
 *    responses:
 *      201:
 *       description: OK
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               response:
 *                 type: number
 *               message:
 *                 type: string
 *               data:
 *                 type: object
 *
 */
router.post('/addOrder/', orderController.addOrderHandler);

/**
 * @openapi
 * '/search/':
 *  post:
 *    tags:
 *      - Orders
 *    summary: fetch order
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              city:
 *                type: string
 *                default: {}
 *              word:
 *                type: string
 *                default: {}
 *    responses:
 *      201:
 *       description: OK
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               response:
 *                 type: number
 *               message:
 *                 type: string
 *               data:
 *                 type: object
 *
 */
router.post('/order/', orderController.search);

module.exports = router;
