"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var filmsCurrentlyShowing = require('../../../mock-data/films-currently-showing.json');
var typeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Film {\n    slug: ID!\n    scUrl: String!\n    scRating: Float\n    title: String!\n    encryptedUrlId: String!\n    releaseDate: Date!\n    directors: String!\n    description: String!\n    showtimeDays: [ShowtimeDay]!\n  }\n"], ["\n  type Film {\n    slug: ID!\n    scUrl: String!\n    scRating: Float\n    title: String!\n    encryptedUrlId: String!\n    releaseDate: Date!\n    directors: String!\n    description: String!\n    showtimeDays: [ShowtimeDay]!\n  }\n"])));
exports.typeDefs = typeDefs;
var resolvers = {
    filmsCurrentlyShowing: function (_parent) { return filmsCurrentlyShowing; },
    film: function (_parent, _a) {
        var slug = _a.slug;
        return filmsCurrentlyShowing.find(function (film) { return film.slug === slug; });
    },
};
exports.resolvers = resolvers;
var templateObject_1;
//# sourceMappingURL=film.js.map