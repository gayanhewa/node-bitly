<a name="module_node-bitly"></a>

## node-bitly ⇒ <code>object</code>
<p>This is the main Bitly module that returns an object of methods.  You need to pass in your
OAuth access token, as well as an optional config object. You are returned several helper
methods, as well as access to a method to pass any bitly api request to.</p>
<p>For information on the data returned from the API, see the docs at
https://dev.bitly.com/api.html</p>


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| accessToken | <code>string</code> |  | <p>The access token, this from an OAuth session</p> |
| [config] | <code>object</code> |  | <p>Optional config object</p> |
| [config.apiUrl] | <code>string</code> | <code>&quot;api-ssl.bitly.com&quot;</code> | <p>The url of the API service</p> |
| [config.apiVersion] | <code>string</code> | <code>&quot;v3&quot;</code> | <p>The version of the URL to use</p> |
| [config.domain] | <code>string</code> | <code>&quot;bit.ly&quot;</code> | <p>The domain to use for shortened urls</p> |

**Example**  
```js
// async/await
const BitlyClient = require('bitly');
const bitly = BitleyClient('<accessToken>');
try {
  const { data } = await bitly.shorten(uri);
  return data
} catch(e) {
  throw e;
}

// Using Promises
bitly.shorten('https://github.com/tanepiper/node-bitly')
.then(function(result) {
   console.log(result);
})
.catch(function(error) {
   console.error(error);
});
```

