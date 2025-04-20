"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const postalRoutes_1 = __importDefault(require("./routes/postalRoutes"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware to parse JSON
app.use(body_parser_1.default.json());
// Serve static files from the "public" directory
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Use postal package routes
app.use('/api', postalRoutes_1.default);

// Route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'public', 'index.html'));
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
