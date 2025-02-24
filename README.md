This is a React + Typescript project through which users can search and filter games by genres and platforms.

It makes use of the following extra libraries/packages:
- Vite
- Styled Components
- Chakra UI
- Axios
- React Icons
- React hooks like useState and useEffect

Also, it integrates to RAWG Gaming API (see more at: https://rawg.io/apidocs)

To have a local copy up and running on your machine, just do the following:
- Install Node v20
- Install Vite
- Clone the project
- Register to RAWG Api to get a personal Api Key
- In the project folder, cd into to /src folder
    - Create a subfolder called 'secrets' and cd into it
    - Create a file called rawg-api-key.ts and open it
    - Paste the following content to the rawg-api-key.ts file -> export const RawgApiKey = "YOU_RAWG_API_KEY";
In the project root folder, run the following command -> npm start [ENTER]
In this same folder, run the following command -> npm run dev [ENTER]
Navigate to the address that is informed after running the previous step command
Have fun!
