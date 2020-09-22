#!/bin/bash

API="http://localhost:4741"
URL_PATH="/clothes"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
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
