// 导入React组件
import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './components/Portfolio.jsx';

// 处理轮播图
function initCarousel() {
    // 这里添加轮播图的初始化代码
}

// 渲染React组件
function renderReactComponents() {
    const portfolioContainer = document.getElementById('react-portfolio');
    if (portfolioContainer) {
        ReactDOM.render(React.createElement(Portfolio), portfolioContainer);
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    renderReactComponents();
});
