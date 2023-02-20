<script>
    import { goto } from '$app/navigation';
    import  { env } from '$env/dynamic/public';
    import { PUBLIC_LUT_PUB_KEY } from '$env/static/public';
    console.log('PUBLIC_LUT_PUB_KEY ', PUBLIC_LUT_PUB_KEY );

    import { browser, building, dev, version } from '$app/environment';
     import { navigating } from '$app/stores';
    import Header from './Header.svelte';
    import Footer from './Footer.svelte'; 

    import './style.css';
	import Episodes from './Episodes.svelte';

    
     /**
	 * @type {any}
	 */
      export let data;  
    $: ({all_episodes} = data);
    console.log(browser, building, dev, version);
    // browser -> boolean, if app is running in browser
    // dev -> boolean, if in development
    //building  -> boolean , true,  IF currently build for production
    //version ->config.kit.version.name
    </script>
<Header/>
{#if  !!$navigating}
<div class="loading">Loading</div>
{/if}


<main>
    <div class= "main">
        <button on:click={() => goto ('/contact')}> Change Page</button>
    <slot/>
    </div>
    <aside >
    <Episodes episodes= {all_episodes}/>
    </aside>
    </main>
 <Footer/>

 <style lang="postcss">
    main{
        display:grid;
        grid-template-columns:  300px 1fr;
        gap: 20px;
    }
    aside{
        order:-1;
    }
    .loading{
        position:fixed;
        inset:0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: blue;
        color: white;

    }
    </style>
   
    