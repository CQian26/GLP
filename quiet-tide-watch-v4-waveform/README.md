# Operation Quiet Tide Watch v4

## Permanent cadet URLs
- https://cwqian.com/cyber/
- https://cwqian.com/sigint/

## Controller
- https://cwqian.com/control/

The controller starts/resets both feeds from one shared Cloudflare Durable Object clock.

## SIGINT UI
- Every released intercept remains in a scrollable history.
- PLAY AUDIO is available on all current scheduled entries.
- Playing an intercept animates the live waveform using the audio signal when the browser allows Web Audio; it falls back to a synthetic responsive waveform if needed.
- The significant GPS-L1 line at T+03:00 uses `signal-line.mp3` but is not visually highlighted.
- Uploaded static/noise files are included in `/public/audio/`.

## Deployment
Use Wrangler:
1. `npm install -g wrangler`
2. `wrangler login`
3. `wrangler deploy`
4. Attach the deployed Worker to `cwqian.com` in Cloudflare.

Private control key embedded in this build:
cuTifyrcjZ-jfqssqSPWS-8n
