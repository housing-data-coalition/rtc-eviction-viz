This is a visualization of eviction filings week-by-week in New York.

**[View it on the web](https://housing-data-coalition.github.io/rtc-eviction-viz/index.html)**

## Quick start

You will need to first copy `.env.sample` to `.env` and edit it accordingly.

Then run:

```
yarn --frozen-lockfile
yarn build-data
yarn watch
```

Then visit http://localhost:1234.

## Updating data

To update the data, re-run `yarn build-data`.

## Deployment

To deploy the site, run `yarn deploy`.