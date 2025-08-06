```
src/

├── app/             # Инициализация приложения (router, store, themes)

├── pages/           # Роут-страницы

├── widgets/         # Крупные блоки интерфейса

├── features/        # Независимые пользовательские фичи

├── entities/        # Доменные сущности (user, post, todo...)

├── shared/          # Общие компоненты, утилиты и стили
```


**Проект:** приложение для просмотра постов и комментариев, основанное на публичном API [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

**Общие требования:**

- Все данные загружаются с помощью RTK Query с [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/).  
    
- Для стилизации компонентов использовать CSS Modules.  
    
- Исходный код должен быть загружен в отдельный репозиторий на GitHub.  
    
- Для каждой домашней работы должен быть создан отдельный Merge Request (или Pull Request) с названием homework-[номер], например: homework-1.
    

**Что отправлять на проверку:**

- Ссылка на Merge Request (или Pull Request) в GitHub.  
    
- Название Merge Request должно соответствовать номеру домашнего задания.  
    
- Внутри MR желательно описать, что было реализовано в рамках задачи.  
      
    

**Структура проекта:**

- Проект должен быть создан с помощью Vite + TypeScript.  
    
- Код должен быть организован по FSD-архитектуре: app/, pages/, widgets/, features/, entities/, shared/.  
      
    

Гайд по API доступен здесь: [https://jsonplaceholder.typicode.com/guide](https://jsonplaceholder.typicode.com/guide)


## homework-1

Необходимо создать начальное приложение, отрисовать список постов (пока с заглушками) и научиться передавать данные через props между компонентами.

**Задание:**

1. Инициализировать проект с помощью Vite + TypeScript.

2. Создать:

   - App.tsx → src/app/

   - MainLayout.tsx → src/shared/layouts/

   - Header, Footer → src/widgets/LayoutHeader/, LayoutFooter/

3. Отобразить список постов-заглушек:

   - PostList → src/widgets/PostList/

   - PostCard → src/entities/post/ui/PostCard.tsx

4. Передавать данные через props, компонент — функциональный.

**Что отправлять на проверку:**

- Ссылку на Merge Request (или Pull Request) в GitHub.
- Название Merge Request должно соответствовать номеру домашнего задания.
- Внутри MR желательно описать, что было реализовано в рамках задачи


## homework-2

Необходимо добавить модальное окно с информацией о проекте, которое открывается по кнопке в шапке приложения, а также реализовать переключение светлой и тёмной темы через контекст.

Задание:

1. Реализовать ThemeContext и переключение темы:

   - ThemeProvider, useTheme → src/shared/lib/theme/

   - ThemeSwitcher → src/features/ThemeSwitcher/ui/

2. Использовать React.Fragment и key в списках.

3. Модалка "О проекте" через React.Portal → src/shared/ui/Modal/

4. Кнопки с обработкой событий → src/shared/ui/Button/


Что отправлять на проверку:

Ссылку на Merge Request (или Pull Request) в GitHub.
Название Merge Request должно соответствовать номеру домашнего задания.
Внутри MR желательно описать, что было реализовано в рамках задачи.
