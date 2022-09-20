<script>
    import { schemaData } from "../data/schemaData.js";

    function makeCombo(srcObj) {
        // create an object to return
        const comboObject = {}

        // for each key in srcObject
        for (let k in srcObj) {
            // generate a math random for each item
            const randIndex = Math.floor(srcObj[k].length * Math.random());
            // store the chosen random value in the returned object
            comboObject[k] = srcObj[k][randIndex];
        }

        // return an object containing one value per srcObj key
        return comboObject;
    };

    function handleClick() {
        schema = makeCombo(schemaData);
        console.log(schema);
    };

    $: schema = {};
</script>

<div class="h-screen w-screen bg-gradient-to-r from-base-100 to-base-300">
    <div class="container flex flex-row mx-auto h-screen w-3/5 justify-center items-center font-mono">
        <main class="flex flex-col justify-center w-full h-2/3 gap-4"><!-- main -->
            
            <div class="flex flex-row w-full gap-4 justify-start">
                <h1 class="text-4xl font-bold leading-8 uppercase text-primary-content">Story<br/>Schema</h1>
                <div class="text-xs self-end">start your creative projects with the<br/>perfect mix of freedom and structure</div>
            </div>

            <div class="flex flex-row w-full h-4/5 gap-4">

                <section class="flex flex-col w-1/2 gap-4">
                    <div class="flex flex-col justify-center items-center w-full h-1/4 bg-base-300 rounded shadow-md">{schema.type   ? schema.type   : 'Click generate...'}</div>
                    <div class="flex flex-col justify-center items-center w-full h-1/4 bg-base-300 rounded shadow-md">{schema.media  ? schema.media  : 'Click generate...'}</div>
                    <div class="flex flex-col justify-center items-center w-full h-1/4 bg-base-300 rounded shadow-md">{schema.length ? schema.length : 'Click generate...'}</div>
                    <div class="flex flex-col justify-center items-center w-full h-1/4 bg-base-300 rounded shadow-md">{schema.struct ? schema.struct : 'Click generate...'}</div>
                </section><!-- left section -->

                <section class="relative bg-neutral text-neutral-content w-1/2 p-12 rounded text-sm font-mono">
                    <button class="absolute btn btn-sm top-2 right-2 text-xs p-2 bg-primary text-primary-content hover:text-neutral-content rounded">copy</button>
                    {#if schema.type}

                        (Your story title here)<br/>
                        A {schema.type} {schema.media} in {schema.length}<br/><br/><br/>
                        
                        --- Outline ---<br/><br/>
                        This is where the template will inset.

                    {:else}
                        Click generate to start..
                    {/if}
                </section><!-- right section -->
            </div>
            <button class="btn w-64 self-end bg-primary text-primary-content hover:text-neutral-content" on:click={handleClick}>generate</button>
        </main>
    </div>
</div>