* [node-bitly](#module_node-bitly) ⇒ <code>object</code>
    * [~info](#module_node-bitly..info) ⇒ <code>object</code> \| <code>Promise.&lt;object&gt;</code>
    * [~shorten](#module_node-bitly..shorten) ⇒ <code>object</code> \| <code>Promise.&lt;object&gt;</code>
    * [~expand](#module_node-bitly..expand) ⇒ <code>object</code> \| <code>Promise.&lt;object&gt;</code>
    * [~clicks](#module_node-bitly..clicks) ⇒ <code>object</code> \| <code>Promise.&lt;object&gt;</code>
    * [~clicksByMinute](#module_node-bitly..clicksByMinute) ⇒ <code>object</code> \| <code>Promise.&lt;object&gt;</code>
    * [~clicksByDay](#module_node-bitly..clicksByDay) ⇒ <code>object</code> \| <code>Promise.&lt;object&gt;</code>
    * [~lookup](#module_node-bitly..lookup) ⇒ <code>object</code> \| <code>Promise.&lt;object&gt;</code>
    * [~referrers](#module_node-bitly..referrers) ⇒ <code>object</code> \| <code>Promise.&lt;object&gt;</code>
    * [~countries](#module_node-bitly..countries) ⇒ <code>object</code> \| <code>Promise.&lt;object&gt;</code>
    * [~bitlyRequest](#module_node-bitly..bitlyRequest) ⇒ <code>object</code> \| <code>Promise.&lt;object&gt;</code>

<a name="module_node-bitly..info"></a>

### node-bitly~info ⇒ <code>object</code> \| <code>Promise.&lt;object&gt;</code>
<p>Get the page title of a bitlink</p>

**Kind**: inner constant of [<code>node-bitly</code>](#module_node-bitly)  
**Fulfil**: <code>object</code> - The bitly request data  
**Reject**: <code>Error</code> - Error of the request  

| Param | Type | Description |
| --- | --- | --- |
| items | <code>Array.&lt;string&gt;</code> | <p>A string or array of strings of short urls and hashes.</p> |

<a name="module_node-bitly..shorten"></a>

### node-bitly~shorten ⇒ <code>object</code> \| <code>Promise.&lt;object&gt;</code>
<p>Shorted a full length url to a bitlink</p>

**Kind**: inner constant of [<code>node-bitly</code>](#module_node-bitly)  
**Fulfil**: <code>object</code> - The bitly request data  
**Reject**: <code>Error</code> - Error of the request  

| Param | Type | Description |
| --- | --- | --- |
| longUrl | <code>string</code> | <p>The URL to be shortened</p> |

<a name="module_node-bitly..expand"></a>

### node-bitly~expand ⇒ <code>object</code> \| <code>Promise.&lt;object&gt;</code>
<p>Request to expand urls and hashes</p>

**Kind**: inner constant of [<code>node-bitly</code>](#module_node-bitly)  
**Fulfil**: <code>object</code> - The bitly request data  
**Reject**: <code>Error</code> - Error of the request  

| Param | Type | Description |
| --- | --- | --- |
| items | <code>Array.&lt;string&gt;</code> | <p>A string or array of strings of short urls and hashes.</p> |

<a name="module_node-bitly..clicks"></a>

### node-bitly~clicks ⇒ <code>object</code> \| <code>Promise.&lt;object&gt;</code>
<p>Request to get clicks for urls and hashes</p>

**Kind**: inner constant of [<code>node-bitly</code>](#module_node-bitly)  
**Fulfil**: <code>object</code> - The bitly request data  
**Reject**: <code>Error</code> - Error of the request  

| Param | Type | Description |
| --- | --- | --- |
| items | <code>Array.&lt;string&gt;</code> | <p>A string or array of strings of short urls and hashes.</p> |

<a name="module_node-bitly..clicksByMinute"></a>

### node-bitly~clicksByMinute ⇒ <code>object</code> \| <code>Promise.&lt;object&gt;</code>
<p>Request to get clicks by minute for urls and hashes</p>

**Kind**: inner constant of [<code>node-bitly</code>](#module_node-bitly)  
**Fulfil**: <code>object</code> - The bitly request data  
**Reject**: <code>Error</code> - Error of the request  

| Param | Type | Description |
| --- | --- | --- |
| items | <code>Array.&lt;string&gt;</code> | <p>A string or array of strings of short urls and hashes.</p> |

<a name="module_node-bitly..clicksByDay"></a>

### node-bitly~clicksByDay ⇒ <code>object</code> \| <code>Promise.&lt;object&gt;</code>
<p>Request to get clicks by day for urls and hashes</p>

**Kind**: inner constant of [<code>node-bitly</code>](#module_node-bitly)  
**Fulfil**: <code>object</code> - The bitly request data  
**Reject**: <code>Error</code> - Error of the request  

| Param | Type | Description |
| --- | --- | --- |
| items | <code>Array.&lt;string&gt;</code> | <p>A string or array of strings of short urls and hashes.</p> |

<a name="module_node-bitly..lookup"></a>

### node-bitly~lookup ⇒ <code>object</code> \| <code>Promise.&lt;object&gt;</code>
<p>Lookup a single url</p>

**Kind**: inner constant of [<code>node-bitly</code>](#module_node-bitly)  
**Fulfil**: <code>object</code> - The bitly request data  
**Reject**: <code>Error</code> - Error of the request  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>The URL to look up</p> |

<a name="module_node-bitly..referrers"></a>

### node-bitly~referrers ⇒ <code>object</code> \| <code>Promise.&lt;object&gt;</code>
<p>Request referrers for a single url</p>

**Kind**: inner constant of [<code>node-bitly</code>](#module_node-bitly)  
**Fulfil**: <code>object</code> - The bitly request data  
**Reject**: <code>Error</code> - Error of the request  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>The URL to look up</p> |

<a name="module_node-bitly..countries"></a>

### node-bitly~countries ⇒ <code>object</code> \| <code>Promise.&lt;object&gt;</code>
<p>Request countries for a single url</p>

**Kind**: inner constant of [<code>node-bitly</code>](#module_node-bitly)  
**Fulfil**: <code>object</code> - The bitly request data  
**Reject**: <code>Error</code> - Error of the request  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>The URL to look up</p> |

<a name="module_node-bitly..bitlyRequest"></a>

### node-bitly~bitlyRequest ⇒ <code>object</code> \| <code>Promise.&lt;object&gt;</code>
<p>Perform any bitly API request using a method name and passed data object</p>

**Kind**: inner constant of [<code>node-bitly</code>](#module_node-bitly)  
**Returns**: <code>object</code> \| <code>Promise.&lt;object&gt;</code> - <p>The bitly request return data</p>  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | <p>The method name to be called on the API</p> |
| data | <code>object</code> | <p>The data object to be passed. Keys should be query paramaters</p> |

