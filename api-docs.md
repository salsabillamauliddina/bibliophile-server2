# BIBLIOPHILE DOCS #
---------------------

**Method** <br>
I used this method <br>
`GET` | `POST` | `PUT` | `DELETE` | `PATCH` <br>

**Package** <br>
*ExpressJs
*Bcrypt
*jsonwebtoken
*Sequelize 
*Nodejs
*Postgres

ENDPOINTS
`POST`/register
`POST`/login
`GET` /books
`GET` /books/:id
`POST`/books
`PUT` /books/:id
`PATCH`/books/:id
`DELETE`/books/:id

public API that I use from `https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjbpIGgoojyAhUn7XMBHXLTD-UQFjAHegQIEhAD&url=https%3A%2F%2Fdeveloper.nytimes.com%2Fapis&usg=AOvVaw2dc2bh5fUcS4NvbyDx0T0x`

## -- ENDPOINTS -- ##

### 1. POST/register

### > Request Headers

```
No Needed
```

### > Request Body

```JSON
{
  email : <email>,
  username : <username>,
  password : <password>

}
```

#### - Response (201 - Created)

```json
{
  "msg": "Success Created!",
  "user": {
    "id": 1,
    "email": "aca@mail.com",
    "username": "aca"
  }
}
```

#### - Response (500 - Internal Server Error)

```json
{
  "msg": "Invalid email/pass"
}
```

### 2. POST/login

### > Request Body

```JSON
{
  usrname : <username>,
  email : <email>,
  password : <pass>
}
```

### > Respon (200 - OK)

```JSON
{
"access_token":"<your access token>"
}
```

## 3. POST/books
### > Request Headers

```JSON
{
  "access_token" = <access_token>
}
```
### > Request Body

```JSON
{
  "title": <title>,
  "author": <author>,
  "total_pages": <total_pages>,
  "rating": <rating>,
  "start_read": <yyyy-mm-dd>,
  "end_read": <yyyy-mm-dd>,
  "genre": <genre>,
  "review": <review>,
}
```

#### - Response (201-Created)

```json
{
  "msg": "Success created booklist!",
  "data": {
    "id": 1,
    "title": "Give and Take",
    "author": "Adam Grant",
    "total_pages": 574,
    "rating": 4,
    "start_read": "2021-07-25T00:00:00.000Z",
    "end_read": "2021-08-25T00:00:00.000Z",
    "genre": "Self-development",
    "review": "I love this book, it makes me calm and learn new things",
    "UserId": 1,
    "updatedAt": "2021-07-22T15:09:45.921Z",
    "createdAt": "2021-07-22T15:09:45.921Z"
  }
}
```

#### - Response (500 - Internal Server Error)

```JSON
  {
    msg : <msg for 500>
  }
```

## 4. GET/books

### > Request Headers

```JSON
{
  "access_token" = <access_token>
}
```

### > Response (200 - OK)

``` JSON
  [
  {
    "id": 3,
    "title": "Eleanor & Park",
    "author": "Rainbow Rowell",
    "total_pages": 333,
    "rating": 3,
    "start_read": "2021-07-20T00:00:00.000Z",
    "end_read": "2021-07-25T00:00:00.000Z",
    "genre": "Young Adult",
    "review": "i love the characters!",
    "createdAt": "2021-07-27T13:20:38.663Z",
    "updatedAt": "2021-07-27T13:20:38.663Z",
    "UserId": 1
  },
  {
    "id": 1,
    "title": "The Hate U Give",
    "author": "Thomas Angie",
    "total_pages": 444,
    "rating": 4,
    "start_read": "2021-12-12T00:00:00.000Z",
    "end_read": "2022-05-04T00:00:00.000Z",
    "genre": "Contemporary",
    "review": "I love the characters in this book. At that time, she doesnt like to be a black people. But, at the end she's proud with herself",
    "createdAt": "2021-07-27T13:13:34.231Z",
    "updatedAt": "2021-07-29T12:15:40.836Z",
    "UserId": 1
  },
  {
    "id": 4,
    "title": "The Fault in Our Stars",
    "author": "John Green",
    "total_pages": 313,
    "rating": 4,
    "start_read": "2021-05-25T00:00:00.000Z",
    "end_read": "2021-09-01T00:00:00.000Z",
    "genre": "Romance",
    "review": "I love the characters in this book. At that time, she doesnt like to be a black people. But, at the end she's proud with herself",
    "createdAt": "2021-07-27T13:24:49.482Z",
    "updatedAt": "2021-07-29T13:19:55.191Z",
    "UserId": 2
  }
]
```

## 5. GET/books/:id

id : req.params.id

### > Request Headers

```JSON
{
  "access_token" = <access_token>
}
```
### > Response (200 - OK)

```JSON
{
  "id": 4,
  "title": "The Fault in Our Stars",
  "author": "John Green",
  "total_pages": 313,
  "rating": 4,
  "start_read": "2021-05-25T00:00:00.000Z",
  "end_read": "2021-09-01T00:00:00.000Z",
  "genre": "Romance",
  "review": "I love the characters in this book. At that time, she doesnt like to be a black people. But, at the end she's proud with herself",
  "createdAt": "2021-07-27T13:24:49.482Z",
  "updatedAt": "2021-07-29T13:19:55.191Z",
  "UserId": 2
}
```

#### - Response (500 - Internal Server Error)

```JSON
  {
    msg : <msg for 500>
  }
```

## 6. PATCH/books/:id

### > Request Body

```JSON
  {
    "start_read" : <yyyy-mm-dd>,
    "end_read" : <yyyy-mm-dd>
  }
```

### > Request Headers

```JSON
{
  "access_token" = <access_token>
}
```

