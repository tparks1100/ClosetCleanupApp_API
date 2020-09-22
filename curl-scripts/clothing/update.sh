#!/bin/bash

API="http://localhost:4741"
URL_PATH="/clothes"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
  "clothing": {
    "todaysDate": "'"${TODAYSDATE}"'"
    "category": "'"${CATEGORY}"'",
    "clothingDescription": "'"${CLOTHINGDESCRIPTION}"'",
    "isWorn": "'"${ISWORN}"'",
    "status": "'"${STATUS}"'"
  }
}'

echo
