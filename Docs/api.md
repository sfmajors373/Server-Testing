Recipes Api Docs
======

### Get A Recipes
```
GET /recipes/:id
```

Response
>Status: 200 OK 
>____________________________________
>```{
>  "id": "987254958723094574",
>  "Name": "Chocolate Cake",
>  "Ingredients": {"flour", "sugar", "eggs", "cocoa"},
>  "Steps": {"Sift flour", "Beat eggs", "Bake"}
>  }```

### Get All Recipes
```
GET /recipes
```

Response
>Status: 200 OK 
>____________________________________
>```{
>  "id": "987254958723094574",
>  "Name": "Chocolate Cake",
>  "Ingredients": ["flour", "sugar", "eggs", "cocoa"],
>  "Steps": ["Sift flour", "Beat eggs", "Bake"]
>},
>{
>  "id": 1097234529473593475",
>  "Name": "Sugar Cookies",
>  "Ingredients": ["flour", "sugar", "eggs", "icing"],
>  "Steps": ["Mix ingredients", "Roll out and cut", "Bake"]
>}
>```

### Create A Recipe
```
POST /newrecipe
```

Parameters
| Name | Type | Description |
| --- | --- | --- |
| Name | String | **Required** Name of recipe |
| Ingredients | Array | **Required** Array of strings of items required to make the recipe |
| Steps | Array | Array of strings that indicate how to make the dish |


### Curl
GET: curl localhost:8080/recipes
POST: curl -X POST -H "Content-Type: application/json" -d '{"name":"Hot Dog"}' localhost:8080/food