#### - Response (200 - OK)
```JSON
  [
  {
    "id": 1,
    "title": "The Hate U Give",
    "author": "Thomas Angie",
    "total_pages": 444,
    "rating": 4,
    "start_read": "2021-12-12T00:00:00.000Z",
    "end_read": "2022-05-04T00:00:00.000Z",
    "genre": "Contemporary",
    "review": "I love the characters in this book. At that time, she doesnt like to be a black people. But, at the end she's proud with herself",
    "createdAt": "2021-07-27T13:13:34.231Z",
    "updatedAt": "2021-07-29T12:15:40.836Z",
    "UserId": 1
  }
]
```

#### - Response (500 - Internal Server Error)

```JSON
  {
    msg : <msg for 500>
  }
```

## 7. DELETE/books/:id
### > Request Headers

```JSON
{
  "access_token" = <access_token>
}
```
### > Request Body

```
No Needed
```

#### - Response (200 - OK)

```json
{
  "msg": "Deleted booklist success!"
}
```

#### - Response (500 - Internal Server Error)

```JSON
  {
    msg : <msg for 500>
  }
```

## 8. PUT/books/:id

### > Request Body

```JSON
{
  "title": <title>,
  "author": <author>,
  "total_pages": <total_pages>,
  "rating": <rating>,
  "start_read": <yyyy-mm-dd>,
  "end_read": <yyyy-mm-dd>,
  "genre": <genre>,
  "review": <review>,
}
```

### > Request Headers

```JSON
{
  "access_token" = <access_token>
}
```
#### - Response (200 - OK)

```JSON
[
  {
    "id": 4,
    "title": "The Fault in Our Stars",
    "author": "John Green",
    "total_pages": 313,
    "rating": 4,
    "start_read": "2021-05-25T00:00:00.000Z",
    "end_read": "2021-09-01T00:00:00.000Z",
    "genre": "Romance",
    "review": "I love the characters in this book. At that time, she doesnt like to be a black people. But, at the end she's proud with herself",
    "createdAt": "2021-07-27T13:24:49.482Z",
    "updatedAt": "2021-07-29T13:30:03.047Z",
    "UserId": 2
  }
]
```

#### - Response (500 - Internal Server Error)

```JSON
  {
    msg : <msg for 500>
  }
```


## -- API Public -- ##
### 1. GET/article-books

### > Request Headers

```JSON
No Needed
```

### > Request Body

```JSON
No Needed
```

#### - Response (200 - OK)

```json
  {
  "status": "OK",
  "copyright": "Copyright (c) 2021 The New York Times Company. All Rights Reserved.",
  "section": "Books",
  "last_updated": "2021-07-29T08:20:32-04:00",
  "num_results": 34,
  "results": [
    {
      "section": "books",
      "subsection": "",
      "title": "Erik Larson Has a Scary Story He’d Like You to Hear",
      "abstract": "After years writing nonfiction, he is now the author of a made-up tale about ghost-hunting that will only be sold as an audiobook.",
      "url": "https://www.nytimes.com/2021/07/29/books/erik-larson-audiobook-no-one-goes-alone.html",
      "uri": "nyt://article/f87c3945-8f09-5946-8407-be9c374f96d4",
      "byline": "By Alexandra Alter",
      "item_type": "Article",
      "updated_date": "2021-07-29T08:18:39-04:00",
      "created_date": "2021-07-29T05:00:17-04:00",
      "published_date": "2021-07-29T05:00:17-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Books and Literature",
        "Writing and Writers",
        "Book Trade and Publishing",
        "Audiobooks",
        "No One Goes Alone (Book)"
      ],
      "org_facet": [
        "Crown Publishing Group"
      ],
      "per_facet": [
        "Larson, Erik"
      ],
      "geo_facet": [],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2021/07/23/books/00Larson/merlin_191245437_8115b05d-a9d1-45fc-8015-9810e4dd0dc6-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1365,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "For more than a decade, Erik Larson tinkered with the story that eventually became “No One Goes Alone.” “Once or twice a year I would pull it out and read portions of it and think, this isn’t bad,” he said.",
          "copyright": "Brittainy Newman for The New York Times"
        }
```

#### - Response (500 - Internal Server Error)

```json
{
  "msg": <msg for 500>
}
```

### 2. GET/popular-book

### > Request Headers

```JSON
No Needed
```

### > Request Body

```JSON
No Needed
```

#### - Response (200 - OK)

```json
  {
  "status": "OK",
  "copyright": "Copyright (c) 2021 The New York Times Company.  All Rights Reserved.",
  "num_results": 33810,
  "results": [
    {
      "title": "\"I GIVE YOU MY BODY ...\"",
      "description": "The author of the Outlander novels gives tips on writing sex scenes, drawing on examples from the books.",
      "contributor": "by Diana Gabaldon",
      "author": "Diana Gabaldon",
      "contributor_note": "",
      "price": "0.00",
      "age_group": "",
      "publisher": "Dell",
      "isbns": [
        {
          "isbn10": "0399178570",
          "isbn13": "9780399178573"
        }
      ],
      "ranks_history": [
        {
          "primary_isbn10": "0399178570",
          "primary_isbn13": "9780399178573",
          "rank": 8,
          "list_name": "Advice How-To and Miscellaneous",
          "display_name": "Advice, How-To & Miscellaneous",
          "published_date": "2016-09-04",
          "bestsellers_date": "2016-08-20",
          "weeks_on_list": 1,
          "rank_last_week": 0,
          "asterisk": 0,
          "dagger": 0
        }
      ],
      "reviews": [
        {
          "book_review_link": "",
          "first_chapter_link": "",
          "sunday_review_link": "",
          "article_chapter_link": ""
        }
      ]
    }
```

#### - Response (500 - Internal Server Error)

```json
{
  "msg": <msg for 500>
}
```
