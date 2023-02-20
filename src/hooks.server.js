import { sequence } from '@sveltejs/kit/hooks';
import { auth } from '$db/fake_auth';
 
//runs first
// @ts-ignore
async function logger({ event, resolve }) {
const start_time = Date.now();
console.log('start_time', start_time);
// Wait on response , runother hooks and load
const response = await resolve(event);
console.log('${Date.now() - start_time}ms  ${event.request.method} ${event.url.pathname}');
    return response;
}  
//runss 2nd
// @ts-ignore
function authorize ({ event, resolve }) {
    const user  = auth(); 
    event.locals.user = user;
    return resolve(event);
} 

export const handle = sequence (logger, authorize);

//intercepting fetch
//export function handlefetch({ request , fetch }) {
//return fetch(request);
//}