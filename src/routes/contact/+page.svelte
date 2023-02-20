<script>
    import {invalidateAll} from '$app/navigation'
    import { applyAction, deserialize } from '$app/forms';
    /**
	 * @type {{ error_message: any; message: any; }}
	 */
     export let form;
    $: console.log('form', form); 

 //standard onSubmit event
    async function handleForm(event){

        // this ====form element 
        //creating form data
        const data = new FormData(this);
 //sending our own fetch post
        const res = await fetch (this.action, {
            method: 'POST',
            body: data

        });
        const result = deserialize(await res.text());
        if (result.type === 'success'){
            await invalidateAll()
               
        }
applyAction(result);
    }
    </script>

<!--FAil-->
{#if form?.error_message}
<p>{form.error_message}</p>
{/if}
{#if form?.message}
<p>{form.message}</p>
{:else}
<!---\ <form use:enhance= {({ form, data, action, cancel}) => {
    // form  -> form element
    // data   -> form data object
    // action -> url from posts to 
    // cancel -> form cancel action
    return ({ result, update }) => {
        update();
        // result -> 'action result'
        // update() -> runs all of the default use: enhance
    };
}}
action="?/contact?email"
method="POST">-->
<form
on:submit|preventDefault={handleForm}
action="/contact?/email"
>


    <label>
        Name:  <input type ="text" required name="name" id =name/> 
        </label>
        <label>
        Email:  <input type ="email" required name="email" id =email/> 
            </label>
            <label>
        Message:  <textarea required name="message" id= "message"/> 
                </label>
        <button type="submit"> Send Email </button>
                
    </form>
    {/if}
    <style>
        form{
            padding: 20px;
            display: flex;
            gap: 20px;
            flex-direction:column;

        }
        label{
             display:block;
        }
        </style>