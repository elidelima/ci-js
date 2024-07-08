# SF Challenge - Pipeline de CI com SonarCloud

- Install dependencies:

    `npm i`

- Execute tests:

    `npm run test`

- Run sonar scanner locally from docker with command to overload properties files:

    `docker run \
    --rm \
    -v ".:/usr/src" \
    --network="host" \
    -v $PWD/sonar-project.properties:/usr/lib/sonar-scanner/conf/sonar-scanner.properties \
    sonarsource/sonar-scanner-cli`
