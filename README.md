[![Moleculer](https://badgen.net/badge/Powered%20by/Moleculer/0e83cd)](https://moleculer.services)

# moleculer-demo
This is a [Moleculer](https://moleculer.services/)-based microservices project. Generated with the [Moleculer CLI](https://moleculer.services/docs/0.14/moleculer-cli.html).

## Usage
Start the project with `npm run dev` command. 
After starting, open the http://localhost:3000/ URL in your browser. 
On the welcome page you can test the generated services via API Gateway and check the nodes & services.

In the terminal, try the following commands:
- `nodes` - List all connected nodes.
- `actions` - List all registered service actions.
- `call greeter.list` - Call the `greeter.list` action.
- `call greeter.register --targetUrl http://localhost:5000` - Call the `greeter.register` action with the `targetUrl` parameter.
- `call greeter.update --targetUrl http://localhost:5000/todo --id 60f23d2463438b0be04066e1` - Call the `greeter.update` action with the `targetUrl` and `id` parameter.
- `call greeter.delete --id 60f23d2463438b0be04066e1` - Call the `greeter.delete` action with the `id` parameter.
- `call ip.trigger --ipAddress 10.10.10.10` - Call the `ip.trigger` action with the `ipAddress` parameter.

## Database
Local MongoDB storage is used for storing data
`mongodb://localhost:27017/webhooksMicroservice`

## Services
- **api**: API Gateway services
- **greeter**: Sample service with `register`,`update`,`list` and `delete` actions.
- **ip**: Sample service with `trigger` action.

## Mixins
- **db.mixin**: Database access mixin for services. Based on [moleculer-db](https://github.com/moleculerjs/moleculer-db#readme)


## Useful links

* Moleculer website: https://moleculer.services/
* Moleculer Documentation: https://moleculer.services/docs/0.14/

## NPM scripts

- `npm run dev`: Start development mode (load all services locally with hot-reload & REPL)
- `npm run start`: Start production mode (set `SERVICES` env variable to load certain services)
- `npm run cli`: Start a CLI and connect to production. Don't forget to set production namespace with `--ns` argument in script
- `npm run lint`: Run ESLint
- `npm run ci`: Run continuous test mode with watching
- `npm test`: Run tests & generate coverage report
- `npm run dc:up`: Start the stack with Docker Compose
- `npm run dc:down`: Stop the stack with Docker Compose

## Screenshots of output

### Authorized users only access
![authorized_users_only_access](snaps/authorized_users_only_access.PNG)


### Unauthorized users has no access
![](snaps/unauthorized_users_no_access.PNG)


### No Records initially in Database
![](snaps/No_Records_initially_Database.PNG)


### No Records initially
![](snaps/No_Records_initially.PNG)


### Register target url in database
![](snaps/Register_target_url_database.PNG)


### List target url from database
![](snaps/list_target_url.PNG)


### Update target url
![](snaps/update_target_url.PNG)


### Update target url database
![](snaps/update_target_url_database.PNG)


### Delete target url 
![](snaps/delete_target_url.PNG)


### Delete target url from database
![](snaps/delete_target_url_database.PNG)


### Mongo Database screenshot
![](snaps/database_screenshot.PNG)

### Trigger action
![](snaps/trigger_action.PNG)


### localhost:5000 receiving post request made by my application (localhost:3000) - trigger action
![](snaps/localhost-5000_receiving_post_req_made_by_my_application.PNG)
