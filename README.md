# todo-store
This simple end-point provides you with the ability to POST, EDIT, DELETE or GET  todo(s) without hustle and just focus with your front end part of either web or mobile app

## End point link

```
https://datastore-5ecb.onrender.com
```

# Todo Schema

```
  {
      "id": "todo-id",
      "title": "Todo title",
      "description": "Todo description",
      "isComplete": booleanValue,
      "createdAt": ISOString("2023-08-11T09:47:15.627Z"),
      "lastUpdate": ISOString("2023-08-11T09:47:15.627Z")
 }
```
# Methods
## GET Method
### Get all todos

```
 {endpoint}/api/
```
---
![image](https://github.com/Kayange123/todo-store/assets/96143653/5977a16f-7c34-40b0-8f1e-388c430b896a)

---
### Get single todo by ID
```
{endpoint}/api/{todo-id}
```
---
![image](https://github.com/Kayange123/todo-store/assets/96143653/c309eacb-2323-4ebb-ab2a-95666b3087f4)

## POST Method
```
 {endpoint}/api/create

  body : {
      "title": "Todo title",
      "description": "Todo description",
      "isComplete": false
    }
```
![image](https://github.com/Kayange123/todo-store/assets/96143653/91a551cb-ed41-4542-a24d-50d793ac18e7)

## DELETE Method
---
```
 {endpoint}/api/delete/{todo-id}
```
![image](https://github.com/Kayange123/todo-store/assets/96143653/279112f9-ed08-4fc6-a986-0f0a45099a02)

## PUT Method
---
```
 {endpoint}/api/edit/{todo-id}
```
![image](https://github.com/Kayange123/todo-store/assets/96143653/30420645-7dc2-4f02-91b0-603e3aff6c5d)

