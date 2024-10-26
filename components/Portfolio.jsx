import React, { useState, useEffect } from 'react';
import WorkItem from './WorkItem';

const Portfolio = () => {
    const [works, setWorks] = useState([]);
    const [filter, setFilter] = useState('all');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchWorks();
    }, []);

    const fetchWorks = async () => {
        try {
            setLoading(true);
            // 这里应该是从您的API获取数据的实际URL
            const response = await fetch('/api/works');
            if (!response.ok) {
                throw new Error('数据获取失败');
            }
            const data = await response.json();
            setWorks(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    const filterWorks = (category) => {
        setFilter(category);
    };

    const categories = ['all', '油画', '水彩', '素描', '雕塑'];

    if (loading) return <div>加载中...</div>;
    if (error) return <div>错误：{error}</div>;

    return (
        <div className="portfolio">
            <h2>我的作品集</h2>
            <div className="filters">
                {categories.map(category => (
                    <button 
                        key={category} 
                        onClick={() => filterWorks(category)}
                        className={filter === category ? 'active' : ''}
                    >
                        {category === 'all' ? '全部' : category}
                    </button>
                ))}
            </div>
            <div className="works-grid">
                {works
                    .filter(work => filter === 'all' || work.category === filter)
                    .map(work => <WorkItem key={work.id} work={work} />)
                }
            </div>
        </div>
    );
};

export default Portfolio;
