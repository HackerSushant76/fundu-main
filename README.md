# fundu: - https://fundu-eta.vercel.app/

## Deployed backend: - https://fundu-main-api.onrender.com

## Description
This is a website where user can post and comment on each other's post, you have to login or signup to use this website , you can either signup through your google account or through username and password.

## Api end points
- **/** => welcome
- **/posts** => get all the posts
- **/addpost** => to add a post
- **/comments** => get all the comments, (you have to send the post_id through headers)
- **/addcomment** => to post a comment

## Queries for pagination , sorting and filtering
 - use `page` for pagination. `page` should be greater than 1
 - use `sort` for sorting. It recives `top` and `recent` for ascending and descending order by the time of posting.
 - use `filter` for filtering the posts by name. It recieves user's name.

## Tech Stack
<p>
         <img src="https://img.shields.io/badge/MongoDB-14aa53?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb"/>
         <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="expressjs"/>
         <img src="https://img.shields.io/badge/React-282c34?style=for-the-badge&logo=react&logoColor=61DAFB" alt="reactjs" />
         <img src="https://img.shields.io/badge/Node.js-70a760?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs" />
         <img src="https://img.shields.io/badge/Chakra%20UI-27bdb1?style=for-the-badge&logo=chakraui&logoColor=white" alt="chakra-ui" />
</p>

- `React`
- `Auth0`for google authentication
- `Chakra UI` for styling , will learn `material UI`
- `mongodb` for database and is availabe remotely
- `express` for creating api
- `node` environment
# fundu-main
