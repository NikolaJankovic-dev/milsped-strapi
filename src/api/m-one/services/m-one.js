'use strict';

/**
 * m-one service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::m-one.m-one');
