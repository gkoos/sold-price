# Challenge: Sold Price Map

## Problem
As specified in the [Landtech Repo](https://github.com/landtechnologies/technical-challenge/blob/master/sold-price-map.md).

Full stack implementation.

The time limit was 3 hours, during that time I could only come up with this less than minimal viable solution.
There is a (barely) functioning backend and frontend but I found this approach more useful than focusing on one part
of the application and not even touching the rest.

## Architecture

The app consists of a Koa Node.js backend and a React frontend written in javascript (created with create-react-app). 
Both the API endpoints and the static files for the frontend are served with the same Koa server.

## Run Dev Server
```bash
> yarn
> cd src/frontend
> yarn
> yarn build
> cd ../..
> yarn start
```

## Run Backend Tests
```
> yarn test
```

## Backend

This part wasn't entirely clear to me:
```
The points should be filled with a colour representing 
how expensive a house was in relation to other houses. 
The choice of colour is up to you, however, 
you should use a different colour for each of the following groups:

- 0% - 5%
- 5% - 25%
- 25% - 75%
- 75% - 95%
- 95% - 100%
```
With the given dataset (2500 houses, £10000 min and £10000000 max price) 0%-5% can mean either a) the top 5% most expensive
houses (percentiles) or b) the houses whose price is in the top 5% of the max price.

Because of the ambiguity I implemented both, so the backend has two endpoints. The structure of the data they return are the same:
```
200 OK
[
    {
        x: int,
        y: int,
        price: int,
        priceGroup: int
    },
    ...
]
```
It's the same data as stored in `sold-price-data.txt`, with the additional `priceGroup` field, whose value is between 0 and 4.

### GET /api/data/1
Here priceGroup is based on the calculation in b)

### GET /api/data/2
Calculation based on a)

## Frontend

The frontend is a primitively simple React app that can be accessed on http://localhost:3000 on dev.
It fetches the data from the backend (from `/api/data/1`) and draws the grid and that's it.

## TODO
- Improve the frontend
- Frontend tests
- Deployment instructions / containerization
- Backend documentation (eg. Swagger)
- Basically improve everything :)
