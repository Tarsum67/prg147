const queue = '[{"id":"394","title":"Eat your veggies"},{"id":"378","title":"Every step counts"},{"id":"406","title":"Giving Back"}]';

// Enter code to destringify the `queue` variable here:
let queueObj = JSON.parse(queue);
console.log("Queue Object:", queueObj);

const item = '{"id":"406","title":"Giving Back"}';

// Enter code to destringify the `item` variable here:
let itemObj = JSON.parse(item);
console.log("Item Object:", itemObj);
