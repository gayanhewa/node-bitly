const { doRequest, sortUrlsAndHash, generateUrl } = require('./lib');

/**
 *
 * This is the main Bitly module that returns an object of methods.  You need to pass in your
 * OAuth access token, as well as an optional config object. You are returned several helper
 * methods, as well as access to a method to pass any bitly api request to.
 *
 * For information on the data returned from the API, see the docs at
 * https://dev.bitly.com/api.html
 *
 * @module node-bitly
 * @type {function}
 * @param accessToken {string} - The access token, this from an OAuth session
 * @param config {object=} - Optional config object
 * @param [config.apiUrl=api-ssl.bitly.com] {string} - The url of the API service
 * @param [config.apiVersion=v3] {string} - The version of the URL to use
 * @param [config.domain=bit.ly] {string} - The domain to use for shortened urls
 * @returns {object}
 * @example
 * // async/await
 * const BitlyClient = require('bitly');
 * const bitly = BitleyClient('<accessToken>');
 * try {
 *   const { data } = await bitly.shorten(uri);
 *   return data
 * } catch(e) {
 *   throw e;
 * }
 * 
 * // Using Promises
 * bitly.shorten('https://github.com/tanepiper/node-bitly')
 * .then(function(result) {
 *    console.log(result);
 * })
 * .catch(function(error) {
 *    console.error(error);
 * });
 */
module.exports = (accessToken, config) => {
    /**
    * Get the page title of a bitlink
    * @type {Function}
    * @param items {Array<string>} - A string or array of strings of short urls and hashes.
    * @returns {object|Promise<object>}
    * @fulfil {object} - The bitly request data
    * @reject {Error} - Error of the request
    */
    const info = async (items = []) => await bitlyRequest('info', sortUrlsAndHash(items));

    /**
     * Shorted a full length url to a bitlink
     * @type {Function}
     * @param longUrl {string} - The URL to be shortened
     * @return {object|Promise<object>}
     * @fulfil {object} - The bitly request data
     * @reject {Error} - Error of the request
     */
    const shorten = async longUrl => await bitlyRequest('shorten', { longUrl });

    /**
     * Request to expand urls and hashes
     * @param items {Array<string>} - A string or array of strings of short urls and hashes.
     * @returns {object|Promise<object>}
     * @fulfil {object} - The bitly request data
     * @reject {Error} - Error of the request
     */
    const expand = async items => await bitlyRequest('expand', sortUrlsAndHash(items));

    /**
       * Request to get clicks for urls and hashes
       * @param items {Array<string>} - A string or array of strings of short urls and hashes.
    * @returns {object|Promise<object>}
    * @fulfil {object} - The bitly request data
    * @reject {Error} - Error of the request
       */
    const clicks = async items => await bitlyRequest('clicks', sortUrlsAndHash(items));

    /**
    * Request to get clicks by minute for urls and hashes
   * @param items {Array<string>} - A string or array of strings of short urls and hashes.
    * @returns {object|Promise<object>}
    * @fulfil {object} - The bitly request data
    * @reject {Error} - Error of the request
    */
    const clicksByMinute = async items => await bitlyRequest('clicks_by_minute', sortUrlsAndHash(items));

    /**
    * Request to get clicks by day for urls and hashes
    * @param items {Array<string>} - A string or array of strings of short urls and hashes.
    * @returns {object|Promise<object>}
    * @fulfil {object} - The bitly request data
    * @reject {Error} - Error of the request
    */
    const clicksByDay = async items => await bitlyRequest('clicks_by_day', sortUrlsAndHash(items));

    /**
    * Lookup a single url
   * @param url {string} - The URL to look up
     * @return {object|Promise<object>}
     * @fulfil {object} - The bitly request data
     * @reject {Error} - Error of the request
    */
    const lookup = async url => await bitlyRequest('lookup', { url });

    /**
    * Request referrers for a single url
    * @param url {string} - The URL to look up
     * @return {object|Promise<object>}
     * @fulfil {object} - The bitly request data
     * @reject {Error} - Error of the request
    */
    const referrers = async item => await bitlyRequest('referrers', sortUrlsAndHash([item]));

    /**
    * Request countries for a single url
   * @param url {string} - The URL to look up
     * @return {object|Promise<object>}
     * @fulfil {object} - The bitly request data
     * @reject {Error} - Error of the request
    */
    const countries = async item => await bitlyRequest('countries', sortUrlsAndHash([item]));

    /**
   * Perform any bitly API request using a method name and passed data object
   * @param {string} method The method name to be called on the API
   * @param {object} data The data object to be passed. Keys should be query paramaters
   * @return {object|Promise<object>} The bitly request return data
   */
    const bitlyRequest = async (method, data) => {
        try {
            const result = await doRequest({
                accessToken,
                method,
                config,
                data
            });

            if (result.status_code >= 200 && result.status_code < 400) {
                return result;
            }

            const err = new Error(`[node-bitly] Request returned ${result.status_code}: ${result.status_txt}`);
            err.statusCode = result.status_code;
            err.data = result.data;
            throw err;
        } catch (e) {
            throw e;
        }
    };

    return {
        shorten,
        expand,
        clicks,
        clicksByMinute,
        clicksByDay,
        lookup,
        info,
        referrers,
        countries,
        bitlyRequest
    };
};
