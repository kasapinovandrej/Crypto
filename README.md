# Crypto
https://crypto-andrejkasapinov.netlify.app/

TEST PROJECT SPECIFICATION (JAVASCRIPT)

1. General Guidelines:
- The purpose of this test is to help ascertain the qualification and skill level of the prospective candidate applying for the “Web Developer - React” position.
- The specification details listed below are presented in a rather broad sense leaving the candidate to fully implement his view on how certain solutions should be structured and implemented.
2. Assigment:
- Develop a Single Page Application using one of the popular frameworks (Angular 2+, Vue, React with additional libraries). If possible, use React.
3. Functional requirements:
- User has a simple web page with a header and a body with the live price updates for some of the most popular crypto currencies (BitCoin, Ethereum, etc).
- Web page header contains “Login” button.
- User can only see the initial web page until it clicks on the Login button.
- After clicking login button user is logged in forever. There is no logout functionality.
- When logged in, user can visit profile page. This page has some information about the user and an image which can be changed to another one when user clicks on the toggle button.
4. Implementational requirements:
- Application should use public Bitfinex WebSocket data feed to receive crypto currency price updates. Consult the Bitfinex official documentation on the actual message format and protocol:
o https://docs.bitfinex.com/v2/docs/ws-general
o https://docs.bitfinex.com/v2/reference#ws-public-ticker
- Subscribe for the updates to these currency pairs:
o BTCUSD, BTCEUR, ETHUSD, ETHEUR, EOSUSD
- Display the latest update message for all subscribed currency pairs. Show these fields from the received updates in a table:
o Symbol, Daily change, Volume, Last price
- Feel free to make the app’s look and feel as you wish.
- It would be nice to use some of the UI (component) frameworks to quickly generate page layout and components.
- Simulate Login functionality without any interaction with the user. For example, as a simple Boolean flag.
- Toggled picture on the profile page should be “generated” by using this API:
o https://api.hello-avatar.com/adorables/285/<YOUR_EMAIL> or https://picsum.photos/285/285
