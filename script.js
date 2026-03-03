// 移动端导航菜单切换
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        navToggle.classList.toggle('open');
    });

    // 点击导航链接后关闭菜单
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.classList.remove('open');
        });
    });
}

// 滚动时导航栏样式增强
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        nav.style.boxShadow = '0 2px 20px rgba(255,155,174,0.08)';
    } else {
        nav.style.boxShadow = 'none';
    }
});
