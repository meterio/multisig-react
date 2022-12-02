#!/bin/bash

# build
REACT_APP_NETWORK=mainnet yarn build

# copy dist to mainnet S3
aws s3 cp ./build/ s3://multisig.meter/ --recursive --acl public-read

# invalidate mainnet cloudfront cache
aws cloudfront create-invalidation --distribution-id E318GMJENMO7Z1 --paths "/*"

