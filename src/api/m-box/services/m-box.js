'use strict';

/**
 * m-box service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::m-box.m-box');
