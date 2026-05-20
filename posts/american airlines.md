On a recent flight from San Francisco to Charlotte, I connected to the AA inflight WiFi out of boredom. The landing page showed a little flight progress tracker, and I figured I'd poke around.

I opened DevTools and watched the network tab while the page loaded. It was hitting a local endpoint on the plane's WiFi network to pull flight data. I made the same request myself and got back a JSON response. The page was only displaying a fraction of what was actually there.

The full payload included airspeed, groundspeed, exact latitude and longitude, pitch, yaw, altitude, outside air temperature, door status, flight phase, flight number, and tail number. More than enough to work with.

I threw together a quick script to fetch the endpoint and display everything in a clean format. Nothing fancy, just a fetch loop and some console output, but it was a much better picture of what the plane was actually doing than the little progress bar on the page.

The door status field was a fun one. It updates in real time, so you can watch it change during boarding and deplaning. The flight phase field is also interesting, going from things like "Preflight" to "Cruise" to "Approach" in discrete steps.

As far as I can tell this is standard on AA flights with inflight WiFi. The endpoint is unauthenticated and accessible to anyone on the network. If you're bored on your next flight, open DevTools and go looking.
