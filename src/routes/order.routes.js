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
 * '/donation/List/':
 *  get:
 *    tags:
 *      - Orders
 *    summary: fetch donation list
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
router.get('/donation/List/', orderController.donationList);

/**
 * @openapi
 * '/assistant/List/':
 *  get:
 *    tags:
 *      - Orders
 *    summary: fetch assistant order
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
router.get('/assistant/List/', orderController.assistantList);

/**
 * @openapi
 * '/delete/':
 *  delete:
 *    tags:
 *      - Orders
 *    summary: Delete all order.
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
router.get('/delete/', orderController.deleteAll);

module.exports = router;
