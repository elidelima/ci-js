Challenge Pipeline de CI com SonarCloud

`npm run dev`


# Run sonar scanner with command to overload properties files
docker run \
    --rm \
    -v ".:/usr/src" \
    --network="host" \
    -v $PWD/sonar-project.properties:/usr/lib/sonar-scanner/conf/sonar-scanner.properties \
    sonarsource/sonar-scanner-cli


