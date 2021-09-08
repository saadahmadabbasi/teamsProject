# Express backend for teams
This is the code of api solution (node - express + typescript) to solve given problem statement.

Note: As a dB we are using provided foorball.json, we have made it part of our project, and for this exercise purpose I am using node-json-db package to read n write to json file, else in practical scenarios we could create an interface with all crud operations and for different db flavours we can implement differnt connectors, so one app can work with multiple db types (ms sql, mysql ,no sql etc).

due to time constraint I have not implemented tetsting, but we can use frameworks like mocha, chai or jest to write test cases and these cases then can be used in our deployment pipeline as well, so that before every deployment all test cases are ran and all should be successfull for a successful deployment else we can roll back.

we have 3 API endpoints.

/teams (GET) - this gets whole db of teams
/teams (POST) - this inserts a team if name is not present in db, if name is present team image is updated instead (we are actually writing to json file here)
/teams/{team_name} (GET) - this gets details for the specific team if not present it returns null

build folder holds js build from typescript which should be deployed
src folder holds main code
models folder holds interfaces, one in our case (team)
