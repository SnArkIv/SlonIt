# Базовое взаимодействие с git


## Настройка .git/config

```
git config user.name "Example Name"
git config user.email user.email@example.com
```
Устонавливаем деволтку локально для этого проекта, но можно установить глобально,
 для всех последующих добавив флаг `--global` после `config`

```
git config --list           //Вывести переменные конфига
git config --list --global  //Вывести переменные установленные пользователем
git config --unset user.name //Удалить переменную
git config --remove-section user //Удалить всю секцию user
```

---
Можно установить укороченную запись команд
```
git config --global alias.c 'config --global'
```

Теперь можно написать просто `git c` вместо `git config --global`


## Начало работы

При создании репозитория github, он сам предлагает набор команд для старта работы

```
git init   
git status
git add .
git commit -m "Initial commit."
git branch -M main
git remote add origin https://github.com/SnArkIv/SlonIt.git 
git push -u origin main
```


## Авторы и коммитеры

Для того чтобы посмотреть информацию по коммиту

```
git show --pretty=fuller
```

Данная команда выведет автора коммита, коммитера, даты, номер коммита и т.д.

Также есть перменные окружения, с помощью которых можно указать данные значения

- GIT_AUTHOR_NAME
- GIT_AUTHOR_EMAIL
- GIT_AUTHOR_DATE
- GIT_COMMITTER_NAME
- GIT_COMMITTER_EMAIL
- GIT_COMMITTER_DATE


## Коммиты без git add

```
git commit -am "Commit text"
``` 

Дананя команда сделает коммит в обход `git add` лишь для тех для тех файлов, которые уже были проиндексированны ранее

```
git commit -m "Commit text" filename
```

Данная команда сразу закомитит определенный файл

## Удаление файлов

```
git rm -r --cache <filename>
```

Удалить файл из проиндексированных


```
git mv oldName.hmtl newName.html
```

Переименовать файл