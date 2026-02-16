const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');
const app = express();
const PORT = process。env。PORT || 3000;

// 安全中间件
app.use(helmet());
app.use(compression());

// 静态文件服务
app.use(express.static(path.join(__dirname, 'public')));

// SPA路由
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0'， () => {
    console.log(`🌌 粒子土星服务器运行在 http://localhost:${PORT}`);
    console.log(`🚀 生产部署建议：pm2 start ecosystem.config.js`);
});
