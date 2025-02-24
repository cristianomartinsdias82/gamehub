This is a React + Typescript project through which users can search and filter games by genres and platforms.

It makes use of the folloing extra libraries/packages:
Vite
Styles Components
Chakra UI
Axios
React Icons
React hooks like useState and useEffect

Also, it integrates to RAWG Gaming API (see more at: https://rawg.io/apidocs)

To have a local copy up and running on your machine, just do the following:
1 - Install Node v20
2 - Install Vite
3 - Clone the project
4 - Register to RAWG Api to get a personal Api Key
5 - In the project folder, cd into to /src folder
    5.1 - Create a subfolder called 'secrets' and cd into it
    5.2 - Create a file called rawg-api-key.ts and open it
    5.3 - Paste the following content to the rawg-api-key.ts file:
          export const RawgApiKey = "YOU_RAWG_API_KEY";
6 - In the project root folder, run the following command:
    npm start [ENTER]
7 - In this same folder, run the following command:
    npm run dev [ENTER]
8 - Navigate to the address that is informed after running the previous step command
9 - Have fun!
