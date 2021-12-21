#!/bin/bash

# build
REACT_APP_NETWORK=testnet yarn build

# copy dist to mainnet S3
aws s3 cp ./build/ s3://multisig-test.meter.io/ --recursive --acl public-read

# invalidate mainnet cloudfront cache
aws cloudfront create-invalidation --distribution-id EZQ188C486QG3 --paths "/*"

