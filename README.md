# logger

Custom logging to handle measurements and counts.

If configured, send custom event to CloudWatch

## Usage Examples

```js

const l = new require("bristlr-logger")();

l.count("accountCreated");

l.count("accountCreated", 2);

l.count("accountCreated", 2, "tag");

l.count("accountCreated", 2, {"animal":"doggo"});

l.measure("someStat", 100);

l.measure("someStat", 100, [{"foo": "baa"}, {"animals": "cat""]);

l.time("someStat", 100);

```