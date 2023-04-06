'use strict';

/**
 * milsped-article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::milsped-article.milsped-article', ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const post = await strapi.entityService.findMany("api::milsped-article.milsped-article", query);

    const sanitizedEntity = await this.sanitizeOutput(post);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));
