import getStdin from 'get-stdin';

getStdin().then(str => {
    console.log(`{"bookmarklet": "javascript:${encodeURIComponent(str)}"}`);
});
