const colorGroups = document.querySelectorAll('.pcgrc-group');

colorGroups.forEach(group => {
    group.addEventListener('click', () => {
        // Удаляем active у всех
        colorGroups.forEach(g => g.classList.remove('active'));

        // Добавляем active к нажатому
        group.classList.add('active');
    });
});

const sizeGroups = document.querySelectorAll('.pcgrs-type');

sizeGroups.forEach(group => {
    group.addEventListener('click', () => {
        // Удаляем active у всех
        sizeGroups.forEach(g => g.classList.remove('active'));

        // Добавляем active к нажатому
        group.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const groups = document.querySelectorAll('.pcgri-group');
    const texts = document.querySelectorAll('.pcgr-info-text p');

    groups.forEach(group => {
        group.addEventListener('click', () => {
            const index = group.getAttribute('data-index');

            // Убираем active у всех
            groups.forEach(g => g.querySelector('span').classList.remove('active'));
            texts.forEach(t => t.style.display = 'none');

            // Добавляем active текущему
            group.querySelector('span').classList.add('active');
            texts[index].style.display = 'block';
        });
    });

    // Инициализация: показать первый по умолчанию
    if (groups.length > 0 && texts.length > 0) {
        groups[0].querySelector('span').classList.add('active');
        texts.forEach((t, i) => t.style.display = i === 0 ? 'block' : 'none');
    }
});

 // Инициализируем Swiper для каждого блока
    const swipers = [];
    document.querySelectorAll('.asgr-swiper').forEach((el, index) => {
        swipers[index] = new Swiper(el, {
            pagination: {
                el: el.querySelector('.swiper-pagination'),
                clickable: true,
            },
        });
    });

// Переключение блоков
document.querySelectorAll('.asgl-block').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Переключаем активный блок
        document.querySelectorAll('.asgl-block').forEach(el => el.classList.remove('active'));
        btn.classList.add('active');

        document.querySelectorAll('.asgr-item').forEach(el => el.classList.remove('active'));
        const targetItem = document.querySelectorAll('.asgr-item')[index];
        targetItem.classList.add('active');

        // Обновляем Swiper
        swipers[index].update();
        swipers[index].slideTo(0);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Найдём все блоки .fmglm-mob-dropdown
    const dropdowns = document.querySelectorAll('.fmglm-mob-dropdown');

    dropdowns.forEach(function (dropdown) {
        const button = dropdown.querySelector('.fmglm-head-button');
        const content = dropdown.querySelector('.fmglm-open');

        button.addEventListener('click', function () {
        content.classList.toggle('active');
        button.classList.toggle('active'); // Поворот стрелки
        });
    });
});

// Установка начального активного блока при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const firstBlock = document.querySelectorAll('.asgl-block')[0];
    const firstItem = document.querySelectorAll('.asgr-item')[0];

    if (firstBlock) firstBlock.classList.add('active');
    if (firstItem) firstItem.classList.add('active');

    // Обновим и установим первый слайд у первого Swiper
    if (swipers[0]) {
        swipers[0].update();
        swipers[0].slideTo(0);
    }
});

var swiperRecomendation = new Swiper('.recomendation-slider', {
    slidesPerView: 'auto', // чтобы не листалось по одному слайду надо здесь поставить авто и добавить freeMode true
    spaceBetween: 10, // отступ
    speed: 800, // Плавная прокрутка
    freeMode: true, // написал выше
    effect: 'slide', // Эффект плавного перехода
    touchRatio: 1.5, // Увеличение чувствительности при свайпе
    resistanceRatio: 0.8, // Плавное сопротивление при достижении конца слайдера
    // grabCursor: true, // Указатель мыши меняется на "руку"
    loop: false, // Отключаем бесконечную прокрутку
});

var swiperRanee = new Swiper('.raneewatch-slider', {
    slidesPerView: 'auto', // чтобы не листалось по одному слайду надо здесь поставить авто и добавить freeMode true
    spaceBetween: 10, // отступ
    speed: 800, // Плавная прокрутка
    freeMode: true, // написал выше
    effect: 'slide', // Эффект плавного перехода
    touchRatio: 1.5, // Увеличение чувствительности при свайпе
    resistanceRatio: 0.8, // Плавное сопротивление при достижении конца слайдера
    // grabCursor: true, // Указатель мыши меняется на "руку"
    loop: false, // Отключаем бесконечную прокрутку
});

const ShopsSwiper = new Swiper('.product-slider', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1,
});

const swiper = new Swiper('.swiper-akcii-predlozhen', {
    navigation: {
        nextEl: '.akg-button-next',
        prevEl: '.akg-button-prev',
    },
    loop: true,
});

const swiperMobile = new Swiper('.swiper-akcii-predlozhen-mobile', {
    navigation: {
        nextEl: '.akg-button-next-mob',
        prevEl: '.akg-button-prev-mob',
    },
    loop: true,
});

var GsgRightMobileSwiper = new Swiper('.swiper-gsg-right-mobile', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    speed: 800,
    freeMode: true,
    effect: 'slide',
    touchRatio: 1.5,
    resistanceRatio: 0.8,
    loop: false,
});