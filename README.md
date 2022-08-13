# IcecreamSwap API

The IcecreamSwap API is a set of public endpoints used by market aggregators (e.g. coinmarketcap.com) to surface 
Uniswap liquidity and volume information. All information is fetched from the underlying subgraphs.

The API is designed around the CoinMarketCap
[requirements document](https://docs.google.com/document/d/1S4urpzUnO2t7DmS_1dc4EL4tgnnbTObPYXvDeBnukCg).

Prefer the IcecreamSwap subgraph for any IcecreamSwap queries whenever possible. The respective subgraphs will always have more
recent data.

Subgraph: https://github.com/simone1999/uniswapv2-subgraph

## API Documentation

The documentation of the endpoints is [here](./api_doc.md).

## Deploying the API

The API uses the [serverless framework](https://serverless.com) and can easily be deployed to any AWS account,
via the `yarn sls deploy` command.

In order to configure your AWS account as a target, 
see [the serverless docs](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/).
