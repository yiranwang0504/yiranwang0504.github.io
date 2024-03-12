// 初始化Swiper轮播
function initializeSwiper() {
    new Swiper('.swiper-container', {
        loop: true, // 循环模式
        centeredSlides: true, // 居中幻灯片
        slidesPerView: 3, // 默认显示的幻灯片数量
        spaceBetween: 50, // 幻灯片之间的间隔
        autoplay: {
            delay: 1500, // 自动播放延迟
        },
        navigation: {
            nextEl: '.swiper-button-next', // 下一个按钮
            prevEl: '.swiper-button-prev', // 上一个按钮
        },
        breakpoints: {
            // 响应式断点
            600: {
                slidesPerView: 1, // 当屏幕宽度小于600px时显示一个幻灯片
                spaceBetween: 20 // 在较小屏幕上的间距
            },
            1000: {
                slidesPerView: 3, // 当屏幕宽度小于1000px时显示三个幻灯片
                spaceBetween: 20 // 在中等屏幕上的间距
            }
        }
    });
}

// 平滑滚动到指定部分
function goToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// 设置下载模态框
function setupDownloadModal() {
    const downloadLinks = document.querySelectorAll('#fh5co-download a[href="#"]');
    const downloadModal = new bootstrap.Modal(document.getElementById('downloadModal'));

    downloadLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            downloadModal.show();
        });
    });
}

// 自动更新版权年份
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright-year').textContent = currentYear;
}

// 在文档加载完成后执行函数
document.addEventListener('DOMContentLoaded', () => {
    initializeSwiper();
    setupDownloadModal();
    updateCopyrightYear();
});

// 自定义console
// console.clear();
console.log(
    '%c由ZL Asica制作搭建与运行\nBuilt and Operated by ZL Asica',
    'background:#fff;color:#000000'
);
console.log(getCurrentDate());

function getCurrentDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (hours >= 0 && hours <= 9) {
        hours = "0" + hours;
    }
    if (minutes >= 0 && minutes <= 9) {
        minutes = "0" + minutes;
    }
    if (seconds >= 0 && seconds <= 9) {
        seconds = "0" + seconds;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
        " " + hours + seperator2 + minutes +
        seperator2 + seconds;
    return currentdate;
}