"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var film_1 = require("./film");
var cinema_1 = require("./cinema");
var showtime_1 = require("./showtime");
var apollo_server_express_1 = require("apollo-server-express");
var graphql_iso_date_1 = require("graphql-iso-date");
var queryTypeDef = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  scalar Date\n  scalar DateTime\n\n  type Query {\n    filmsCurrentlyShowing(offset: Int!, limit: Int!): [Film]\n    film(slug: ID!): Film\n  }\n"], ["\n  scalar Date\n  scalar DateTime\n\n  type Query {\n    filmsCurrentlyShowing(offset: Int!, limit: Int!): [Film]\n    film(slug: ID!): Film\n  }\n"])));
var resolvers = {
    Date: graphql_iso_date_1.GraphQLDate,
    DateTime: graphql_iso_date_1.GraphQLDateTime,
    Film: {
        showtimeDays: showtime_1.resolvers.filmShowtimeDays,
    },
    Showtime: {
        hourFormatted: showtime_1.resolvers.hourFormatted,
    },
    Query: __assign({}, film_1.resolvers),
};
var startApolloServer = function () {
    return new apollo_server_express_1.ApolloServer({
        schema: apollo_server_express_1.makeExecutableSchema({
            typeDefs: [queryTypeDef, film_1.typeDefs, cinema_1.typeDefs, showtime_1.typeDefs],
            resolvers: resolvers,
        }),
    });
};
exports.default = startApolloServer;
var templateObject_1;
//# sourceMappingURL=index.js.map