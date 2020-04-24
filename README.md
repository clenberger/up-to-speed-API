# Up To Speed API

> An API to get you up to speed on your favorite cars!

---

## Description

> Returns random facts about automobiles and their history in the style of the youtube channel “Up To Speed”.

---

# Endpoints

 `/automobile` 
 
## Returns all facts for a given automobile

```python[
    {
        "Automobile": "Hennessey Venom GT",
        "Fact": "On January 21, 2013, the Venom GT set a Guinness World Record for the fastest road legal car from 0–186 mph with an average acceleration time of 13.63 seconds."
    },
    {
        "Automobile": "Hennessey Venom GT",
        "Fact": "The Hennessey Venom GT is the fastest car in the world at 265.7 mph"
    },
    ...
]
```

---

`/automobile/fact` 

## Returns one fact

```python[
    {
        "Automobile": "Ford Crown Victoria",
        "Fact": "The 2011 Ford Crown Victoria was the last vehicle to offer a cassette player as an option. RIP, nostalgia."
    }
]
```

---


`/fact`

## Returns a random fact

```python[
    {
        "Fact": "The Honda CR-V originally came with a picnic table."
    }
]
```