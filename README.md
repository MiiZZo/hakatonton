# Документация к решению кейса СКФУ.

## Содержание:
1. Требования к программному обеспечению, к его конфигурации, к операционной системе.
2. Настройка проекта перед началом работы.
3. Команды для старта проекта.

## 1. Требования к программному обеспечению, к его конфигурации, к операционной системе.
Операционная система - Ubuntu 20.04 LTS.

### Перечень необходимого ПО:
1. MySQL 8.0
2. Node.js 14.12.0
3. Redis 5.0.7

### Конфигурация redis
Для использования redis необходимо произвести следующие настройки:

1. Зайдите в конфиграционный файл redis под названием redis.conf (например, с помощью команды sudo nano /etc/redis/redis.conf)
2. Задайте переменной supervised значение systemd
3. Задайте переменной bind значение 127.0.0.1 ::1
4. Задайте переменной requirepass в качестве значения пароль, который будет использован в дальнейшем для подключение к базе данных.
5. Сохраните файл конфигурации и перезапустите redis, используя команду - sudo systemctl restart redis.service

## 2. Настройка проекта перед началом работы.
Перед началом работы необходимо настроить конфигурационные файлы и установить пакеты.
Необходимые действий для успешного выполнения этого пункта: 
1. Перейдите в папку client.
2. Пропишите команду npm config set '@bit:registry' https://node.bit.dev/.
3. Затем, пропишите команду npm i, начав тем самым установку зависимостей(пакетов).
4. После установки зависимостей, перейдите в папку server, что находится в корне проекта.
5. Установите зависимости командой npm i.
6. В файле .ormconfig.json укажите все настройки для подключения сервера к БД MySQL.
7. В файле default.json, который находится в папке config (server / config / default.json), установите значения для переменных REDIS_HOST и REDIS_PASS для подключения к базе данных Redis

## 3. Команды для старта проекта.
Для работы с frontend приложением (папка client) есть следующий ряд команд:
1. npm run dev - для старта приложения в режиме разработки.
2. npm run build - для сборки проекта.
3. npm run start - для старта приложения.

Для работы с backend приложением (папка server) есть следующий ряд команд:
1. npm run start:dev - для старта приложения  в режиме разработки.
2. npm run start - для старта приложения.
