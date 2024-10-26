class Carousel {
    constructor(element) {
        this.element = element;
        this.wrapper = element.querySelector('.carousel-wrapper');
        this.items = [];
        this.currentIndex = 0;
        this.autoPlayInterval = null;

        this.prevButton = element.querySelector('.prev');
        this.nextButton = element.querySelector('.next');

        this.prevButton.addEventListener('click', () => this.prev());
        this.nextButton.addEventListener('click', () => this.next());

        this.loadItems();
        this.startAutoPlay();

        this.element.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.element.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    loadItems() {
        const artImages = [
            'art-images/20241026-104622.jpeg',
            'art-images/20241026-104639.jpeg',
            'art-images/20241026-104644.jpeg',
            'art-images/20241026-104648.jpeg',
            'art-images/20241026-104655.jpeg'
        ];

        artImages.forEach((image, index) => {
            const div = document.createElement('div');
            div.className = 'carousel-item';
            div.innerHTML = `
                <img src="${image}" alt="精选作品 ${index + 1}">
                <h3>精选作品 ${index + 1}</h3>
            `;
            this.wrapper.appendChild(div);
            this.items.push(div);
        });

        this.updateCarousel();
    }

    updateCarousel() {
        const offset = -this.currentIndex * 100;
        this.wrapper.style.transform = `translateX(${offset}%)`;
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        this.updateCarousel();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.updateCarousel();
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => this.next(), 5000); // 每5秒切换一次
    }

    stopAutoPlay() {
        clearInterval(this.autoPlayInterval);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const carouselElement = document.querySelector('.carousel-container');
    if (carouselElement) {
        new Carousel(carouselElement);
    }
});
