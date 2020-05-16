# Up To Speed API

> An API to get you up to speed on your favorite cars!

---

## Description

> Returns random facts about automobiles and their history in the style of the youtube channel “Up To Speed”.

---

# Endpoints
# You will need to use Postman in order to make these API calls

---


`/`

## Returns a list of all random facts

```python[
    {
        "Fact": "The Honda CR-V originally came with a picnic table."
    }
]
```


---


`/add/fact` 

## Adds one fact to the database

```python[
    {
        "Fact": "The 2011 Ford Crown Victoria was the last vehicle to offer a cassette player as an option. RIP, nostalgia."
    }
]
```

---


`/delete/:fact` 

## Removes one fact from the database

```python[
    {
        "Fact": "The 2011 Ford Crown Victoria was the last vehicle to offer a cassette player as an option. RIP, nostalgia."
    }
]
```
