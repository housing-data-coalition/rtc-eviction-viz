This is a visualization of eviction filings week-by-week in New York.

**[View it on the web](https://housing-data-coalition.github.io/rtc-eviction-viz)**

## Quick start

You will need to first copy `.env.sample` to `.env` and edit it accordingly.

Then run:

```
npm run --frozen-lockfile
npm run build-data
npm run watch
```

Then visit http://localhost:1234/rtc-eviction-viz.

## Updating data

To update the data, re-run `npm run build-data`.

## Deployment

To deploy the site, run `npm run deploy`.

---

## Manual Tests

- Make sure both [/rtc-eviction-viz](http://localhost:1234/rtc-eviction-viz) and [/rtc-eviction-viz?view=widget](http://localhost:1234/rtc-eviction-viz?view=widget&fieldName=total_active_cases&height=150) routes work.
- [/rtc-eviction-viz](http://localhost:1234/rtc-eviction-viz) should only require a login once.
- [view=widget](http://localhost:1234/rtc-eviction-viz?view=widget&fieldName=total_active_cases&height=150) should not require any auth.
