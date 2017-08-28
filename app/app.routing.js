"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_component_1 = require("./user.component");
var portfolio_component_1 = require("./portfolio.component");
exports.AppRoutes = [
    { path: "", component: user_component_1.UserComponent },
    { path: "portfolio", component: portfolio_component_1.AppPortfolio }
];
exports.AppComponents = [
    user_component_1.UserComponent,
    portfolio_component_1.AppPortfolio
];
//# sourceMappingURL=app.routing.js.map