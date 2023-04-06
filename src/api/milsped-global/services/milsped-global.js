'use strict';

/**
 * milsped-global service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::milsped-global.milsped-global');
