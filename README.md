1. pages/index.js 
  
    Starting point of Next.js Project

2. nesting routes

    Ex. pages/blog/index.js 
    http://localhost:3000/blog -> blog page

    Ex. pages/blog/first.js 
    http://localhost:3000/blog/first -> first blog page

3. dynamic routes

    Ex. pages/product/[productId].js
  http://localhost:3000/product/1 -> Product detail page for particular product 

    Note -> if you have dynamic page but if you have specific routes with dynamic page first it will call specific page -> http://localhost:3000/product/categories

4. nested dynamic routes

    Ex. pages/items/[itemId]/review/[reviewId].js
    http://localhost:3000/items/itemId/review/reviewId -> item review with reviewId for particular item
    http://localhost:3000/items/1/review/9

5. Catch all routes

    1. Ex. pages/docs/[...params].js
    http://localhost:3000/docs/feature1/concept1 -> it showing feature1 with concept1

    http://localhost:3000/docs/feature1 -> it showing all feature1

    2. Optional Catch all routes
    Ex. pages/docs/[[...params]].js
    http://localhost:3000/docs -> docs home page

6. Nevigate route with UI -> use Link tag

7. Pre-rendering & Data fetching

  pre-rending -> means render in advance of sending it to the browser

  Types of pre-rending 
    
    1. Static Generation
      - without data
      - with data
      - Incremantal Static Generation
      - dynamic parameters when fetching data

    2. Server-side Rendering
      - data fetcing

  Client-side data fetcing 
  
  Comnining pre-rendering with client-side data fetching 