# logger

Custom logging to handle measurements and counts.

If configured, send custom event to CloudWatch

## Usage Examples

The code:

```js

const l = new require("bristlr-logger")();

l.count("accountCreated");

l.count("accountCreated", 2);

l.count("accountCreated", 2, "tag");

l.count("accountCreated", 2, {"animal":"doggo"});

l.measure("someStat", 100);

l.measure("someStat", 100, [{"foo": "baa"}, {"animals": "cat"}]);

l.time("someStat", 100);

```

The output (`0000000000` has been used in place of the timestamp):

```
MONITORING|0000000000|1|count|accountCreated|
MONITORING|0000000000|2|count|accountCreated|
MONITORING|0000000000|2|count|accountCreated|#tags:tag
MONITORING|0000000000|2|count|accountCreated|#animal:doggo
MONITORING|0000000000|100|measure|someStat|
MONITORING|0000000000|100|measure|someStat|#foo:baa,animals:cat
MONITORING|0000000000|100ms|measure|someStat|
```