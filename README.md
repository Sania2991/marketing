# Разработка сайта по маркетингу

#### Этапы



- [ ] [Инициализация проекта](#initialize)
	- [ ] [Инициализация шаблона `OptimizedHTML5`](#initialize-oh5)
	- [ ] [Инициализация проекта (стили, шрифты,...)](#initialize-project)
- [ ] [Вёрстка](#frontend)
	- [ ] [Header](#frontend-header)
	- [ ] [Slider-home](#frontend-slider-home)


<br>
<br>
<br>
<br>
<br>
<br>
<br>

<!----><a name="initialize"></a>
## 0. Инициализация
<!----><a name="initialize-oh5"></a>
#### 0.1. Клонирование шаблона [OptimezedHtml5](https://github.com/agragregra/oh5)

* Клонируем
```Bash
git clone https://github.com/agragregra/oh5;
cd oh5;
rm -rf trunk .gitignore readme.md .git;
cd ../;
mv oh5 marketing
```
* Установка
```Bash
ncu -u; npm i; ncu; gulp
```

* Публикуем на github
```Bash
echo '/**/node_modules/ \n/.git/ \n/package-lock.json \n/**/Thumbs.db \n/**/*.DS_Store \n/**/package-lock.json /\n/**/debug.log' > .gitignore;
git init;
git add -A;
git commit -m "0.0. Initialize OptimiseHtml5";
git remote add origin git@github.com:Sania2991/marketing.git
git push -u origin master
```

<br>

<!----><a name="initialize-project"></a>
#### 0.2. Настройка проекта - [commit](https://github.com/Sania2991/marketing/commit/1204d17ab58cf8334c1cb57f545477586e9bcc28)
* Измененяем порядок подключения стилей в `main.sass`
* Подключаем шрифты, размеры, переменные в `_config.sass`
* Устанавливаем переменные цветов в `_theme-colors.sass`

<br>

<!----><a name="frontend"></a>
## 1. Вёрстка

<!----><a name="frontend-header"></a>
#### 1.1. Header - [commit](https://github.com/Sania2991/marketing/commit/6b33e6b4dda86874b9e4236eb36e17a04d67c051)

**Header-меню** имеет следующее поведение: сначала распологается сверху (absolute), а при прокрутке до "наблюдателей", добавляются:
* page-header--sticky  -  фиксирует меню
* page-header--sticky-show  -  появляется

**Hamburger** делает задержку в 300ms для красоты: отработывается анимация => затем появляется мобильное меню.

**Наблюдатели** чтобы не нагружать работу браузера, используется IntersectionObserver
```HTML
<div class="js-observe" data-observe-element="page-header" data-observe-add-class="page-header--sticky"></div>
```
* **js-observe**:  наблюдатель, на который мы нацелены.
* **data-observe-element**:  если указан - будет добавлен класс для указанного элемента, иначе для самого наблюдателя.
* **data-observe-add-class**:  если указан - добавляется класс, когда "наблюдатель" скрылся
* **data-observe-remove-class**: если указан - удаляется класс, когда "наблюдатель" скрылся

<br>

<!----><a name="frontend-slider-home"></a>
#### 1.2. Slider-home

##### Ресурсы:
* [SwiperJS](https://swiperjs.com/swiper-api#pagination) - оф. сайт
* [WebDesignMaster](https://youtu.be/3PzzZ5eHHig) - подробный разбор работы SwiperJS

##### Разработка:
* Установка SwiperJS - [❗️commit]()