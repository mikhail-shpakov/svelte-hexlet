# Todolist на Svelte.js
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

:ru: by [Timeweb.com](https://timeweb.com/ru/)

Приложение написано для [Hexlet](https://ru.hexlet.io/)
в рамках открытого урока по [Svelte.js](https://svelte.dev/)
и представляет собой простейший todolist

:tada: [Демо](http://ck66484.tmweb.ru/)

:wrench: [Локальный запуск проекта](#dev)

## <a name="dev"></a>Локальный запуск проекта

1. **Загрузка проекта на локальную машину**

    ```
    git clone https://github.com/mikhail-shpakov/svelte-hexlet.git
    ```

2. **Установка зависимостей**

    ```
    npm ci
    ```

   Использование `npm ci` вместо `npm i` позволит гарантировать корректные версии устанавливаемых `npm` пакетов,
   так как они будут взяты из `package-lock.json`.

3. **Запуск сервера для разработки**

   Выполните из корневой директории проекта:

    ```
    npm run dev
   ```

   После этого приложение будет доступно по адресу `localhost:5000`.

   Во время разработки изменения в файлах будут отслеживаться автоматически,
   при этом будет вызываться линтер и сервер будет перезапускаться.

   Также доступны следующие команды:

    ```
    npm run build // сборка приложения Svelte для развёртывания на production
    ```
