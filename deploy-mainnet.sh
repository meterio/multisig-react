#!/bin/bash

# build
REACT_APP_NETWORK=mainnet yarn build

# copy dist to mainnet S3
aws s3 cp ./build/ s3://safe.meter.io/ --recursive

# invalidate mainnet cloudfront cache
aws cloudfront create-invalidation --distribution-id E1XCWNCHMGFHJ8 --paths "/*"

