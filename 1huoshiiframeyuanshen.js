const overlay = document.getElementById('huoshiaicYuanshenOverlay');
const iframeContainer = document.getElementById('huoshiaicYuanshenIframeContainer');
const iframe = document.getElementById('huoshiaicYuanshenIframe');
const closeButton = document.getElementById('huoshiaicYuanshenCloseButton');

// 定义每个按钮的 iframe 源地址
const iframeSources = {
    huoshiaicYuanshenOpenButton1: "https://huoshi111.github.io/huoshiaicyuanshen/1%E7%8C%9C%E5%8E%9F%E7%A5%9E%E8%A7%92%E8%89%B2.html",
    huoshiaicYuanshenOpenButton2: "https://huoshi111.github.io/huoshigame0/%E7%81%AB%E7%8B%AE%E8%BF%B7%E5%AE%AB%E6%B8%B8%E6%88%8F.html",
    huoshiaicYuanshenOpenButton3: "",
    // 哔哩哔哩
    huoshiaicYuanshenOpenButton4: ""
};

// 绑定按钮点击事件
document.querySelectorAll('[id^="huoshiaicYuanshenOpenButton"]').forEach(button => {
    button.addEventListener('click', function() {
        const iframeSource = iframeSources[this.id];
        iframe.src = iframeSource; // 设置 iframe 的源地址
        overlay.style.display = 'block';
        setTimeout(() => {
            overlay.classList.add('active');
            iframeContainer.classList.add('active');
        }, 10); // 允许浏览器渲染 display 变化
    });
});

closeButton.addEventListener('click', function() {
    overlay.classList.remove('active');
    iframeContainer.classList.remove('active');

    // 等待动画完成后隐藏
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 500);
});
